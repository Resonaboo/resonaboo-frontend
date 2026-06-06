import { t, type Dictionary } from "intlayer"

const footerContent = {
  key: "footer",
  content: {
    all_rights_reserved: t({
      en: "All rights reserved",
      "pt-BR": "Todos os direitos reservados",
    }),
  },
} satisfies Dictionary

export default footerContent
