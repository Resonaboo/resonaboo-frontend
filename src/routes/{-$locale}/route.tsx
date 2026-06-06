import { createFileRoute, Outlet, redirect } from '@tanstack/react-router'
import { IntlayerProvider } from "react-intlayer"
import { Header } from '#/components/Header'
import { Footer } from '#/components/Footer'
import { validatePrefix } from 'intlayer'

export const Route = createFileRoute('/{-$locale}')({
  beforeLoad: ({ params }) => {
    const localeParam = params.locale;

    // Validar o prefixo de locale
    const { isValid, localePrefix } = validatePrefix(localeParam);

    if (!isValid) {
      throw redirect({
        to: "/{-$locale}/404",
        params: { locale: localePrefix },
      });
    }
  },
  component: RouteComponent,
})

function RouteComponent() {
  const { locale } = Route.useParams()

  return (
    <IntlayerProvider locale={locale}>
      <Header />
      <Outlet />
      <Footer />
    </IntlayerProvider>
    
  )
}
