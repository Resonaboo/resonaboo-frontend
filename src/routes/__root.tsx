import {
  HeadContent,
  Scripts,
  createRootRouteWithContext,
} from "@tanstack/react-router"
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools"
import { TanStackDevtools } from "@tanstack/react-devtools"
import Cookies from "js-cookie"
import TanStackQueryDevtools from "../integrations/tanstack-query/devtools"

import appCss from "../styles.css?url"

import type { QueryClient } from "@tanstack/react-query"
import { Toaster } from "#/components/ui/sonner"
import z from "zod"
import { getUserInfoCookie } from "#/server/api/getCookies"

const userInfoSchema = z.object({
  username: z.string(),
  email: z.string(),
})

interface MyRouterContext {
  queryClient: QueryClient
  userInfo: z.infer<typeof userInfoSchema> | undefined
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  beforeLoad: async () => {
    let cookie: string | undefined

    if (typeof document === "undefined") {
      cookie = await getUserInfoCookie()
    } else {
      cookie = Cookies.get("user-info")
    }
    
    if (!cookie) return

    const parse = userInfoSchema.safeParse(JSON.parse(cookie))
    if (parse.error) return

    return {
      userInfo: parse.data,
    }
  },
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: "Resonaboo",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <HeadContent />
      </head>
      <body>
        <Toaster />
        {children}
        <TanStackDevtools
          config={{
            position: "bottom-right",
          }}
          plugins={[
            {
              name: "Tanstack Router",
              render: <TanStackRouterDevtoolsPanel />,
            },
            TanStackQueryDevtools,
          ]}
        />
        <Scripts />
      </body>
    </html>
  )
}
