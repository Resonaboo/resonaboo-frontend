import { useApi } from "#/lib"
import { useQuery } from "@tanstack/react-query"
import { createFileRoute } from "@tanstack/react-router"
import { Button } from "#/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "#/components/ui/card"
import { Loader2 } from "lucide-react"

export const Route = createFileRoute("/{-$locale}/_private/profile/")({
  component: RouteComponent,
})

function RouteComponent() {
  const { userInfo } = Route.useRouteContext()

  const api = useApi()

  const { data, error, isLoading } = useQuery({
    queryKey: ["profile-query"],
    queryFn: async () => {
      const { response, data, error } = await api.GET("/api/profile")

      if (response.status !== 200 && error) throw new Error(error.message)

      if (!data) throw new Error("Empty data")

      return data
    },
  })

  return (
    <div className="container mx-auto py-10 space-y-10 px-4">
      {/* Section 1: Informações do Usuário */}
      <section className="w-full flex flex-col gap-4">
        <h2 className="text-2xl font-bold text-(--paper)">Minha Conta</h2>
        <Card className="bg-black/40 border-white/10 shadow-md">
          <CardContent className="flex flex-col md:flex-row items-start md:items-center justify-between p-6 gap-6">
            <div className="flex md:flex-row flex-col items-start gap-6">
              <img
                src={`https://placehold.co/128?text=${userInfo?.username?.[0]?.toUpperCase() || "U"}`}
                alt="Avatar"
                className="w-20 h-20 border-2 border-white/10"
              />
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white">
                  {userInfo?.username}
                </span>
                <span className="text-sm text-gray-400">{userInfo?.email}</span>

                {isLoading ? (
                  <span className="text-sm text-gray-400 mt-2 flex items-center gap-2">
                    <Loader2 className="w-4 h-4 animate-spin" /> Carregando
                    plano...
                  </span>
                ) : data?.subscription ? (
                  <div className="mt-2 text-sm flex items-center gap-2">
                    <span className="font-semibold text-gray-300">
                      Plano Atual:
                    </span>
                    <span className="text-amber-400 font-bold bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/20">
                      {data.subscription.name}
                    </span>
                  </div>
                ) : (
                  <div className="mt-2 text-sm text-red-400">
                    Nenhum plano ativo
                  </div>
                )}
              </div>
            </div>

            <div className="flex flex-col gap-2 w-full md:w-auto">
              <Button
                variant="outline"
                className="border-amber-400 text-amber-400 hover:text-amber-300"
              >
                Alterar Plano
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Section 2: Sessões Conectadas */}
      <section className="w-full flex flex-col gap-4">
        <h2 className="text-2xl font-bold text-(--paper)">
          Sessões Conectadas
        </h2>
        {isLoading ? (
          <div className="flex items-center justify-center py-10">
            <Loader2 className="w-8 h-8 animate-spin stroke-amber-400" />
          </div>
        ) : error ? (
          <div className="bg-red-500/10 border border-red-500/20 p-4 text-red-400">
            Erro ao carregar sessões: {error.message}
          </div>
        ) : (
          <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {data?.sessions?.map((session) => (
              <Card
                key={session.id}
                className="bg-black/40 border-white/10 shadow-md"
              >
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg text-gray-200">
                    Sessão
                    <span className="text-xs text-gray-500 block font-normal mt-1 break-all">
                      ID: {session.id}
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-gray-400 space-y-2">
                  <div className="flex justify-between items-center border-b border-white/5 pb-2">
                    <span className="font-semibold text-gray-300">IP</span>
                    <span>{session.ip}</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/5 pb-2">
                    <span className="font-semibold text-gray-300">OS</span>
                    <span>{session.os}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-gray-300">Browser</span>
                    <span>{session.browser}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
            {(!data?.sessions || data.sessions.length === 0) && (
              <div className="text-gray-400 col-span-full py-8 text-center bg-black/20 rounded-lg border border-white/5">
                Nenhuma sessão conectada encontrada.
              </div>
            )}
          </div>
        )}
      </section>
    </div>
  )
}
