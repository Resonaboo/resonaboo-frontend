import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/{-$locale}/404')({
  component: RouteComponent,
})

function RouteComponent() {
  return  <section className='flex justify-center items-center h-screen'> <h1 className='text-(--paper) text-4xl font-bold'>404</h1> </section>
}
