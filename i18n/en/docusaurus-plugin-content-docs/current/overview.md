---
sidebar_position: 1
---

# Overview

Piksel is a digital Earth observation platform that makes satellite imagery and geospatial information for Indonesia easier to access. Its archive includes data from **Sentinel-1**, **Sentinel-2**, and **Landsat 5, 7, 8 and 9** for exploring and analysing change across Indonesia.

## About the Piksel project

The Piksel (Digital Earth Indonesia) project is a collaboration between Badan Informasi Geospasial and Geoscience Australia, with support from Australia’s Department of Foreign Affairs and Trade

Through Piksel, satellite data is organised into consistent, analysis-ready collections and made available through maps, web services, computing environments and processing infrastructure. Users can choose the service that suits their work without downloading entire data archives or setting up all of the processing infrastructure from scratch.

## Piksel services

Piksel services include:

- **[Data Explorer](../services/explorer)** — browse the metadata catalogue and check imagery availability by location and date.
- **[Interactive Map](../services/maps)** — view imagery products and datasets on an interactive map.
- **[Piksel Sandbox](../services/sandbox)** — use JupyterLab and Open Data Cube to explore data and develop Python analyses.
- **[Geospatial Data Processing](../services/geospatial-data-processing)** — run large-scale geospatial processing with cloud computing and Argo Workflows.
- **[Web Services](../services/web-services)** — connect QGIS, ArcGIS or another application through OGC services such as WMS, WMTS and WCS.
- **[Support and Collaboration](../services/support)** — find help, training and information about working with the Piksel team.

## Use cases

The multitemporal imagery archive for Indonesia supports analysis in areas including:

- **[Food and agriculture](../usecases/pangan)** — monitor agricultural land, productivity and planting patterns.
- **[Land cover](../usecases/lahan)** — detect land-use and land-cover change.
- **[Coastal areas](../usecases/pesisir)** — analyse shorelines, mangroves and coastal zones.
- **[Environment](../usecases/lingkungan)** — monitor environmental quality and natural resources.
- **[Disaster management](../usecases/bencana)** — map areas affected by floods, landslides and forest fires.

The data can be processed into annual GeoMAD composites, shoreline-change maps and maps of disaster-affected areas.

## Available data

Piksel data products are organised into the following groups:

- **[Baseline satellite data](../data_products/baseline_satellite/)** — per-scene products and temporal composites from several missions:
  - **[Surface Reflectance](../data_products/baseline_satellite/surface_reflectance/)** from Landsat 5, 7, 8 and 9, and Sentinel-2.
  - **[Surface Temperature](../data_products/baseline_satellite/surface_temperature/)** from Landsat 5, 7, 8 and 9.
  - **[Radar Backscatter](../data_products/baseline_satellite/radar_backscatter/)** from Sentinel-1.
  - **[Annual GeoMAD composites](../data_products/baseline_satellite/s2_geomad_annual)** from Sentinel-2.
- **[Marine and coastal data](../data_products/sea_ocean_coast/coastline)** — derived products such as Ina Coastline for analysing shoreline change.

Specifications for each product are available under [Data Products](../category/data-products/). Use [Data Explorer](../services/explorer) to check availability by location and date.

## Documentation structure

The Piksel documentation is organised around different reader needs:

1. **Services** explains the platform's features and how to use them.
2. **Use Cases** provides analysis examples for several application areas.
3. **Data Products** documents the available products and measurements.
4. **Appendix** provides a glossary of technical terms.

## Where to start

- **New to Piksel?** Check the available data in [Data Explorer](../services/explorer).
- **Want to try an analysis?** Apply for access to [Piksel Sandbox](../services/sandbox), then follow the [Getting Started with Piksel Sandbox](../services/sandbox/sandbox-getting-started) guide.
- **Already have a GIS workflow?** Connect an application through [Web Services](../services/web-services).
- **Need help or want to collaborate?** Visit [Support and Collaboration](../services/support).
