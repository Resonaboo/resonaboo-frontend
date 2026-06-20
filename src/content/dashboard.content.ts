import { t, type Dictionary } from "intlayer";

const dashboardContent = {
  key: "dashboard",
  content: {
    dashboard: t({
      en: "Dashboard",
      "pt-BR": "Painel de Controle",
    }),
    no_available_endpoints: t({
      en: "No available endpoints",
      "pt-BR": "Nenhum endpoint disponível",
    }),
    add_new_endpoint: t({
      en: "Add new endpoint",
      "pt-BR": "Adicionar novo endpoint",
    }),
  },
} satisfies Dictionary;

export default dashboardContent;
