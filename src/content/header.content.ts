import { t, type Dictionary } from "intlayer"

const headerContent = {
  key: "header",
  content: {
    home: t({
      en: "Home",
      "pt-BR": "Início",
    }),
    plans: t({
      en: "Plans",
      "pt-BR": "Planos",
    }),
    status: t({
      en: "Status",
      "pt-BR": "Status",
    }),
  },
} satisfies Dictionary

export default headerContent
