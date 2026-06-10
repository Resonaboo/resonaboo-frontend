import { createFileRoute, Outlet, redirect } from "@tanstack/react-router"

export const Route = createFileRoute("/{-$locale}/_public/auth")({
  beforeLoad: async ({ context }) => {
    if (context.authInfo) {
      throw redirect({ to: "/{-$locale}" })
    }
  },
  component: Outlet,
})
