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
    documentation: t({
      en: "Documentation",
      "pt-BR": "Documentação",
    }),
    dashboard: t({
      en: "Dashboard",
      "pt-BR": "Dashboard",
    }),
    settings: t({
      en: "Settings",
      "pt-BR": "Configurações",
    }),
    logout: t({
      en: "Logout",
      "pt-BR": "Sair",
    }),
  },
} satisfies Dictionary

export default headerContent
