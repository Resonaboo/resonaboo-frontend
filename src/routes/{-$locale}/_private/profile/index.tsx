import { useApi } from "#/lib"
import { useQuery } from "@tanstack/react-query"
import { createFileRoute } from "@tanstack/react-router"
import { Button } from "#/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "#/components/ui/card"
import { Loader2 } from "lucide-react"
import { LocalizedLink } from "#/components/localized-links"
import { ProfileCard } from "#/components/ProfileCard"
import { SessionCard } from "#/components/SessionCard"
import { useIntlayer } from "react-intlayer"
import { useCallback } from "react"
import { toast } from "sonner"

export const Route = createFileRoute("/{-$locale}/_private/profile/")({
  component: RouteComponent,
})

function RouteComponent() {
  const { userInfo } = Route.useRouteContext()

  const api = useApi()

  const { data, error, isLoading, refetch } = useQuery({
    queryKey: ["profile-query"],
    queryFn: async () => {
      const { response, data, error } = await api.GET("/api/profile")

      if (response.status !== 200 && error) throw new Error(error.message)

      if (!data) throw new Error("Empty data")

      return data
    },
  })

  const removeCb = useCallback((id: string) => {
    api
      .DELETE("/api/auth/delete-session", {
        body: {
          sessionIds: [id],
        },
      })
      .then((res) => {
        if (res.response.status !== 204 && res.error) {
          toast.error(`${res.response.status}: ${res.error.message}`, {
            duration: 3000,
            position: "bottom-center",
            className: "bg-red-400",
            style: {
              color: "white",
              backgroundColor: "red",
              borderColor: "red",
            },
          })

          return
        }

        refetch()
      })
      .catch((error) => {
        toast.error(`${error.message}`, {
          duration: 3000,
          position: "bottom-center",
          className: "bg-red-400",
          style: {
            color: "white",
            backgroundColor: "red",
            borderColor: "red",
          },
        })
      })
  }, [])

  const content = useIntlayer("profile")

  return (
    <>
      <section className="w-full min-h-[calc(100vh-166px)] flex flex-col items-center py-10 gap-y-10">
        <div className="container flex flex-col">
          <ProfileCard
            email={userInfo?.email ?? "Unknow"}
            username={userInfo?.username ?? "Unknow"}
            isLoading={isLoading}
            planTier={data?.subscription?.name}
          />
        </div>

        <div className="container flex flex-col gap-y-5">
          <h2 className="font-bold text-lg text-(--paper)">Current session</h2>
          {isLoading ? (
            <div className="w-full flex items-center justify-center min-h-[122.75px]">
              <span className="text-lg text-(--paper) mt-2 flex items-center gap-2">
                <Loader2 className="w-4 h-4 animate-spin stroke-white" />
                {content.loading_current_session}
              </span>
            </div>
          ) : data?.currentSession ? (
            <SessionCard
              id={data.currentSession.id}
              ip={data.currentSession.ip}
              os={data.currentSession.os}
              browser={data.currentSession.browser}
              removeCb={removeCb}
            ></SessionCard>
          ) : (
            <div className="text-gray-400 col-span-full py-8 text-center bg-black/20 rounded-lg border border-white/5">
              {content.no_current_session}
            </div>
          )}
        </div>

        <div className="container flex flex-col gap-y-5">
          <h2 className="font-bold text-lg text-(--paper)">
            {content.devices_connected}
          </h2>
          {isLoading ? (
            <div className="w-full flex items-center justify-center min-h-[122.75px]">
              <span className="text-lg text-(--paper) mt-2 flex items-center gap-2">
                <Loader2 className="w-4 h-4 animate-spin stroke-white" />
                {content.loading_current_session}
              </span>
            </div>
          ) : data?.sessions && data.sessions.length > 0 ? (
            data.sessions.map((s) => (
              <SessionCard
                key={s.id}
                id={s.id}
                ip={s.ip}
                os={s.os}
                browser={s.browser}
                removeCb={removeCb}
              ></SessionCard>
            ))
          ) : (
            <div className="text-(--paper) col-span-full py-8 text-center bg-black/20 border border-yellow-600/10">
              {content.no_extra_devices}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
