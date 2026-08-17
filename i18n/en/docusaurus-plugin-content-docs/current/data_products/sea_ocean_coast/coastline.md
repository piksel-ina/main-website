---
sidebar_position: 1
title: Ina Coastline
toc_max_heading_level: 3
description: A Piksel-derived data product for monitoring changes to Indonesia's shoreline since 1987 using Landsat data and tidal modelling.
---

## About

Ina Coastline is a geospatial product built on the Piksel platform that maps Indonesia's shoreline at approximately mean sea level. It combines the Landsat archive with tidal modelling to produce annual shorelines and rates of coastal change from 1987 onwards.

The data can be used to observe erosion and accretion along beaches, sandbars, river mouths and tidal flats. Its annual record supports coastal change analysis from local to national scales.

> **Note:** Unless stated otherwise, **shoreline** in this article means the shoreline position at approximately mean sea level. Ina Coastline is developed for coastal analysis and monitoring. It is not an official or formally designated Badan Informasi Geospasial (BIG) product and must not be used as a legal reference.

## Key Specifications

| Property | Value |
| --- | --- |
| Data type | Vector |
| Coverage | Indonesia |
| Temporal coverage | 1987–2025 |
| Update frequency | Annual |
| Source imagery | Landsat 5, 7, 8 and 9 |
| Elevation reference | Mean sea level |

Ina Coastline is derived from Landsat Surface Reflectance data held on the Piksel platform. See the [Surface Reflectance documentation](/docs/data_products/baseline_satellite/surface_reflectance) for details of the source products.

## Applications

- Monitoring rates of erosion and accretion along Indonesia's coast.
- Analysing historical trends to support local and regional coastal management.
- Examining shoreline responses to extreme weather, sea-level rise and coastal development.
- Providing a historical record for studies of geomorphology and coastal dynamics.

## Data Layers

Ina Coastline comprises three data groups: annual shorelines, rate-of-change points and coastal-change hotspots.

### Annual Shorelines — `shorelines_annual`

This vector layer represents the median shoreline position for each year from 1987 onwards. Shorelines are estimated at mean sea level, using an elevation reference of 0 metres.

| Name | Type | Unit | Description |
| --- | --- | --- | --- |
| `year` | Integer | Year | The year represented by each shoreline. |
| `certainty` | String | — | Data-quality flag. Values include `good`, `unstable data`, `insufficient data` and `aerosol issues`. |
| `tide_datum` | String | — | The tidal datum used as the shoreline elevation reference. |

### Rate-of-change Points — `rates_of_change`

This point layer reports change at 30-metre intervals along non-rocky coastlines. Rates are calculated by applying linear regression to annual shoreline positions over time. Negative values indicate erosion; positive values indicate accretion.

| Name | Type | Unit | Description |
| --- | --- | --- | --- |
| `uid` | String | — | A unique geohash-based identifier for each point. |
| `rate_time` | Float | Metres per year | Annual rate of change calculated without outlying observations. |
| `sig_time` | Float | p-value | Statistical significance of the relationship between shoreline position and time. |
| `se_time` | Float | Metres per year | Standard error of the estimated rate of change. |
| `outl_time` | String | — | Years identified as outliers and excluded from the calculation. |
| `dist_YYYY` | Float | Metres | Shoreline distance in a given year relative to the latest baseline shoreline. |
| `angle_mean`, `angle_std` | Integer | Degrees | Mean and standard deviation of the angles from the reference point to the annual shorelines. |
| `valid_obs` | Integer | — | Number of valid annual observations. |
| `valid_span` | Integer | Years | Span between the first and last valid observations. |
| `sce` | Float | Metres | *Shoreline Change Envelope*: maximum distance between two annual shoreline positions. |
| `nsm` | Float | Metres | *Net Shoreline Movement*: net distance between the oldest and latest positions. |
| `max_year` | Integer | Year | Year when the shoreline was at its most seaward position. |
| `min_year` | Integer | Year | Year when the shoreline was at its most landward position. |
| `certainty` | String | — | Data-quality flag for each rate-of-change point. |

### Coastal-change Hotspots — `hotspots_zoom`

These point layers summarise coastal change within aggregation radii of 1 km, 5 km and 10 km. The summaries help identify coastal segments undergoing change at regional and national scales.

