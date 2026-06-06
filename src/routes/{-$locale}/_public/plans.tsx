import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/{-$locale}/_public/plans')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/-$locale/_public/plans"!</div>
}
