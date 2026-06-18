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
    remember_me: t({
      en: "Remember me",
      "pt-BR": "Lembre-me",
    }),
    forgot_password: t({
      en: "Forgot password",
      "pt-BR": "Esqueci minha senha",
    }),
    sign_in: t({
      en: "Sign in",
      "pt-BR": "Entrar",
    }),
    sign_up: t({
      en: "Create account",
      "pt-BR": "Criar conta",
    }),
  },
} satisfies Dictionary

export default signInContent
