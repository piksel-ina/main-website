---
sidebar_position: 6
---

# Appendix

This glossary explains technical terms, abbreviations and concepts used in the Piksel documentation.

## Glossary

### Reflectance, temperature and radiometry

**ARD** (Analysis Ready Data) — Data processed and structured to a consistent standard so that it can be loaded and compared directly. The corrections depend on the sensor: optical products require radiometric, geometric and atmospheric correction, while SAR products require radiometric and terrain correction. Piksel provides its baseline satellite products as ARD.

**BOA** (Bottom-Of-Atmosphere) — Reflectance at the Earth's surface after atmospheric effects have been corrected. For optical products, this term refers to surface reflectance.

**Level-1 / L1** — Products derived from sensor data with basic radiometric and geometric corrections, but without higher-level geophysical processing. Examples include Sentinel-2 Level-1C and Sentinel-1 Level-1 GRD.

**Level-2 / L2** — Level-1 products that have undergone processing appropriate to the data type. Examples include atmospheric correction for surface reflectance and surface temperature retrieval for Landsat Collection 2 Level-2.

**Level-3 / L3** — Derived products or composites that combine one or more Level-2 observations. Sentinel-2 GeoMAD is an annual temporal composite.

**SR** (Surface Reflectance) — Reflectance at the Earth's surface after atmospheric effects have been corrected. It describes how the surface reflects sunlight at different wavelengths.

**ST** (Surface Temperature) — Radiative surface temperature derived from thermal infrared bands. Landsat Collection 2 Level-2 products express it in kelvin.

**TOA** (Top-Of-Atmosphere) — Reflectance at the sensor before atmospheric effects have been corrected. Sentinel-2 Level-1C provides TOA reflectance, while Landsat Level-1 data can be converted to TOA reflectance.

### Processing algorithms

**LEDAPS** (Landsat Ecosystem Disturbance Adaptive Processing System) — A NASA and USGS algorithm that produces surface reflectance from Landsat 4, 5 and 7 imagery by correcting atmospheric scattering and absorption.

**LaSRC** (Land Surface Reflectance Code) — A USGS algorithm that produces surface reflectance from the OLI sensors on Landsat 8 and 9.

**Sen2Cor** — An ESA processor that converts Sentinel-2 Level-1C (TOA) data to Level-2A (BOA). It also produces the Scene Classification Layer (SCL), Aerosol Optical Thickness (AOT) and Water Vapour (WVP) bands.

### Radar and SAR

**Backscatter (σ⁰)** — A measure of the microwave energy reflected from the surface back towards the radar sensor. Sigma-nought values can be expressed on a linear or decibel (dB) scale.

**C-band** — The microwave frequency range from about 4 to 8 GHz. Sentinel-1 SAR operates at 5.405 GHz, corresponding to a wavelength of about 5.6 cm. The signal can pass through cloud, while the SAR sensor can operate by day or night.

**GRD** (Ground Range Detected) — A Sentinel-1 Level-1 product projected into ground-range geometry. It is an input to RTC processing.

**IW** (Interferometric Wide Swath) — Sentinel-1's main acquisition mode over land. It has a swath width of about 250 km and produces data at approximately 20 m resolution.

**Polarisation (VV, VH, HH, HV)** — The orientation of a radar wave when it is transmitted and received. Sentinel-1 generally uses dual polarisation, such as VV+VH over land, to record different surface responses.

**RTC** (Radiometrically Terrain Corrected) — A SAR product corrected for radiometric and topographic effects. This makes backscatter values more consistent for comparisons between scenes, through time and across different terrain.

**SAR** (Synthetic Aperture Radar) — An active radar sensor that transmits microwaves and measures the returned signal. SAR does not depend on sunlight and can observe the surface through cloud.

### Satellite sensors

**ETM+** (Enhanced Thematic Mapper Plus) — A multispectral sensor on Landsat 7. It has eight bands, including a 15 m panchromatic band and a 60 m thermal band.

**MSI** (Multi-Spectral Instrument) — An optical sensor on Sentinel-2 that records 13 bands at spatial resolutions of 10, 20 and 60 m.

**OLI** (Operational Land Imager) — A multispectral optical sensor on Landsat 8. OLI has nine bands, including a 15 m panchromatic band, coastal aerosol and cirrus bands.

**OLI-2** — The OLI sensor on Landsat 9. It has 14-bit radiometric resolution, compared with 12-bit OLI data from Landsat 8, allowing it to distinguish finer spectral variation.

**TIRS** (Thermal Infrared Sensor) — The thermal sensor on Landsat 8, with two thermal bands at a native resolution of 100 m. Landsat products resample these bands to 30 m.

**TIRS-2** — The thermal sensor on Landsat 9. Its optical design reduces the stray-light effects found in Landsat 8 TIRS data.

**TM** (Thematic Mapper) — A multispectral sensor on Landsat 4 and 5. TM has seven bands at 30 m resolution, except for the thermal band at a native resolution of 120 m.

### Composite products

**GeoMAD** (Geometric Median and Median Absolute Deviations) — A temporal composite that uses the geometric median to represent typical conditions and several MAD measures to describe variation. Piksel provides annual Sentinel-2 GeoMAD products.

**BCMAD** (Bray-Curtis Median Absolute Deviation) — A variation measure based on Bray-Curtis dissimilarity from the geometric median.

**COUNT** — The number of valid observations used to calculate the composite at each pixel.

**EMAD** (Euclidean Median Absolute Deviation) — A variation measure based on Euclidean distance from the geometric median.

**SMAD** (Spectral Median Absolute Deviation) — A variation measure based on spectral angle from the geometric median.

### Data infrastructure and standards

**COG** (Cloud-Optimized GeoTIFF) — A GeoTIFF arranged so that parts of a raster can be read through HTTP range requests without downloading the whole file.

**CRS** (Coordinate Reference System) — A reference system that determines how coordinates in geospatial data map to locations on the Earth. A CRS is commonly identified by an EPSG code.

**EPSG** — A registry of coordinate reference system identifiers maintained by IOGP. EPSG:4326 for WGS 84 is one example.

**ODC** (Open Data Cube) — An open-source framework for organising, loading and analysing multitemporal geospatial data. Piksel Sandbox uses it to access the data catalogue.

**STAC** (SpatioTemporal Asset Catalog) — An open standard for cataloguing geospatial assets. A STAC catalogue can be searched programmatically with libraries such as `pystac-client`.

### OGC web services

**OGC** (Open Geospatial Consortium) — An international organisation that develops open standards for geospatial data and services.

**WCS** (Web Coverage Service) — An OGC service for retrieving pixel values from raster data. Requests can be limited by area, resolution or band for further analysis.

**WMS** (Web Map Service) — An OGC service for retrieving a rendered map as an image.

**WMTS** (Web Map Tile Service) — An OGC service for retrieving maps as pre-rendered image tiles, suited to web map display.

### Tools and processing workflows

**Argo Workflows** — A Kubernetes-based workflow engine that Piksel uses to run parallel geospatial processing on cloud infrastructure.

**JupyterLab** — A web interface for working with Python notebooks, code and visualisations. Piksel Sandbox uses it as an interactive analysis environment.

**pystac-client** — A Python library for searching a STAC API and retrieving geospatial asset metadata.

**uv** — A Python package and environment manager used in Piksel Sandbox to prepare analysis environments.
