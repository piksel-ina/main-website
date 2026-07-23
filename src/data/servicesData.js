import { translate } from "@docusaurus/Translate";

export const servicesData = [
  {
    id: "01",
    title: translate({
      id: "ourServices.explorer.title",
      message: "Jelajah Data",
      description: "Service title: Data Explorer",
    }),
    en: "Data Explorer",
    description: translate({
      id: "ourServices.explorer.description",
      message: "Browse and access the geospatial archive directly in your browser. Filter by date, sensor and area of interest — then export tiles, AOIs, or STAC links to your own workflow.",
    }),
    features: [
      translate({ id: "ourServices.explorer.f1", message: "Multi-sensor archive — Sentinel-1, Sentinel-2, Landsat" }),
      translate({ id: "ourServices.explorer.f2", message: "Tile-aware filtering by AOI, date, cloud cover" }),
      translate({ id: "ourServices.explorer.f3", message: "Direct export to STAC, COG and shapefile" }),
    ],
    status: translate({ id: "ourServices.explorer.status", message: "OPERATIONAL" }),
    endpoint: "explore.piksel.big.go.id",
    linkText: translate({ id: "ourServices.explorer.btn", message: "Mulai Eksplorasi" }),
    link: "/docs/services/explorer",
    color: "#0891b2",
    image: {
      src: '/img/services/explorer-800.jpg',
      srcset: '/img/services/explorer-800.webp 800w, /img/services/explorer-1200.webp 1200w, /img/services/explorer-1600.webp 1600w',
      srcsetFallback: '/img/services/explorer-800.jpg 800w, /img/services/explorer-1200.jpg 1200w, /img/services/explorer-1600.jpg 1600w',
      alt: 'Data Explorer — geospatial archive browser',
    },
    meta: {
      capability: translate({ id: "ourServices.meta.01.capability", message: "Browse & filter", description: "Service 01 capability" }),
      interface: translate({ id: "ourServices.meta.01.interface", message: "Web UI", description: "Service 01 interface type" }),
      prerequisite: translate({ id: "ourServices.meta.01.prerequisite", message: "None", description: "Service 01 prerequisite" }),
      access: translate({ id: "ourServices.meta.01.access", message: "Public", description: "Service 01 access level" }),
      update: translate({ id: "ourServices.meta.01.update", message: "Daily indexing", description: "Service 01 update frequency" }),
    },
  },
  {
    id: "02",
    title: translate({
      id: "ourServices.sandbox.title",
      message: "Analisis Sandbox",
      description: "Service title: Sandbox Analysis",
    }),
    en: "Sandbox Analysis",
    description: translate({
      id: "ourServices.sandbox.description",
      message: "Hosted JupyterHub with the full Open Data Cube stack pre-installed. Prototype on national-scale archives without provisioning a single VM.",
    }),
    features: [
      translate({ id: "ourServices.sandbox.f1", message: "Open Data Cube + xarray + dask, pre-configured" }),
      translate({ id: "ourServices.sandbox.f2", message: "Private workspaces with shared example notebooks" }),
      translate({ id: "ourServices.sandbox.f3", message: "GPU-enabled kernels for research workloads" }),
    ],
    status: translate({ id: "ourServices.sandbox.status", message: "OPERATIONAL" }),
    endpoint: "sandbox.piksel.big.go.id",
    linkText: translate({ id: "ourServices.sandbox.btn", message: "Mulai Belajar" }),
    link: "/docs/services/sandbox",
    color: "#7c3aed",
    image: {
      src: '/img/services/sandbox-800.png',
      srcset: '/img/services/sandbox-800.webp 800w, /img/services/sandbox-1200.webp 1200w, /img/services/sandbox-1600.webp 1600w',
      srcsetFallback: '/img/services/sandbox-800.png 800w, /img/services/sandbox-1200.png 1200w, /img/services/sandbox-1600.png 1600w',
      alt: 'Sandbox Analysis — geospatial hub',
    },
    meta: {
      capability: translate({ id: "ourServices.meta.02.capability", message: "Compute & prototype", description: "Service 02 capability" }),
      interface: translate({ id: "ourServices.meta.02.interface", message: "IDE (Jupyter)", description: "Service 02 interface type" }),
      prerequisite: translate({ id: "ourServices.meta.02.prerequisite", message: "Account", description: "Service 02 prerequisite" }),
      access: translate({ id: "ourServices.meta.02.access", message: "Login", description: "Service 02 access level" }),
      update: translate({ id: "ourServices.meta.02.update", message: "Always current", description: "Service 02 update frequency" }),
    },
  },
  {
    id: "03",
    title: translate({
      id: "ourServices.maps.title",
      message: "Peta Interaktif",
      description: "Service title: Interactive Maps",
    }),
    en: "Interactive Maps",
    description: translate({
      id: "ourServices.maps.description",
      message: "Story maps and dashboards built on Terria. Layer Piksel products alongside your own context to communicate findings to non-technical stakeholders.",
    }),
    features: [
      translate({ id: "ourServices.maps.f1", message: "Terria-based composable story maps" }),
      translate({ id: "ourServices.maps.f2", message: "Embed in ministry portals via iframe" }),
      translate({ id: "ourServices.maps.f3", message: "Real-time overlays from Piksel STAC" }),
    ],
    status: translate({ id: "ourServices.maps.status", message: "OPERATIONAL" }),
    endpoint: "maps.piksel.big.go.id",
    linkText: translate({ id: "ourServices.maps.btn", message: "Buka Peta" }),
    link: "/docs/services/maps",
    color: "#059669",
    image: {
      src: '/img/services/maps-800.jpg',
      srcset: '/img/services/maps-800.webp 800w, /img/services/maps-1200.webp 1200w, /img/services/maps-1600.webp 1600w',
      srcsetFallback: '/img/services/maps-800.jpg 800w, /img/services/maps-1200.jpg 1200w, /img/services/maps-1600.jpg 1600w',
      alt: 'Surface Reflectance Comparison — 2016 vs 2025 Sentinel-2',
    },
    meta: {
      capability: translate({ id: "ourServices.meta.03.capability", message: "Visualize & share", description: "Service 03 capability" }),
      interface: translate({ id: "ourServices.meta.03.interface", message: "Web / Embed", description: "Service 03 interface type" }),
      prerequisite: translate({ id: "ourServices.meta.03.prerequisite", message: "None", description: "Service 03 prerequisite" }),
      access: translate({ id: "ourServices.meta.03.access", message: "Public", description: "Service 03 access level" }),
      update: translate({ id: "ourServices.meta.03.update", message: "Per new product", description: "Service 03 update frequency" }),
    },
  },
  {
    id: "04",
    title: translate({
      id: "ourServices.webservices.title",
      message: "Layanan Web",
      description: "Service title: Web Services",
    }),
    en: "OGC Web Services",
    description: translate({
      id: "ourServices.webservices.description",
      message: "Public WMS, WCS, and STAC endpoints to integrate Piksel data directly into your application or analysis pipeline. No registration required.",
    }),
    features: [
      translate({ id: "ourServices.webservices.f1", message: "WMS / WCS / WMTS — OGC-compliant" }),
      translate({ id: "ourServices.webservices.f2", message: "STAC 1.0 catalog with daily indexing" }),
      translate({ id: "ourServices.webservices.f3", message: "CORS-enabled, public-domain access" }),
    ],
    status: translate({ id: "ourServices.webservices.status", message: "OPERATIONAL" }),
    endpoint: "ows.piksel.big.go.id",
    linkText: translate({ id: "ourServices.webservices.btn", message: "Lihat Dokumentasi" }),
    link: "/docs/services/web-services",
    color: "#2563eb",
    image: {
      src: '/img/services/wms-800.png',
      srcset: '/img/services/wms-800.webp 800w, /img/services/wms-1200.webp 1200w, /img/services/wms-1600.webp 1600w',
      srcsetFallback: '/img/services/wms-800.png 800w, /img/services/wms-1200.png 1200w, /img/services/wms-1600.png 1600w',
      alt: 'OGC Web Services — geospatial integration',
    },
    meta: {
      capability: translate({ id: "ourServices.meta.04.capability", message: "Query & stream", description: "Service 04 capability" }),
      interface: translate({ id: "ourServices.meta.04.interface", message: "API (REST)", description: "Service 04 interface type" }),
      prerequisite: translate({ id: "ourServices.meta.04.prerequisite", message: "None", description: "Service 04 prerequisite" }),
      access: translate({ id: "ourServices.meta.04.access", message: "Public", description: "Service 04 access level" }),
      update: translate({ id: "ourServices.meta.04.update", message: "Daily indexing", description: "Service 04 update frequency" }),
    },
  },
  {
    id: "05",
    title: translate({
      id: "ourServices.production.title",
      message: "Komputasi Awan",
      description: "Service title: Cloud Computing",
    }),
    en: "Cloud Computing",
    description: translate({
      id: "ourServices.production.description",
      message: "Elastic processing for national-scale workloads on AWS, orchestrated through Argo Workflows. For partners running large recurring pipelines.",
    }),
    features: [
      translate({ id: "ourServices.production.f1", message: "Argo Workflows on managed EKS" }),
      translate({ id: "ourServices.production.f2", message: "Cost-shared for partner ministries" }),
      translate({ id: "ourServices.production.f3", message: "Pre-built pipelines: GeoMAD, fractional cover, WOfS" }),
    ],
    status: translate({ id: "ourServices.production.status", message: "ON REQUEST" }),
    endpoint: "argo.piksel.big.go.id",
    linkText: translate({ id: "ourServices.production.btn", message: "Hubungi Kami" }),
    link: "/docs/services/cloud-computing",
    color: "#d97706",
    image: {
      src: '/img/services/argo-800.png',
      srcset: '/img/services/argo-800.webp 800w, /img/services/argo-1200.webp 1200w, /img/services/argo-1600.webp 1600w',
      srcsetFallback: '/img/services/argo-800.png 800w, /img/services/argo-1200.png 1200w, /img/services/argo-1600.png 1600w',
      alt: 'Cloud Computing — argo workflow',
    },
    meta: {
      capability: translate({ id: "ourServices.meta.05.capability", message: "Process at scale", description: "Service 05 capability" }),
      interface: translate({ id: "ourServices.meta.05.interface", message: "CLI / Dashboard", description: "Service 05 interface type" }),
      prerequisite: translate({ id: "ourServices.meta.05.prerequisite", message: "Partnership", description: "Service 05 prerequisite" }),
      access: translate({ id: "ourServices.meta.05.access", message: "By request", description: "Service 05 access level" }),
      update: translate({ id: "ourServices.meta.05.update", message: "On schedule", description: "Service 05 update frequency" }),
    },
  },
  {
    id: "06",
    title: translate({
      id: "ourServices.support.title",
      message: "Dukungan Teknis",
      description: "Service title: Technical Support",
    }),
    en: "Technical Support",
    description: translate({
      id: "ourServices.support.description",
      message: "Expert support to ensure smooth integration, training, and operations across your team. Bilingual (ID / EN), responsive within 1 business day.",
    }),
    features: [
      translate({ id: "ourServices.support.f1", message: "Email-based ticketing with SLA" }),
      translate({ id: "ourServices.support.f2", message: "Onboarding & training workshops" }),
      translate({ id: "ourServices.support.f3", message: "Joint pilots with BIG analysts" }),
    ],
    status: translate({ id: "ourServices.support.status", message: "MON – FRI" }),
    endpoint: "piksel@big.go.id",
    linkText: translate({ id: "ourServices.support.btn", message: "Hubungi Support" }),
    link: "/docs/services/support",
    color: "#dc2626",
    image: {
      src: '/img/services/support-800.png',
      srcset: '/img/services/support-800.webp 800w, /img/services/support-1200.webp 1200w, /img/services/support-1600.webp 1600w',
      srcsetFallback: '/img/services/support-800.png 800w, /img/services/support-1200.png 1200w, /img/services/support-1600.png 1600w',
      alt: 'Technical Support — expert assistance',
    },
    meta: {
      capability: translate({ id: "ourServices.meta.06.capability", message: "Onboard & troubleshoot", description: "Service 06 capability" }),
      interface: translate({ id: "ourServices.meta.06.interface", message: "Email", description: "Service 06 interface type" }),
      prerequisite: translate({ id: "ourServices.meta.06.prerequisite", message: "None", description: "Service 06 prerequisite" }),
      access: translate({ id: "ourServices.meta.06.access", message: "Mon – Fri", description: "Service 06 access level" }),
      update: translate({ id: "ourServices.meta.06.update", message: "< 1 business day", description: "Service 06 update frequency" }),
    },
  },
];

export const servicesSectionHeader = {
  eyebrow: translate({
    id: "ourServices.header.eyebrow",
    message: "Layanan Piksel",
    description: "Eyebrow label for the services section",
  }),
  title: translate({
    id: "ourServices.header.title",
    message: "Ekosistem Piksel",
    description: "Main title for the services section",
  }),
  sub: translate({
    id: "ourServices.header.sub",
    message:
      "Akses ekosistem data geospasial komprehensif untuk mendukung inovasi dan pengambilan keputusan strategis. Dari eksplorasi data terbuka hingga infrastruktur komputasi tingkat lanjut untuk kebutuhan nasional.",
    description: "Subtitle description for the services section",
  }),
};
