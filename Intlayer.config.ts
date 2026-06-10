import type { IntlayerConfig } from "intlayer";
import { Locales } from "intlayer";

const config: IntlayerConfig = {
  internationalization: {
    defaultLocale: Locales.ENGLISH,
    locales: [Locales.ENGLISH, "pt-BR"],
    strictMode: "inclusive"
  }
}

export default config