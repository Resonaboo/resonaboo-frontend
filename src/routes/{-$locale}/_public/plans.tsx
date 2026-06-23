import { useQuery } from "@tanstack/react-query"
import { createFileRoute } from "@tanstack/react-router"
import { PlanCard } from "#/components/PlanCard"
import { useApi } from "#/lib"
import { Loader2 } from "lucide-react"

export const Route = createFileRoute("/{-$locale}/_public/plans")({
  component: RouteComponent,
})

function RouteComponent() {
  const api = useApi()

  const {
    data: plans,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["plans-query"],
    queryFn: async () => {
      const res = await api.GET("/api/plans")
      if (res.response.status !== 200 && res.error) {
        throw new Error(res.error.message)
      }
      
      return res.data?.avaliablePlans ?? []
    },
  })

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

          {error ? (
            <div className="w-full flex items-center justify-center py-12 bg-black/40 border border-red-600/20 shadow-lg shadow-red-500/15">
              <span className="font-bold text-(--paper)">Error: {error.message}</span>
            </div>
          ) : isLoading ? (
            <div className="w-full flex items-center justify-center py-12">
              <span className="stroke-(--paper) animate-spin"><Loader2 /></span>
            </div>
          ) : (
            plans && (
              <div className="w-full grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {plans.map((p) => (
                  <div className="w-full flex justify-center">
                    <PlanCard
                      id={p.id}
                      name={p.name}
                      description={p.description ?? ""}
                      price={p.price}
                    />
                  </div>
                ))}
              </div>
            )
          )}
        </div>
      </section>
    </>
  )
}
