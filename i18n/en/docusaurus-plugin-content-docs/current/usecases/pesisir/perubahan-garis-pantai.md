---
sidebar_position: 2
pagination_prev: null
title: Shoreline Change
description: Analysis of shoreline change across Java using multitemporal Landsat imagery and tidal modelling on the Piksel platform.
---

| | |
| --- | --- |
| Satellites | Landsat 5, 7, 8 and 9 |
| Period | 1987–2025 |
| Study area | Java |
| Sector | Coastal |

## Background

Indonesia's shoreline changes in response to waves, sedimentation, sea-level rise, land reclamation and coastal development. Field surveys cannot routinely cover the entire shoreline, so satellite image time series are needed to map change consistently from year to year.

This analysis uses Java as a study area to demonstrate how Ina Coastline can support coastal-change monitoring.

## Approach

The Landsat archive on the Piksel platform is used to extract annual shoreline positions from 1987 onwards. Imagery is filtered using tidal estimates from an ensemble of global models and INATIDES so that observations represent conditions around mean sea level. This produces annual shorelines that can be compared through time.

The method was developed by Geoscience Australia for DEA Coastlines and adapted to Indonesian conditions in the [Ina Coastline](/docs/data_products/sea_ocean_coast/coastline) product.

## Analysis Results

Rates of change are calculated by applying linear regression to annual shoreline positions over time. Each point represents a 30-metre interval. Negative values indicate landward movement or erosion, while positive values indicate seaward movement or accretion.

The following results come from processing Java and do not represent national results:

- **63.9% of points show accretion** and **36% show erosion**, with a median rate of +0.16 metres per year.
- **59.9% of good-quality points** show statistically significant trends (p-value ≤ 0.01), comprising 52,568 significant accretion points and 23,626 significant erosion points.
- Rates for 90% of points fall between **−2.4 and +7.4 metres per year**. Extreme values reach −101 and +97 metres per year at some locations and require further assessment.
- The median *Shoreline Change Envelope* over 38 years is **42.9 metres**.
- Of 1,960 hotspots with a 1 km aggregation radius, **59 record accretion ≥ 3 metres per year** and **7 record erosion ≤ −3 metres per year**.

These results should be assessed alongside annual shorelines and reference imagery. Rates of change describe trends but do not identify the cause of change at each location.

## References and Attribution

The Ina Coastline method is adapted from DEA Coastlines. Its implementation for Indonesia uses the Piksel platform and INATIDES as part of the tidal modelling process.

- Bishop-Taylor, R., Nanson, R., Sagar, S., & Lymburner, L. (2021). *Mapping Australia's dynamic coastline at mean sea level using three decades of Landsat imagery*. Remote Sensing of Environment, 267, 112734. [https://doi.org/10.1016/j.rse.2021.112734](https://doi.org/10.1016/j.rse.2021.112734)
- Source code: [github.com/piksel-ina/indonesia-coastlines](https://github.com/piksel-ina/indonesia-coastlines)
- DEA Coastlines repository: [github.com/GeoscienceAustralia/dea-coastlines](https://github.com/GeoscienceAustralia/dea-coastlines)
