import { Button } from "./ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card"

export function PlanCard({
  id,
  name,
  description,
  price,
}: {
  id: number
  name: string
  description: string
  price: number
}) {
  return (
    <Card id={`plan-${id}`} className="max-w-80 min-w-70 min-h-80 bg-black/40 shadow-md shadow-amber-400/15">
      <CardHeader>
        <CardTitle className="text-sm text-center font-bold text-(--paper)">
          {name}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col">
        <ul className="flex flex-col gap-4 list-disc gap-y-2">
          {description.split("\n").map((f) => (
            <li>{f}</li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="mt-auto">
        <div className="w-full flex">
          <div className="w-full flex items-center">
            <span className="font-bold text-lg">$ {price/100}/month</span>
          </div>
          <div className="w-full flex justify-end">
            <Button>Buy</Button>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}
