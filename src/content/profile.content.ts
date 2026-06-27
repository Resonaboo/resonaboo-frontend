import { t, type Dictionary } from "intlayer";

const profileContent = {
  key: "profile",
  content: {
    loading_plan: t({
      en: "Loading plan...",
      "pt-BR": "Carregando plano...",
    }),
    loading_current_session: t({
      en: "Loading current session...",
      "pt-BR": "Carregando sessão...",
    }),
    current_plan: t({
      en: "Current plan:",
      "pt-BR": "Plano atual:",
    }),
    current_session: t({
      en: "Current session",
      "pt-BR": "Sessão atual",
    }),
    change_plan: t({
      en: "Change plan",
      "pt-BR": "Trocar de plano",
    }),
    devices_connected: t({
      en: "Devices connected",
      "pt-BR": "Dispositivos conectados",
    }),
    no_plan: t({
      en: "No active plan",
      "pt-BR": "Nenhum plano ativo",
    }),
    no_current_session: t({
      en: "No current sessions found",
      "pt-BR": "Nenhuma sessao atual encontrada",
    }),
    no_extra_devices: t({
      en: "No extra devices found",
      "pt-BR": "Nenhuma dispositivo extra conectado",
    }),
  },
} satisfies Dictionary;

export default profileContent;
