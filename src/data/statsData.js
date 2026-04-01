import { translate } from "@docusaurus/Translate";
import { Database, Globe, CalendarDays, Unlock } from "lucide-react";

export const statsData = {
  stats: [
    {
      number: translate({
        id: "homepage.stats.01",
        message: "50TB+",
        description: "Statistics Number 01",
      }),
      label: translate({
        id: "homepage.stats.01.label",
        message: "Total Data Tersedia",
        description: "Statistics Label 01",
      }),
      icon: Database,
    },
    {
      number: translate({
        id: "homepage.stats.02",
        message: "100%",
        description: "Statistics Number 02",
      }),
      label: translate({
        id: "homepage.stats.02.label",
        message: "Cakupan Wilayah Indonesia",
        description: "Statistics Label 02",
      }),
      icon: Globe,
    },
    {
      number: translate({
        id: "homepage.stats.03",
        message: "30+",
        description: "Statistics Number 03",
      }),
      label: translate({
        id: "homepage.stats.03.label",
        message: "Tahun Data Historis",
        description: "Statistics Label 03",
      }),
      icon: CalendarDays,
    },
    {
      number: translate({
        id: "homepage.stats.04",
        message: "Gratis",
        description: "Statistics Number 04",
      }),
      label: translate({
        id: "homepage.stats.04.label",
        message: "Akses Terbuka untuk publik",
        description: "Statistics Label 04",
      }),
      icon: Unlock,
    },
  ],
};
