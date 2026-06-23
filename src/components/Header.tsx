import { Languages, LogIn } from "lucide-react"
import { Button } from "./ui/button"
import { useLocation, useRouteContext } from "@tanstack/react-router"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu"
import { useIntlayer, useLocale } from "react-intlayer"
import { getPathWithoutLocale, getPrefix } from "intlayer"
import { LocalizedLink, type To } from "./localized-links"
import Cookies from "js-cookie"

type MenuItem = {
  label: string
  to: To
}

export function Header() {
  const { pathname } = useLocation()

  const { availableLocales, locale, setLocale } = useLocale()

  const pathWithoutLocale = getPathWithoutLocale(pathname)

  const content = useIntlayer("header")

  const { userInfo } = useRouteContext({ from: "__root__" })

  const menuItems: MenuItem[] = [
    { label: content.home, to: "/home" },
    { label: content.plans, to: "/plans" },
    { label: content.documentation, to: "/404" },
  ] as const

  const authMenuItems: MenuItem[] = [
    { label: content.profile, to: "/profile" },
    { label: content.dashboard, to: "/dashboard" },
    { label: content.logout, to: "/auth/sign-out" },
  ] as const

  return (
    <>
      <header className="sticky top-0 z-10 w-full flex justify-center border-b border-white/15 bg-black/60 backdrop-blur-2xl">
        <nav className="container flex justify-between items-center py-4">
          <div className="flex items-center gap-x-2">
            <LocalizedLink to={"/home"} className="flex items-center gap-x-2">
              <img src="https://placehold.co/40?text=R" alt="" />
              <span className="max-[375px]:hidden  font-extrabold text-md text-(--paper)">
                RESONABOO
              </span>
            </LocalizedLink>

            <div className="md:flex hidden items-center ml-5 gap-x-1">
              {menuItems.map((item) => (
                <Button
                  className={"px-2"}
                  variant={"ghost"}
                  key={item.label}
                  nativeButton={false}
                  render={
                    <LocalizedLink
                      id={`navbar-link-${item.label}`}
                      to={item.to}
                      className={"text-(--paper)"}
                      activeProps={{
                        className: "text-yellow-400 hover:text-yellow-300",
                      }}
                    >
                      {item.label}
                    </LocalizedLink>
                  }
                ></Button>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-end gap-x-2">
            <DropdownMenu>
              <DropdownMenuTrigger
                render={
                  <Button
                    variant="outline"
                    size="icon-sm"
                  />
                }
              >
                <Languages className="stroke-yellow-400 scale-120" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className={"flex flex-col px-2"}>
                {availableLocales.map((localeEl) => {
                  return (
                    <DropdownMenuItem key={localeEl} className={"p-0"}>
                      <LocalizedLink
                        id={`navbar-dropdown-${localeEl}`}
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
            {userInfo ? (
              <DropdownMenu>
                <DropdownMenuTrigger
                  render={
                    <Button
                      variant="outline"
                      size="icon-sm"
                    />
                  }
                >
                  <img src={`https://placehold.co/36?text=${userInfo.username[0].toUpperCase()}`} alt="Avatar" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className={"flex flex-col px-2"}>
                  {authMenuItems.map((item) => {
                    return (
                      <DropdownMenuItem
                        key={item.label}
                        className={"p-0"}
                        variant={
                          item.label === content.logout
                            ? "destructive"
                            : "default"
                        }
                        render={
                          <LocalizedLink
                            id={`navbar-dropdown-${item.label}`}
                            className="w-full h-full uppercase px-2 py-3 font-semibold"
                            aria-current={
                              item.label === locale ? "page" : undefined
                            }
                            params={{
                              locale: getPrefix(item.label).localePrefix,
                            }}
                            to={item.to as To}
                          >
                            {item.label}
                          </LocalizedLink>
                        }
                      ></DropdownMenuItem>
                    )
                  })}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button
                size={"icon-sm"}
                variant={"outline"}
                nativeButton={false}
                render={
                  <LocalizedLink
                    to="/auth/sign-in"
                  >
                    <LogIn className="stroke-yellow-400" />
                  </LocalizedLink>
                }
              ></Button>
            )}
          </div>
        </nav>
      </header>
      <div className="md:hidden fixed bottom-5 w-full flex justify-center">
        <div className="flex items-center justify-between w-fit bg-black/70 backdrop-blur-sm px-2 py-1 border border-amber-400/20 shadow shadow-amber-400/10">
          {menuItems.map((item) => (
            <Button
              className={"px-2"}
              variant={"ghost"}
              key={item.label}
              nativeButton={false}
              render={
                <LocalizedLink
                  id={`navbar-link-${item.label}`}
                  to={item.to}
                  className={"text-(--paper)"}
                  activeProps={{
                    className: "text-yellow-400 hover:text-yellow-300",
                  }}
                >
                  {item.label}
                </LocalizedLink>
              }
            ></Button>
          ))}
        </div>
      </div>
    </>
  )
}
