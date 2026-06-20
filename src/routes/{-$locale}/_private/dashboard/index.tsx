import { Connection } from "#/components/Connection"
import { Button } from "#/components/ui/button"
import { createFileRoute } from "@tanstack/react-router"
import { useIntlayer } from "react-intlayer"

export const Route = createFileRoute("/{-$locale}/_private/dashboard/")({
  component: RouteComponent,
})

function RouteComponent() {
  const content = useIntlayer("dashboard")

  return (
    <>
      <section
        id="features"
        className="w-full min-h-[calc(100vh-166px)] flex flex-col items-center py-10 border-t border-white/15"
      >
        <div className="container flex flex-col gap-y-5">
          <div className="flex items-center justify-start">
            <h1 className="min-[410px]:text-4xl text-2xl font-bold text-(--paper)">
              {content.dashboard}
            </h1>
          </div>

          <div className="w-full flex flex-col gap-y-5">
            <div className="w-full flex flex-col gap-y-3">
              <div className="w-full min-h-32 flex items-center justify-center border border-yellow-600/20 shadow-md shadow-amber-600/20 bg-black/40">
                <h2 className="text-(--paper) font-semibold">{content.no_available_endpoints}</h2>
              </div>
              <Connection />
            </div>

            <div className="w-full flex">
              <Button variant={"default"} className={"w-full h-12"}>
                {content.add_new_endpoint}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
