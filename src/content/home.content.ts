import type { Dictionary } from "intlayer"
import { t } from "intlayer"

const content = {
  key: "home-page",
  content: {
    description: t({
      en: "A platform that acts as a repeater, retransmitting its video signal to multiple endpoints.",
      "pt-BR":
        "Uma plataforma que funciona como um repetidor, retransmitindo seu sinal de vídeo para múltiplos endpoints.",
    }),
    regions: t({
      en: "Regions",
      "pt-BR": "Regiões",
    }),
    region_lists: t({
      en: "Brazil, Canada, Europe, ...",
      "pt-BR": "Brasil, Canadá, Europa, ...",
    }),
    platforms: t({
      en: "Platforms",
      "pt-BR": "Plataformas",
    }),
    features: t({
        en: "Features",
        "pt-BR": "Recursos",
    }),
    contact_me: t({
        en: "Contact me",
        "pt-BR": "Contatos",
    }),
  },
} satisfies Dictionary

export default content
