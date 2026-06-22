import { createFileRoute, Outlet } from "@tanstack/react-router"

export const Route = createFileRoute("/{-$locale}/_public/auth")({
  component: Outlet,
})
