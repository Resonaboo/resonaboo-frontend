import { useIntlayer } from "react-intlayer"
import { Card, CardAction, CardDescription, CardHeader } from "./ui/card"
import { Button } from "./ui/button"
import { LocalizedLink } from "./localized-links"
import { X } from "lucide-react"
import { extractDataFromUuidV7 } from "#/lib"

export type SessionProps = {
  id: string
  ip: string
  os: string
  browser: string
  removeCb: (id: string) => void
}

export function SessionCard(props: SessionProps) {
  const { id, ip, os, browser, removeCb } = props
  const date = extractDataFromUuidV7(id)

  return (
    <Card className="bg-black/40 border border-yellow-600/15 shadow-md">
      <CardHeader className="px-6">
        <span className="font-bold min-[375px]:text-lg text-sm text-(--paper)">
          {os} - {browser}
        </span>
        <CardAction>
          <Button variant={"destructive"} size={"icon"} onClick={() => removeCb(id)}>
            <X />
          </Button>
        </CardAction>
        <CardDescription className="flex flex-col gap-y-1 font-semibold">
          <span>Ip: {ip}</span>
          <span>{date.toLocaleDateString()} - {date.toLocaleTimeString()}</span>
        </CardDescription>
      </CardHeader>
    </Card>
  )
}
