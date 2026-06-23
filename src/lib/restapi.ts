import createClient from "openapi-fetch"
import { redirect } from "@tanstack/react-router"
import type { paths } from "./openapi"

const getBaseUrl = () => {
  if (typeof window !== "undefined") {
    return `${window.location.protocol}//${window.location.hostname}:3001`
  }
  return "http://localhost:3001"
}

const client = createClient<paths>({
  baseUrl: getBaseUrl(),
  credentials: "include",
});

client.use({
  onResponse: async ({ response }) => {
    if (response.status === 401) {
      throw redirect({
        to: "/{-$locale}/auth/sign-in",
      })
    }
  },
})

export const useApi = () => client
