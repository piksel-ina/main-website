---
sidebar_position: 3
sidebar_label: GeoMAD
pagination_next: null
---
import Figure from '@site/src/components/Docs/Figure';

# GeoMAD Processing

GeoMAD is a geospatial product derived from the *geomedian* and *median absolute deviation* (MAD) of satellite-image observations collected over a defined period. Drawing on multiple observations reduces the effects of clouds, cloud shadows, and atmospheric variation, giving a more consistent representation of the Earth's surface for multitemporal analysis.

Piksel produces annual GeoMAD from Sentinel-2 imagery across Indonesia. The processing area is divided into tiles or grids, then processed in parallel with [Argo Workflows](../argo). The results are stored in publicly accessible cloud storage and integrated directly with Piksel services.

Argo Workflows coordinates the processing. Once the processing grid has been defined, Argo distributes work to each tile and runs the processing task using the same container image.

Many tiles can be processed at once. The number of parallel tasks is set to match the available resources; when one task finishes, Argo schedules the next tile automatically. This allows a workflow to process thousands of tiles without running each one manually.

<Figure
  src="/img/services/geospatial-data-processing/2-cloud-geomad.webp"
  alt="GeoMAD processing"
  caption="GeoMAD processing"
  captionAlign="center"
  size={6}
/>

## GeoMAD Processing Stages

### 1. Dividing the area into tiles or grids

Indonesia is divided into tiles or grids of a defined size. This creates a consistent processing unit and allows work across many areas to run in parallel.

<Figure
  src="/img/services/geospatial-data-processing/3-tile.webp"
  alt="Indonesia divided into tiles or grids"
  caption="Indonesia divided into tiles or grids"
  captionAlign="center"
  size={6}
/>

### 2. Preparing the Sentinel-2 dataset

Imagery from each period is assembled into a dataset. Images are selected for quality, including their cloud-cover percentage, so the processing uses observations with suitable radiometric and visual quality.

<Figure
  src="/img/services/geospatial-data-processing/4-dataset.webp"
  alt="Sentinel-2 dataset for GeoMAD processing"
  caption="Sentinel-2 dataset for GeoMAD processing"
  captionAlign="center"
  size={6}
/>

### 3. Cloud masking

Cloud masking identifies pixels affected by clouds, cloud shadows, and other atmospheric interference. These pixels are excluded from the next stage so the GeoMAD calculation uses valid pixels.

<Figure
  src="/img/services/geospatial-data-processing/5-masking.webp"
  alt="Cloud masking on the Sentinel-2 dataset"
  caption="Cloud masking on the Sentinel-2 dataset"
  captionAlign="center"
  size={6}
/>

### 4. Calculating GeoMAD

GeoMAD is calculated for each tile from the cloud-masked dataset. The calculation produces the *geomedian* and *median absolute deviation* (MAD) from the observations for that period; the results are then stored in public storage and indexed in Data Cube.

---
