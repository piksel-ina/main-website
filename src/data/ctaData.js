import { translate } from "@docusaurus/Translate";

export const ctaData = {
  title: translate({
    id: "homepage.cta.title",
    message: "Siap Menjelajahi Indonesia Secara Digital?",
    description: "Title for the final CTA section",
  }),
  description: translate({
    id: "homepage.cta.description",
    message:
      "Hubungi kami untuk demonstrasi langsung atau pelajari lebih lanjut melalui dokumentasi teknis kami.",
    description: "Description for the final CTA section",
  }),
  primaryButton: {
    text: translate({
      id: "homepage.cta.button.primary",
      message: "Minta Demonstrasi",
      description: "Label for the primary CTA button",
    }),
    to: "mailto:hello@pik-sel.id", // Placeholder contact link
  },
  secondaryButton: {
    text: translate({
      id: "homepage.cta.button.secondary",
      message: "Baca Dokumentasi",
      description: "Label for the secondary CTA button",
    }),
    to: "/docs/intro",
  },
};
