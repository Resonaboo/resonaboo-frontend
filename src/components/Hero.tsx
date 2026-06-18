import { FaYoutube, FaTwitch, FaKickstarter, FaTiktok } from "react-icons/fa"
import { Button } from "./ui/button"
import { createLink } from "@tanstack/react-router"
import { useIntlayer } from "react-intlayer"

export function Hero() {
  const LinkButton = createLink(Button)
  const content = useIntlayer("home-page")

  return (
    <section className="w-full flex justify-center">
      <div className="container py-16">
        <img
          src="https://placehold.co/96?text=R"
          alt=""
          className="rounded-full border-2 border-black mb-5"
        />
        <h1 className="min-w-[375px]:text-5xl text-4xl font-extrabold text-(--paper)">
          RESONABOO
        </h1>
        <p className="text-sm font-semibold mt-2 mb-10 max-w-[48ch] text-(--paper-foreground)">
          {content.description}
        </p>

        <div className="mt-5 flex flex-row flex-wrap gap-x-10 gap-y-5 py-5 border-t border-b border-white/40">
          <div className="flex flex-col items-start gap-x-4 gap-y-2">
            <span className="font-medium text-sm text-(--paper-foreground)">
              {content.regions}
            </span>
            <strong className="font-bold text-(--paper) h-6">
              {content.region_lists}
            </strong>
          </div>
          <div className="flex flex-col items-start gap-x-4 gap-y-2">
            <span className="font-medium text-sm text-(--paper-foreground)">
              {content.platforms}
            </span>
            <div className="flex items-center justify-center h-6 gap-x-3">
              <FaYoutube className="fill-(--paper)" size={20} />{" "}
              <FaTwitch className="fill-(--paper)" size={20} />{" "}
              <FaKickstarter className="fill-(--paper)" size={20} />{" "}
              <FaTiktok className="fill-(--paper)" size={20} />
            </div>
          </div>
        </div>

        <div className="w-full mt-10 flex items-center max-[430px]:justify-center gap-x-5">
          <Button
            render={
              <a
                href="#features"
              >
                {content.features}
              </a>
            }
          ></Button>
          <Button
            render={
              <a
                href="#contacts"
              >
                {content.contact_me}
              </a>
            }
          ></Button>
        </div>
      </div>
    </section>
  )
}
