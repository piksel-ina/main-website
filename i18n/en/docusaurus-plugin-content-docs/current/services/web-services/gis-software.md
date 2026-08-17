---
sidebar_position: 3
pagination_next: null
---

import Figure from '@site/src/components/Docs/Figure';

# Use in GIS Software

Web Services can be used directly from the interface of GIS software by adding the service address to the available connection menu. The menu differs for each service.

| Service | QGIS               | ArcGIS Pro      | Address                             |
| ------- | ------------------ | --------------- | ----------------------------------- |
| WMS     | Add WMS/WMTS Layer | New WMS Server  | `https://ows.staging.piksel.big.go.id/wms`  |
| WMTS    | Add WMS/WMTS Layer | New WMTS Server | `https://ows.staging.piksel.big.go.id/wmts` |
| WCS     | Add WCS Layer      | New WCS Server  | `https://ows.staging.piksel.big.go.id/wcs`  |

## QGIS

1. Select Layer → Add Layer, then choose the menu for the service being used.

<Figure
  src="/img/services/web-services/qgis-add-layer.webp"
  alt="Add WMS/WMTS Layer menu in QGIS"
  size={5}
/>

2. Click New, then enter the service name and address.

<Figure
  src="/img/services/web-services/qgis-connection.webp"
  alt="New connection form in QGIS"
  size={5}
/>

3. Click Connect, select an available layer or coverage, then click Add.

<Figure
  src="/img/services/web-services/qgis-layer-list.webp"
  alt="List of Piksel layers in QGIS"
  size={5}
/>

## ArcGIS Pro

1. Select Insert → Connections → Server, then choose the server for the service being used.

<Figure
  src="/img/services/web-services/arcgis-server-menu.webp"
  alt="Server connection menu in ArcGIS Pro"
  size={5}
/>

2. Enter the service address, then click OK.

<Figure
  src="/img/services/web-services/arcgis-server-connection.webp"
  alt="Server connection form in ArcGIS Pro"
  size={5}
/>

3. Select a layer from that connection and add it to the map.
