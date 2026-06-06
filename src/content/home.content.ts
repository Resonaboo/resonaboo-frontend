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
    reestream_title: t({
        en: "Restream for big platforms",
        "pt-BR": "Restream para grandes plataformas",
    }),
    reestream_description: t({
      en: "Send your video stream to multiple platforms at once, with low latency and high availability",
      "pt-BR": "Envie seu sinal de vídeo para várias plataformas de uma vez, com baixa latência e alta disponibilidade",
    }),
    custom_endpoint_title: t({
      en: "Send to your own endpoint",
      "pt-BR": "Envie para seu próprio endpoint",
    }),
    custom_endpoint_description: t({
      en: "Send your video stream to your own endpoint to customize or keep it private",
      "pt-BR": "Envie seu sinal de vídeo para seu próprio endpoint para personalizar ou manter privado",
    }),
    high_resolution_title: t({
      en: "High resolution and fps",
      "pt-BR": "Alta resolução e fps",
    }),
    high_resolution_description: t({
      en: "Send your video stream with high quality and high stability",
      "pt-BR": "Envie seu sinal de vídeo com alta qualidade e alta estabilidade",
    }),
    accessible_prices_title: t({
      en: "Accessible prices",
      "pt-BR": "Preços acessíveis",
    }),
    accessible_prices_description: t({
      en: "Reasonable prices for everyone",
      "pt-BR": "Preços razoáveis para todos",
    }),
  },
} satisfies Dictionary

export default content
