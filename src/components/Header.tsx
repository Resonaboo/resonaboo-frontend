import { Languages, LogIn } from "lucide-react"
import { Button } from "./ui/button"
import { createLink, Link, useLocation } from "@tanstack/react-router"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu"
import { useIntlayer, useLocale } from "react-intlayer"
import {
  getHTMLTextDir,
  getLocaleName,
  getPathWithoutLocale,
  getPrefix,
  Locales,
} from "intlayer"
import { LocalizedLink, type To } from "./localized-links"

type MenuItem = {
  label: string
  to: To
}

export function Header() {
  const { pathname } = useLocation()

  const { availableLocales, locale, setLocale } = useLocale()

  const pathWithoutLocale = getPathWithoutLocale(pathname)

  const content = useIntlayer("header")

  const menuItems: MenuItem[] = [
    { label: content.home, to: "/" },
    { label: content.plans, to: "/plans" },
    { label: content.status, to: "/404" },
  ]

  return (
    <>
      <header className="sticky top-0 z-10 w-full flex justify-center border-b border-white/15 bg-linear-to-bl from-black to-[color-mix(in_oklab,var(--color-yellow-500),black_70%)]">
        <nav className="container flex justify-between items-center py-4">
          <div className="flex items-center gap-x-2">
            <LocalizedLink to={"/"} className="flex items-center gap-x-2">
              <img src="https://placehold.co/40?text=R" alt="" />
              <span className="max-[375px]:hidden  font-extrabold text-md text-(--paper)">
                RESONABOO
              </span>
            </LocalizedLink>

            <div className="md:flex hidden items-center ml-5 gap-x-1">
              {menuItems.map((item) => (
                <LocalizedLink
                  to={item.to}
                  className={"navbar-link text-(--paper)"}
                  activeProps={{
                    className: "text-yellow-400 hover:text-yellow-300",
                  }}
                >
                  {item.label}
                </LocalizedLink>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-end gap-x-2">
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Button
                  variant="outline"
                  size="icon-sm"
                  className={"bg-yellow-400/10 border-amber-400/50"}
                >
                  <Languages className="stroke-yellow-400 scale-120" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className={"flex flex-col px-2"}>
                {availableLocales.map((localeEl) => {
                  return (
                    <DropdownMenuItem className={"p-0"}>
                      <LocalizedLink
                        className="w-full h-full uppercase px-2 py-3 font-semibold"
                        aria-current={localeEl === locale ? "page" : undefined}
                        onClick={() => setLocale(localeEl)}
                        params={{ locale: getPrefix(localeEl).localePrefix }}
                        to={pathWithoutLocale as To}
                      >
                        {localeEl}
                      </LocalizedLink>
                    </DropdownMenuItem>
                  )
                })}
              </DropdownMenuContent>
            </DropdownMenu>
            <LocalizedLink
              to="/auth/sign-in"
              className={"button-icon-link w-9 h-9"}
            >
              <LogIn className="stroke-yellow-400" />
            </LocalizedLink>
          </div>
        </nav>
      </header>
      <div className="md:hidden fixed bottom-5 w-full flex justify-center">
        <div className="flex items-center justify-between w-fit bg-black/70 backdrop-blur-sm px-2 py-1 border border-amber-400/20 shadow shadow-amber-400/10">
          {menuItems.map((item) => (
            <LocalizedLink
              to={item.to}
              className={"navbar-link text-(--paper)"}
              activeProps={{
                className: "text-yellow-400 hover:text-yellow-300",
              }}
            >
              {item.label}
            </LocalizedLink>
          ))}
        </div>
      </div>
    </>
  )
}
