import { createServerFn } from "@tanstack/react-start"
import { getCookie } from "@tanstack/react-start/server"

export const getUserInfoCookie = createServerFn({ method: "GET" }).handler(
  async () => {
    // Read a specific cookie securely on the server
    const userInfo = getCookie("user-info")

    if (!userInfo)
        return

    return userInfo
  },
)