| Name | Type | Unit | Description |
| --- | --- | --- | --- |
| `radius_m` | Integer | Metres | Aggregation radius used to summarise coastal change. |
| `n` | Integer | — | Number of valid `rates_of_change` points used in the calculation. |

## Processing Method

1. **Load data.** Load the Landsat 5, 7, 8 and 9 archive for the processing area. Tier 1 data is preferred, with Tier 2 used when there are insufficient Tier 1 observations.
2. **Calculate water indices.** Use configurable indices—including MNDWI, NDWI, Combined Water Index and MNDWI-NIR—to separate water from land.
3. **Model tides.** Estimate tidal heights using an ensemble of global models and INATIDES as the regional model for Indonesian waters.
4. **Interpolate tides.** Interpolate tidal estimates to 30-metre resolution so that every pixel has an estimate for the image acquisition time.
5. **Filter observations.** Retain imagery captured within the central 50% of the tidal range around mean sea level.
6. **Produce annual composites.** Combine observations into annual median composites. Pixels with fewer than five clear observations are filled using a three-year median composite.
7. **Limit processing to the coastal zone.** Apply a coastal mask to exclude non-coastal areas and built structures from extraction.
8. **Extract shorelines.** Determine waterline positions with the *sub-pixel waterline extraction* method (Bishop-Taylor et al., 2019).
9. **Calculate change.** Apply linear regression to calculate rates of change, statistical significance, standard error, *Shoreline Change Envelope* and *Net Shoreline Movement*.

Source code for the processing workflow is available in the [Indonesia Coastlines repository](https://github.com/piksel-ina/indonesia-coastlines).

## Limitations and Data Quality

### Annual Shorelines

- Annual shorelines represent the median position at mean sea level. They are intended for long-term trend analysis, not daily or seasonal fluctuations or short-lived changes caused by individual extreme events.
- Positional accuracy can decrease on gently sloping tidal flats or in areas with large tidal ranges. Small tidal-model errors can produce substantial horizontal displacement.
- Reflections from bright buildings near the coast may be misclassified as water.
- Water boundaries in coastal aquaculture ponds may be identified as shorelines.
- Data for 1991 and 1992 may be affected by atmospheric aerosols from the eruption of Mount Pinatubo.

The `certainty` flags for `shorelines_annual` include:

- `aerosol issues` — shoreline positions may be affected by atmospheric aerosols.
- `insufficient data` — there are too few cloud-free observations.
- `unstable data` — shoreline positions show high variability.

### Rate-of-change Points

- Rates describe spatial trends but do not identify their cause. Reclamation, ports, channels and natural changes can produce similar patterns.
- Results may be less reliable in rapidly changing, non-linear environments, including depositional environments at river mouths.
- Extreme values should be assessed alongside annual shorelines and reference satellite imagery.

The `certainty` flags for `rates_of_change` include:

- `insufficient observations` — fewer than 25 years of good-quality observations.
- `likely rocky coastline` — the location is likely to be a cliff or rocky shore.
- `extreme value (> 50 m)` — the rate exceeds 50 metres per year.
- `high angular variability` — shoreline movement varies substantially in direction.
- `baseline outlier` — the latest baseline shoreline is identified as an outlier.

The `hotspots_zoom` layers also flag locations where there are too few rate-of-change points to produce a reliable regional summary.

## References

- Bishop-Taylor, R., Nanson, R., Sagar, S., & Lymburner, L. (2021). *Mapping Australia's dynamic coastline at mean sea level using three decades of Landsat imagery*. Remote Sensing of Environment, 267, 112734. https://doi.org/10.1016/j.rse.2021.112734
- Bishop-Taylor, R., Sagar, S., Lymburner, L., Alam, I., & Sixsmith, J. (2019). *Sub-pixel waterline extraction: Characterising accuracy and sensitivity to indices and spectra*. Remote Sensing, 11(24), 2984. https://doi.org/10.3390/rs11242984
- Nanson, R., Bishop-Taylor, R., Sagar, S., & Lymburner, L. (2022). *Geomorphic insights into Australia's coastal change using a national dataset derived from the multi-decadal Landsat archive*. Estuarine, Coastal and Shelf Science, 265, 107712. https://doi.org/10.1016/j.ecss.2021.107712
- Xu, H. (2006). *Modification of normalised difference water index (NDWI) to enhance open water features in remotely sensed imagery*. International Journal of Remote Sensing, 27(14), 3025–3033.
