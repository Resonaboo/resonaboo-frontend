import { createFileRoute, useNavigate } from "@tanstack/react-router"
import { Loader2 } from "lucide-react"
import { useIntlayer } from "react-intlayer"
import Cookies from "js-cookie"
import { useState } from "react"
import { useApi } from "#/lib"

export const Route = createFileRoute("/{-$locale}/_public/auth/sign-out")({
  component: RouteComponent,
})

function RouteComponent() {
  const api = useApi()
  
  const content = useIntlayer("sign-out")

  const navigate = useNavigate()
  useState(() => {
    Cookies.remove("user-info")
    api.POST("/api/auth/sign-out")
    .finally(() => {
      navigate({ to: "/{-$locale}/home" })
    })
  })

  return (
    <>
      <section className="flex w-full min-h-[calc(100vh-166px)] items-center">
        <div className="w-full h-full flex flex-col items-center justify-center gap-y-4">
          <Loader2 className="animate-spin stroke-(--paper)" />
          <h1 className="text-(--paper) animate-pulse">{content.sign_out}</h1>
        </div>
      </section>
    </>
  )
}
