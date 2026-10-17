---
sidebar_position: 2
---
# Web Service Types

Each Web Service serves a different need. Web Map Service (WMS) delivers maps rendered on request, Web Map Tile Service (WMTS) delivers maps as tiles for display, and Web Coverage Service (WCS) provides coverage data for further processing. These differences determine which service to choose before connecting it to an application.

In outline, the process works as follows:

```text
Data usage requirement
            |
            v
   Piksel Web Services
            |
   +--------+--------+
   |        |        |
   v        v        v
  WMS      WMTS     WCS
   |        |        |
   v        v        v
  Map    Map tiles  Coverage data
```

## Web Map Service (WMS)

With WMS, an application sends a request naming the layer, map area, coordinate system, image size, and output format. The service then renders the map according to that request and returns it as an image.

Rendering happens entirely on the server, so the application receives an image ready for display and does not need resources to process large data. As a consequence, every change of area or zoom level triggers a new request and a new render, so display speed depends on server load and the size of the requested area.

The available layers can be seen through the following GetCapabilities request:

```text
https://ows.piksel.big.go.id/wms?service=WMS&request=GetCapabilities
```

The response is an XML document listing each layer along with the coordinate systems and image formats supported. These layer names are the ones used when connecting the service to an application.

## Web Map Tile Service (WMTS)

WMTS prepares maps as tiles at predetermined zoom levels. Because those tiles are created before they are requested, an application only retrieves the map sections that match the current view, without waiting for a render on each request.

Serving maps as tiles makes panning and zooming feel more responsive, including when many users access them at once. As a consequence, the display follows the zoom levels and tile grid already established, so the area and map size cannot be requested as freely as with WMS.

The available layers can be seen through the following GetCapabilities request:

```text
https://ows.piksel.big.go.id/wmts?service=WMTS&request=GetCapabilities
```

The response lists the layer names, the tile grid and zoom levels available, and the image formats supported.

## Web Coverage Service (WCS)

With WCS, an application receives data along with its pixel values rather than a map image. A request can be limited to a specific area, so the data retrieved covers only the region needed.

Because the pixel values are available, the data can be used directly for computation and analysis, such as vegetation indices or spatial modelling. The size of the data retrieved depends on the area and its resolution, so an overly large request can require substantial download time and storage capacity.

The available coverages can be seen through the following GetCapabilities request:

```text
https://ows.piksel.big.go.id/wcs?service=WCS&request=GetCapabilities
```

The response lists the coverage names available along with the data formats supported.

## Comparison

A summary of the differences between the three services:

| Aspect          | WMS                 | WMTS                  | WCS                            |
| --------------- | ------------------- | --------------------- | ------------------------------ |
| Response        | Map image           | Map tiles             | Data with pixel values         |
| Used for        | Displaying maps     | Displaying maps       | Computation and analysis       |
| Area coverage   | As requested        | Follows the tile grid | As requested                   |
| Map preparation | Rendered on request | Prepared in advance   | Depends on area and resolution |
