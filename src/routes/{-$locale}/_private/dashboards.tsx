import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/{-$locale}/_private/dashboards')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_private/"!</div>
}
