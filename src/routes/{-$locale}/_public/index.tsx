import { FeatureCard } from '#/components/FeatureCard'
import { Hero } from '#/components/Hero'
import { createFileRoute } from '@tanstack/react-router'
import { useIntlayer } from 'react-intlayer'

export const Route = createFileRoute('/{-$locale}/_public/')({ component: Home })

function Home() {
  const content = useIntlayer("home-page")

  return (
    <>
      <Hero />

      <section
        id="features"
        className="w-full flex flex-col items-center py-10 border-t border-white/15"
      >
        <div className="container flex flex-col gap-y-5">
          <div className="text-start w-full">
            <h2 className="text-4xl text-(--paper) font-extrabold">{content.features}</h2>
          </div>

          <div className="w-full flex items-center justify-center">
            <div className="md:w-full w-fit grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 items-start justify-center gap-y-10">
              <div className="w-full flex items-center justify-center px-2">
                <FeatureCard
                  image="https://placehold.co/256?text=Features"
                  title="Restream for big platforms"
                  description="Send your video stream to various platforms at once, with low latency and high availability"
                />
              </div>
              <div className="w-full flex items-start justify-center px-2">
                <FeatureCard
                  image="https://placehold.co/256?text=Features"
                  title="Send to your own endpoint"
                  description="Send your video stream to your own endpoint to customize or keep it private"
                />
              </div>
              <div className="w-full flex items-start justify-center px-2">
                <FeatureCard
                  image="https://placehold.co/256?text=Features"
                  title="High resolution and fps"
                  description="Send your video stream with high quality and high stability"
                />
              </div>
              <div className="w-full flex items-start justify-center px-2">
                <FeatureCard
                  image="https://placehold.co/256?text=Features"
                  title="Accessible Prices"
                  description="Reasonable prices for everyone"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="contacts"
        className="w-full flex flex-col items-center py-10 border-t border-white/15"
      >
        <div className="container flex flex-col gap-y-10">
          <div className="text-start w-full">
            <h2 className="text-4xl text-(--paper) font-extrabold">Contacts</h2>
          </div>

          <div className="w-full flex flex-col items-center gap-y-20 border-t border-b py-7 border-white/20">
            <div className="w-full grid lg:grid-cols-2 sm:grid-cols-2 grid-cols-1 items-center gap-y-10">
              <div className="w-full flex flex-col gap-y-2">
                <span className="font-medium text-(--paper-foreground)">
                  EMAIL
                </span>
                <strong className="font-bold text-(--paper)">
                  resonaboo@gmail.com
                </strong>
              </div>
              <div className="w-full flex flex-col gap-y-2">
                <span className="font-medium text-sm text-(--paper-foreground)">
                  GITHUB
                </span>
                <strong className="font-bold text-(--paper)">
                  <a href="https://github.com/resonaboo">/resonaboo</a>
                </strong>
              </div>
              <div className="w-full flex flex-col gap-y-2">
                <span className="font-medium text-sm text-(--paper-foreground)">
                  DISCORD
                </span>
                <strong className="font-bold text-(--paper)">
                  /resonaboo
                </strong>
              </div>
              <div className="w-full flex flex-col gap-y-2">
                <span className="font-medium text-sm text-(--paper-foreground)">
                  LINKEDIN
                </span>
                <strong className="font-bold text-(--paper)">
                  /resonaboo
                </strong>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-wrap items-center gap-x-8">
            <a href="/terms" className="text-[11px] text-(--paper)">INSTAGRAM</a>
            <a href="/terms" className="text-[11px] text-(--paper)">X/TWITTER</a>
          </div>
        </div>
      </section>
    </>
  )
}
