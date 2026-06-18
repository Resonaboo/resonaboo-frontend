import { PlanCard } from "#/components/PlanCard"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/{-$locale}/_public/plans")({
  component: RouteComponent,
})

type PlansType = {
  level: string
  features: string[]
  price: number
}

function RouteComponent() {
  const plans: PlansType[] = [
    {
      level: "Carbon",
      features: [
        "Unlimited band",
        "Stream up to 1080p at 60fps",
        "Support to stream platform only",
        "1 Entrypoint and 2 Endpoits",
      ],
      price: 10,
    },
    {
      level: "Silver",
      features: [
        "Unlimited band",
        "Stream up to 2K at 60fps",
        "Support to stream platform",
        "Support to custom endpoint",
        "2 Entrypoint and 4 Endpoints",
      ],
      price: 15,
    },
    {
      level: "Gold",
      features: [
        "Unlimited band",
        "Stream up to 4K at 60fps",
        "Support to stream platform",
        "Support to custom endpoint",
        "4 Entrypoint and 8 Endpoints",
      ],
      price: 20,
    },
  ]

  return (
    <>
      <section className="w-full min-h-[calc(100vh-166px)] flex justify-center">
        <div className="container flex flex-col py-16 gap-20">
          <div className="w-full flex flex-col items-center gap-y-4">
            <h1 className="font-bold md:text-5xl sm:text-4xl min-[420px]:text-2xl text-[20px] text-center text-2xl text-(--paper)">
              Simple and previsible price!
            </h1>
            <h2 className="font-bold sm:text-xl min-[420px]:text-sm text-[12px] text-(--paper-foreground)">
              Change your plan always you need!
            </h2>
          </div>

          <div className="w-full grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {plans.map((p) => (
              <div className="w-full flex justify-center">
                <PlanCard
                  level={p.level}
                  features={p.features}
                  price={p.price}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
