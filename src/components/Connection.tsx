import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { ChevronDownIcon, Plus, RefreshCcw, Trash } from "lucide-react"
import { Input } from "./ui/input"
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/components/ui/combobox"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "#/components/ui/dropdown-menu"

export function Connection() {
  const countries = [
    "EUA",
    "BR",
    "UE",
    "IN",
    "CH",
  ] as const

  return (
    <Card className="w-full p-4 bg-black/10 border border-yellow-500/20">
      <CardContent>
        <Collapsible className="data-open:bg-black/40">
          <CollapsibleTrigger
            render={
              <Button variant="secondary" className="w-full">
                Connection 1
                <ChevronDownIcon className="ml-auto group-data-panel-open/button:rotate-180" />
              </Button>
            }
          />
          <CollapsibleContent className="flex flex-col items-start gap-2 py-2.5 px-6 text-sm">
            <div className="w-full grid grid-cols-3">
              <div className="w-full h-full flex items-center justify-start font-bold text-(--paper)">
                <span>Entrypoint</span>
              </div>
              <div className="w-full h-full flex items-center justify-start">
                <Input placeholder="Entrypoint" className="w-full" />
              </div>
              <div className="w-full h-full flex items-center justify-end gap-x-2">
                <Button variant="default" size={"icon"}>
                  <RefreshCcw />
                </Button>
                <Button variant="destructive" size={"icon"}>
                  <Trash />
                </Button>
              </div>
            </div>

            <div className="w-full grid grid-cols-3">
              <div className="w-full h-full flex items-center justify-start font-bold text-(--paper)">
                <span>Endpoint</span>
              </div>
              <div className="w-full h-full flex items-center justify-start">
                <Input placeholder="Endpoint" className="w-full" />
              </div>
              <div className="w-full h-full flex items-center justify-end gap-x-2">
                <Button variant="default" size={"icon"}>
                  <RefreshCcw />
                </Button>
                <Button variant="destructive" size={"icon"}>
                  <Trash />
                </Button>
              </div>
            </div>

            <div className="w-full grid grid-cols-2 pt-6">
              <div className="w-full h-full flex items-center justify-start font-bold text-(--paper)">
                <Combobox items={countries}>
                  <ComboboxInput placeholder="Select a region" />
                  <ComboboxContent>
                    <ComboboxEmpty>No items found.</ComboboxEmpty>
                    <ComboboxList>
                      {(item) => (
                        <ComboboxItem key={item} value={item}>
                          {item}
                        </ComboboxItem>
                      )}
                    </ComboboxList>
                  </ComboboxContent>
                </Combobox>
              </div>
              <div className="w-full h-full flex items-center justify-end">
                <DropdownMenu>
                  <DropdownMenuTrigger
                    render={
                      <Button size={"icon"}>
                        <Plus />
                      </Button>
                    }
                  />
                  <DropdownMenuContent>
                    <DropdownMenuGroup>
                      <DropdownMenuLabel>Stream Platform</DropdownMenuLabel>
                      <DropdownMenuItem>YouTube</DropdownMenuItem>
                      <DropdownMenuItem>Twitch</DropdownMenuItem>
                      <DropdownMenuItem>Kick</DropdownMenuItem>
                      <DropdownMenuItem>Tiktok</DropdownMenuItem>
                    </DropdownMenuGroup>
                    <DropdownMenuGroup>
                      <DropdownMenuLabel>Custom Watcher</DropdownMenuLabel>
                      <DropdownMenuItem>SRT</DropdownMenuItem>
                    </DropdownMenuGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </CollapsibleContent>
        </Collapsible>
      </CardContent>
    </Card>
  )
}
