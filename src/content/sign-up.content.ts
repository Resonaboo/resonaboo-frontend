import { t, type Dictionary } from "intlayer"

const signUpContent = {
  key: "sign-up",
  content: {
    title: t({
      en: "Sign Up",
      "pt-BR": "Criar Conta",
    }),
    description: t({
      en: "Create an account to use Resonaboo",
      "pt-BR": "Crie uma conta para usar o Resonaboo",
    }),
    username: t({
      en: "Username",
      "pt-BR": "Nome de usuário",
    }),
    username_placeholder: t({
      en: "Enter your username",
      "pt-BR": "Digite seu nome de usuário",
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
    sign_up: t({
      en: "Sign Up",
      "pt-BR": "Criar Conta",
    }),
  },
} satisfies Dictionary

export default signUpContent
