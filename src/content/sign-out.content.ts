import { t, type Dictionary } from "intlayer";

const signOutContent = {
  key: "sign-out",
  content: {
    sign_out: t({
      en: "logging out",
      "pt-BR": "saindo",
    }),
  },
} satisfies Dictionary;

export default signOutContent;
