import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";
import { validatePrefix } from "intlayer";

export const Route = createFileRoute("/{-$locale}")({
  beforeLoad: ({ params }) => {
    // beforeLoad runs on both client and server, so resolve the locale from the
    // route params rather than from request headers.
    const { isValid, localePrefix } = validatePrefix(params.locale);

    // A valid (or absent, i.e. default) locale prefix is fine as-is.
    if (isValid) return;

    // Otherwise redirect to the same route with a valid locale prefix.
    throw redirect({
      params: { locale: localePrefix },
      to: "/{-$locale}",
    });
  },
  component: Outlet,
});
