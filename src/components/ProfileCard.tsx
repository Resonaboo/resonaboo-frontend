import { useIntlayer } from "react-intlayer"
import { Card, CardContent, CardDescription, CardHeader } from "./ui/card"
import { Loader2 } from "lucide-react"
import { Button } from "./ui/button"
import { LocalizedLink } from "./localized-links"

export type ProfileProps = {
  username: string
  email: string
  planTier: string | undefined
  isLoading: boolean
}

export function ProfileCard(props: ProfileProps) {
  const { username, email, planTier, isLoading } = props
  const content = useIntlayer("profile")

  return (
    <Card className="bg-black/40 border-white/10 shadow-md">
      <CardContent className="flex flex-col md:flex-row items-start md:items-center justify-between p-6 gap-6">
        <div className="flex md:flex-row flex-col items-start gap-6">
          <img
            src={`https://placehold.co/128?text=${username[0].toUpperCase() || "U"}`}
            alt="Avatar"
            className="w-20 h-20 border-2 border-white/10"
          />
          <div className="flex flex-col">
            <span className="text-2xl font-bold text-white">
              {username}
            </span>
            <span className="text-sm text-gray-400">{email}</span>

            {isLoading ? (
              <span className="text-sm text-gray-400 mt-2 flex items-center gap-2">
                <Loader2 className="w-4 h-4 animate-spin stroke-white" /> 
                {content.loading_plan}
              </span>
            ) : planTier ? (
              <div className="mt-2 text-sm flex items-center gap-2">
                <span className="font-semibold text-gray-300">
                  {content.current_plan}
                </span>
                <span className="text-amber-400 font-bold bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/20">
                  {planTier}
                </span>
              </div>
            ) : (
              <div className="mt-2 text-sm text-red-400">
                {content.no_plan}
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-2 w-full md:w-auto">
          <Button
            variant="outline"
            className="border-amber-400 text-amber-400 hover:text-amber-300"
            nativeButton={false}
            render={<LocalizedLink to="/plans">{content.change_plan}</LocalizedLink>}
          ></Button>
        </div>
      </CardContent>
    </Card>
  )
}
