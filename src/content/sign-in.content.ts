import { t, type Dictionary } from "intlayer"

const signInContent = {
  key: "sign-in",
  content: {
    title: t({
      en: "Sign In",
      "pt-BR": "Entrar",
    }),
    description: t({
      en: "Login to your account to use Resonaboo",
      "pt-BR": "Entre com sua conta para usar o Resonaboo",
    }),
    email: t({
      en: "Email",
      "pt-BR": "Email",
    }),
    email_placeholder: t({
      en: "Enter your email",
      "pt-BR": "Digite seu email",
    }),
    password: t({
      en: "Password",
      "pt-BR": "Senha",
    }),
    sign_in: t({
      en: "Sign in",
      "pt-BR": "Entrar",
    }),
  },
} satisfies Dictionary

export default signInContent
