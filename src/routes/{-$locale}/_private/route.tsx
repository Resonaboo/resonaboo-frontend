import { createFileRoute, Outlet, redirect } from "@tanstack/react-router"

export const Route = createFileRoute("/{-$locale}/_private")({
  beforeLoad: async ({ context }) => {
    if (!context.userInfo) {
      throw redirect({ to: "/{-$locale}/home" })
    }
  },
  component: Outlet,
})
