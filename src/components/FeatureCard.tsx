import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './ui/card'

export function FeatureCard({
  image,
  title,
  description,
}: {
  image: string
  title: string
  description: string
}) {
  return (
    <Card className="max-w-80 bg-(--ink)/10 shadow-md shadow-amber-400/15">
      <CardContent className="flex flex-col items-center">
        <img src={image} alt="" />
      </CardContent>
      <CardHeader>
        <CardTitle className="text-sm font-bold text-(--paper)">
          {title}
        </CardTitle>
        <CardDescription className="text-sm font-medium text-(--paper-foreground)">
          {description}
        </CardDescription>
      </CardHeader>
    </Card>
  )
}
