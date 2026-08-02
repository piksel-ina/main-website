import React, { useEffect, useRef } from 'react';
import styles from './styles.module.scss';

const PMTILES_URL =
  'https://piksel-staging-public-data.s3.ap-southeast-3.amazonaws.com/ls_coastlines/coastlines_0.0.5.Java-Island-V3.pmtiles';

const TITLES = {
  shorelines: 'Annual Shorelines · shorelines_annual',
  rates: 'Rate of Change · rates_of_change',
  all: 'Ina Coastline Data',
};

const buildShorelineHtml = (pmtilesUrl) => `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="stylesheet" href="https://unpkg.com/maplibre-gl@4.7.1/dist/maplibre-gl.css" />
  <script src="https://unpkg.com/maplibre-gl@4.7.1/dist/maplibre-gl.js"><\/script>
  <script src="https://unpkg.com/pmtiles@3.2.1/dist/pmtiles.js"><\/script>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    html, body, #map { width: 100%; height: 100%; }
    body { background: #0d1117; }
    .maplibregl-ctrl-attrib { font-size: 10px; }
    .legend {
      position: absolute;
      bottom: 28px;
      right: 8px;
      background: rgba(13,17,23,0.9);
      border: 1px solid rgba(255,255,255,0.1);
      border-radius: 6px;
      padding: 10px 12px;
      color: #e2e8f0;
      font-size: 11px;
      font-family: monospace;
      backdrop-filter: blur(6px);
      min-width: 150px;
    }
    .legend-title {
      font-weight: 600;
      margin-bottom: 8px;
      font-size: 10px;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: rgba(255,255,255,0.45);
    }
    .legend-gradient {
      height: 10px;
      border-radius: 3px;
      background: linear-gradient(to right, #1a237e, #00695c, #f9a825, #4fd1c5);
      margin-bottom: 4px;
    }
    .legend-labels {
      display: flex;
      justify-content: space-between;
      font-size: 10px;
      color: rgba(255,255,255,0.45);
    }
    .legend-note {
      margin-top: 6px;
      font-size: 10px;
      color: rgba(255,255,255,0.3);
      border-top: 1px solid rgba(255,255,255,0.08);
      padding-top: 6px;
    }
    .loading {
      position: absolute;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #0d1117;
      color: rgba(255,255,255,0.35);
      font-size: 12px;
      font-family: monospace;
      letter-spacing: 0.06em;
    }
  </style>
</head>
<body>
  <div id="map"></div>
  <div class="loading" id="loading">Loading map...</div>
  <div class="legend" id="legend" style="display:none">
    <div class="legend-title">Year</div>
    <div class="legend-gradient"></div>
    <div class="legend-labels">
      <span>1987</span>
      <span>2000</span>
      <span>2010</span>
      <span>Now</span>
    </div>
    <div class="legend-note">— dashed = low confidence</div>
  </div>
  <script>
    const protocol = new pmtiles.Protocol();
    maplibregl.addProtocol('pmtiles', protocol.tile);

    const map = new maplibregl.Map({
      container: 'map',
      style: {
        version: 8,
        sources: {
          basemap: {
            type: 'raster',
            tiles: ['https://tile.openstreetmap.org/{z}/{x}/{y}.png'],
            tileSize: 256,
            attribution: '© OpenStreetMap',
          },
          coastlines: {
            type: 'vector',
            url: 'pmtiles://${pmtilesUrl}',
          },
        },
        layers: [
          { id: 'basemap', type: 'raster', source: 'basemap',
            paint: { 'raster-opacity': 0.5, 'raster-saturation': -0.7 } },
        ],
      },
      center: [108.5, -6.9],
      zoom: 8,
    });

    map.addControl(new maplibregl.NavigationControl(), 'top-left');
    map.addControl(new maplibregl.ScaleControl({ unit: 'metric' }), 'bottom-left');

    map.on('load', () => {
      document.getElementById('loading').style.display = 'none';
      document.getElementById('legend').style.display = 'block';

      const colorExpr = [
        'interpolate', ['linear'], ['get', 'year'],
        1987, '#1a237e',
        1995, '#1565c0',
        2000, '#00695c',
        2008, '#f9a825',
        2015, '#ff6f00',
        2024, '#4fd1c5',
      ];

      // Layer garis pantai berkualitas baik — solid
      map.addLayer({
        id: 'shorelines-good',
        type: 'line',
        source: 'coastlines',
        'source-layer': 'shorelines_annual',
        filter: ['==', ['get', 'certainty'], 'good'],
        paint: {
          'line-color': colorExpr,
          'line-width': ['interpolate', ['linear'], ['zoom'], 7, 0.6, 11, 1.8, 14, 3],
          'line-opacity': 0.9,
        },
      });

      // Layer garis pantai keyakinan rendah — putus-putus
      map.addLayer({
        id: 'shorelines-uncertain',
        type: 'line',
        source: 'coastlines',
        'source-layer': 'shorelines_annual',
        filter: ['!=', ['get', 'certainty'], 'good'],
        paint: {
          'line-color': colorExpr,
          'line-width': ['interpolate', ['linear'], ['zoom'], 7, 0.5, 11, 1.2],
          'line-opacity': 0.5,
          'line-dasharray': [3, 3],
        },
      });

      const popup = new maplibregl.Popup({ closeButton: false, closeOnClick: false });

      ['shorelines-good', 'shorelines-uncertain'].forEach(id => {
        map.on('mouseenter', id, (e) => {
          map.getCanvas().style.cursor = 'pointer';
          const p = e.features[0].properties;
          popup.setLngLat(e.lngLat)
            .setHTML(
              '<div style="font:11px/1.6 monospace;color:#e2e8f0;background:#0d1117;' +
              'padding:8px 10px;border-radius:4px;border:1px solid rgba(255,255,255,0.1)">' +
              '<strong>Year ' + p.year + '</strong><br>' +
              '<span style="color:' + (p.certainty === 'good' ? '#4fd1c5' : '#f9a825') + '">' +
              p.certainty + '</span></div>'
            )
            .addTo(map);
        });
        map.on('mouseleave', id, () => {
          map.getCanvas().style.cursor = '';
          popup.remove();
        });
      });
    });
  <\/script>
</body>
</html>`;

const buildRatesHtml = (pmtilesUrl) => `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="stylesheet" href="https://unpkg.com/maplibre-gl@4.7.1/dist/maplibre-gl.css" />
  <script src="https://unpkg.com/maplibre-gl@4.7.1/dist/maplibre-gl.js"><\/script>
  <script src="https://unpkg.com/pmtiles@3.2.1/dist/pmtiles.js"><\/script>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    html, body, #map { width: 100%; height: 100%; }
    body { background: #0d1117; }
    .maplibregl-ctrl-attrib { font-size: 10px; }
    .legend {
      position: absolute;
      bottom: 28px;
      right: 8px;
      background: rgba(13,17,23,0.9);
      border: 1px solid rgba(255,255,255,0.1);
      border-radius: 6px;
      padding: 10px 12px;
      color: #e2e8f0;
      font-size: 11px;
      font-family: monospace;
      backdrop-filter: blur(6px);
      min-width: 160px;
    }
    .legend-title {
      font-weight: 600;
      margin-bottom: 8px;
      font-size: 10px;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: rgba(255,255,255,0.45);
    }
    .legend-gradient {
      height: 10px;
      border-radius: 3px;
      background: linear-gradient(to right, #7f1d1d, #ef4444, #fca5a5, #bfdbfe, #3b82f6, #1e3a8a);
      margin-bottom: 4px;
    }
    .legend-labels {
      display: flex;
      justify-content: space-between;
      font-size: 10px;
      color: rgba(255,255,255,0.45);
    }
    .legend-unit {
      margin-top: 4px;
      font-size: 10px;
      color: rgba(255,255,255,0.3);
      text-align: center;
    }
    .loading {
      position: absolute;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #0d1117;
      color: rgba(255,255,255,0.35);
      font-size: 12px;
      font-family: monospace;
      letter-spacing: 0.06em;
    }
  </style>
</head>
<body>
  <div id="map"></div>
  <div class="loading" id="loading">Loading map...</div>
  <div class="legend" id="legend" style="display:none">
    <div class="legend-title">Rate of Change</div>
    <div class="legend-gradient"></div>
    <div class="legend-labels">
      <span>≤ −5</span>
      <span>0</span>
      <span>≥ +5</span>
    </div>
    <div class="legend-unit">metres per year</div>
  </div>
  <script>
    const protocol = new pmtiles.Protocol();
    maplibregl.addProtocol('pmtiles', protocol.tile);

    const map = new maplibregl.Map({
      container: 'map',
      style: {
        version: 8,
        sources: {
          basemap: {
            type: 'raster',
            tiles: ['https://tile.openstreetmap.org/{z}/{x}/{y}.png'],
            tileSize: 256,
            attribution: '© OpenStreetMap',
          },
          coastlines: {
            type: 'vector',
            url: 'pmtiles://${pmtilesUrl}',
          },
        },
        layers: [
          { id: 'basemap', type: 'raster', source: 'basemap',
            paint: { 'raster-opacity': 0.5, 'raster-saturation': -0.7 } },
        ],
      },
      center: [108.5, -6.9],
      zoom: 8,
    });

    map.addControl(new maplibregl.NavigationControl(), 'top-left');
    map.addControl(new maplibregl.ScaleControl({ unit: 'metric' }), 'bottom-left');

    map.on('load', () => {
      document.getElementById('loading').style.display = 'none';
      document.getElementById('legend').style.display = 'block';

      const colorExpr = [
        'interpolate', ['linear'], ['get', 'rate_time'],
        -5, '#7f1d1d',
        -3, '#ef4444',
        -1, '#fca5a5',
         0, '#f8fafc',
         1, '#bfdbfe',
         3, '#3b82f6',
         5, '#1e3a8a',
      ];

      const radiusExpr = ['interpolate', ['linear'], ['zoom'], 7, 2, 10, 4, 13, 7];

      map.addLayer({
        id: 'rates',
        type: 'circle',
        source: 'coastlines',
        'source-layer': 'rates_of_change',
        paint: {
          'circle-color': colorExpr,
          'circle-radius': radiusExpr,
          'circle-opacity': 0.85,
          'circle-stroke-width': 0.5,
          'circle-stroke-color': 'rgba(0,0,0,0.3)',
        },
      });

      const popup = new maplibregl.Popup({ closeButton: false, closeOnClick: false });

      map.on('mouseenter', 'rates', (e) => {
        map.getCanvas().style.cursor = 'pointer';
        const p = e.features[0].properties;
        const rate = parseFloat(p.rate_time).toFixed(2);
        const ci = (parseFloat(p.se_time) * 1.96).toFixed(1);
        const isRetreat = parseFloat(rate) < 0;
        popup.setLngLat(e.lngLat)
          .setHTML(
            '<div style="font:11px/1.7 monospace;color:#e2e8f0;background:#0d1117;' +
            'padding:10px 12px;border-radius:4px;border:1px solid rgba(255,255,255,0.1);min-width:160px">' +
            '<div style="font-weight:700;margin-bottom:4px;color:' +
            (isRetreat ? '#ef4444' : '#3b82f6') + '">' +
            (isRetreat ? '▼ Retreat' : '▲ Accretion') + '</div>' +
            '<div>' + rate + ' m/yr</div>' +
            '<div style="color:rgba(255,255,255,0.45)">±' + ci + ' m (95% CI)</div>' +
            '<div style="color:rgba(255,255,255,0.45);margin-top:3px">p = ' +
            parseFloat(p.sig_time).toExponential(1) + '</div>' +
            '<div style="color:' + (p.certainty === 'good' ? '#4fd1c5' : '#f9a825') +
            ';margin-top:3px">' + p.certainty + '</div>' +
            '</div>'
          )
          .addTo(map);
      });
      map.on('mouseleave', 'rates', () => {
        map.getCanvas().style.cursor = '';
        popup.remove();
      });
    });
  <\/script>
</body>
</html>`;

const buildAllLayersHtml = (pmtilesUrl, controlsTitle = 'Ina Coastline Layer') => `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="stylesheet" href="https://unpkg.com/maplibre-gl@4.7.1/dist/maplibre-gl.css" />
  <script src="https://unpkg.com/maplibre-gl@4.7.1/dist/maplibre-gl.js"><\/script>
  <script src="https://unpkg.com/pmtiles@3.2.1/dist/pmtiles.js"><\/script>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    html, body, #map { width: 100%; height: 100%; }
    body { background: #0d1117; font-family: monospace; }
    .controls {
      position: absolute;
      top: 10px;
      right: 10px;
      z-index: 10;
      background: rgba(13,17,23,0.88);
      border-top: 2px solid #00718B;
      border-left: 1px solid rgba(0,178,169,0.2);
      border-right: 1px solid rgba(0,178,169,0.2);
      border-bottom: 1px solid rgba(0,178,169,0.2);
      border-radius: 0;
      padding: 10px 14px;
      backdrop-filter: blur(6px);
      min-width: 190px;
    }
    .controls-title {
      font-size: 10px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: #00b2a9;
      margin-bottom: 8px;
    }
    .toggle-row {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-bottom: 6px;
      cursor: pointer;
    }
    .toggle-row:last-child { margin-bottom: 0; }
    .toggle-swatch {
      width: 24px;
      height: 4px;
      border-radius: 2px;
      flex-shrink: 0;
    }
    .toggle-label {
      font-size: 11px;
      color: rgba(255,255,255,0.75);
      flex: 1;
      user-select: none;
    }
    .toggle-switch {
      width: 28px;
      height: 14px;
      background: rgba(255,255,255,0.15);
      border-radius: 7px;
      position: relative;
      transition: background 0.2s;
      flex-shrink: 0;
    }
    .toggle-switch.on { background: #00718B; }
    .toggle-switch::after {
      content: '';
      position: absolute;
      width: 10px;
      height: 10px;
      background: white;
      border-radius: 50%;
      top: 2px;
      left: 2px;
      transition: left 0.2s;
    }
    .toggle-switch.on::after { left: 16px; }
    .loading {
      position: absolute;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #0d1117;
      color: rgba(255,255,255,0.35);
      font-size: 12px;
      letter-spacing: 0.06em;
    }
  </style>
</head>
<body>
  <div id="map"></div>
  <div class="loading" id="loading">Loading map...</div>
  <div class="controls">
    <div class="controls-title">${controlsTitle}</div>
    <div class="toggle-row" onclick="toggleLayer('shorelines-good','shorelines-uncertain','toggle-shorelines')">
      <div class="toggle-swatch" style="background:linear-gradient(to right,#1a237e,#4fd1c5)"></div>
      <span class="toggle-label">Shorelines</span>
      <div class="toggle-switch on" id="toggle-shorelines"></div>
    </div>
    <div class="toggle-row" onclick="toggleLayer('rates','toggle-rates')">
      <div class="toggle-swatch" style="background:linear-gradient(to right,#ef4444,#f8fafc,#3b82f6)"></div>
      <span class="toggle-label">Rate of Change</span>
      <div class="toggle-switch on" id="toggle-rates"></div>
    </div>
    <div class="toggle-row" onclick="toggleLayer('hotspots','toggle-hotspots')">
      <div class="toggle-swatch" style="background:radial-gradient(circle,#f59e0b 0%,transparent 70%);background-color:#78350f;border-radius:50%;width:10px;height:10px;align-self:center"></div>
      <span class="toggle-label">Hotspot</span>
      <div class="toggle-switch on" id="toggle-hotspots"></div>
    </div>
  </div>
  <script>
    const protocol = new pmtiles.Protocol();
    maplibregl.addProtocol('pmtiles', protocol.tile);

    const layerVisibility = {};

    function toggleLayer(...args) {
      const toggleId = args[args.length - 1];
      const layerIds = args.slice(0, -1);
      const el = document.getElementById(toggleId);
      const isOn = el.classList.contains('on');
      el.classList.toggle('on');
      layerIds.forEach(id => {
        if (map.getLayer(id)) {
          map.setLayoutProperty(id, 'visibility', isOn ? 'none' : 'visible');
        }
      });
    }

    const map = new maplibregl.Map({
      container: 'map',
      style: {
        version: 8,
        sources: {
          basemap: {
            type: 'raster',
            tiles: ['https://tile.openstreetmap.org/{z}/{x}/{y}.png'],
            tileSize: 256,
            attribution: '© OpenStreetMap',
          },
          coastlines: {
            type: 'vector',
            url: 'pmtiles://${pmtilesUrl}',
          },
        },
        layers: [
          { id: 'basemap', type: 'raster', source: 'basemap',
            paint: { 'raster-opacity': 0.5, 'raster-saturation': -0.7 } },
        ],
      },
      center: [108.5, -6.9],
      zoom: 8,
    });

    map.addControl(new maplibregl.NavigationControl(), 'top-left');
    map.addControl(new maplibregl.ScaleControl({ unit: 'metric' }), 'bottom-left');

    map.on('load', () => {
      document.getElementById('loading').style.display = 'none';

      const shorelineColor = [
        'interpolate', ['linear'], ['get', 'year'],
        1987, '#1a237e', 1995, '#1565c0', 2000, '#00695c',
        2008, '#f9a825', 2015, '#ff6f00', 2024, '#4fd1c5',
      ];

      // Layer garis pantai
      map.addLayer({
        id: 'shorelines-good',
        type: 'line',
        source: 'coastlines',
        'source-layer': 'shorelines_annual',
        filter: ['==', ['get', 'certainty'], 'good'],
        paint: {
          'line-color': shorelineColor,
          'line-width': ['interpolate', ['linear'], ['zoom'], 7, 0.6, 11, 1.8],
          'line-opacity': 0.9,
        },
      });

      map.addLayer({
        id: 'shorelines-uncertain',
        type: 'line',
        source: 'coastlines',
        'source-layer': 'shorelines_annual',
        filter: ['!=', ['get', 'certainty'], 'good'],
        paint: {
          'line-color': shorelineColor,
          'line-width': ['interpolate', ['linear'], ['zoom'], 7, 0.5, 11, 1.2],
          'line-opacity': 0.5,
          'line-dasharray': [3, 3],
        },
      });

      // Layer rates
      const rateColor = [
        'interpolate', ['linear'], ['get', 'rate_time'],
        -5, '#7f1d1d', -3, '#ef4444', -1, '#fca5a5',
         0, '#f8fafc', 1, '#bfdbfe', 3, '#3b82f6', 5, '#1e3a8a',
      ];

      map.addLayer({
        id: 'rates',
        type: 'circle',
        source: 'coastlines',
        'source-layer': 'rates_of_change',
        paint: {
          'circle-color': rateColor,
          'circle-radius': ['interpolate', ['linear'], ['zoom'], 7, 2, 10, 4, 13, 7],
          'circle-opacity': 0.85,
          'circle-stroke-width': 0.5,
          'circle-stroke-color': 'rgba(0,0,0,0.3)',
        },
      });

      // Layer hotspot (zoom level 1 = 1km window)
      map.addLayer({
        id: 'hotspots',
        type: 'circle',
        source: 'coastlines',
        'source-layer': 'hotspots_zoom_1',
        paint: {
          'circle-color': [
            'interpolate', ['linear'], ['get', 'rate_time'],
            -5, '#7f1d1d', -2, '#f97316', 0, '#fef3c7', 2, '#84cc16', 5, '#166534',
          ],
          'circle-radius': ['interpolate', ['linear'], ['zoom'], 7, 4, 10, 8, 13, 14],
          'circle-opacity': 0.7,
          'circle-stroke-width': 1,
          'circle-stroke-color': 'rgba(0,0,0,0.4)',
        },
      });

      const popup = new maplibregl.Popup({ closeButton: false, closeOnClick: false });

      ['rates', 'hotspots'].forEach(id => {
        map.on('mouseenter', id, (e) => {
          map.getCanvas().style.cursor = 'pointer';
          const p = e.features[0].properties;
          const rate = parseFloat(p.rate_time).toFixed(2);
          const ci = (parseFloat(p.se_time) * 1.96).toFixed(1);
          const label = id === 'hotspots' ? 'Hotspot (1km)' : 'Rate of Change';
          popup.setLngLat(e.lngLat)
            .setHTML(
              '<div style="font:11px/1.7 monospace;color:#e2e8f0;background:#0d1117;' +
              'padding:10px 12px;border-radius:4px;border:1px solid rgba(255,255,255,0.1)">' +
              '<div style="font-weight:700;color:rgba(255,255,255,0.5);font-size:10px;margin-bottom:3px">' + label + '</div>' +
              '<div style="font-weight:700;color:' + (rate < 0 ? '#ef4444' : '#3b82f6') + '">' +
              (rate < 0 ? '▼' : '▲') + ' ' + rate + ' m/yr</div>' +
              '<div style="color:rgba(255,255,255,0.45)">±' + ci + ' m (95% CI)</div>' +
              '</div>'
            ).addTo(map);
        });
        map.on('mouseleave', id, () => {
          map.getCanvas().style.cursor = '';
          popup.remove();
        });
      });

      ['shorelines-good', 'shorelines-uncertain'].forEach(id => {
        map.on('mouseenter', id, (e) => {
          const p = e.features[0].properties;
          popup.setLngLat(e.lngLat)
            .setHTML(
              '<div style="font:11px/1.6 monospace;color:#e2e8f0;background:#0d1117;' +
              'padding:8px 10px;border-radius:4px;border:1px solid rgba(255,255,255,0.1)">' +
              '<strong>Year ' + p.year + '</strong><br>' +
              '<span style="color:' + (p.certainty === 'good' ? '#4fd1c5' : '#f9a825') + '">' +
              p.certainty + '</span></div>'
            ).addTo(map);
        });
        map.on('mouseleave', id, () => popup.remove());
      });
    });
  <\/script>
</body>
</html>`;

const CoastlineMap = ({ height = 520, caption, layer = 'shorelines', title, controlsTitle }) => {
  const iframeRef = useRef(null);

  const html = layer === 'rates'
    ? buildRatesHtml(PMTILES_URL)
    : layer === 'all'
    ? buildAllLayersHtml(PMTILES_URL, controlsTitle)
    : buildShorelineHtml(PMTILES_URL);

  const blob = typeof Blob !== 'undefined' ? new Blob([html], { type: 'text/html' }) : null;
  const src = blob ? URL.createObjectURL(blob) : null;

  useEffect(() => {
    return () => {
      if (src) URL.revokeObjectURL(src);
    };
  }, [src]);

  if (!src) return null;

  return (
    <div className={styles.mapWrap}>
      <div className={styles.mapFrame}>
        <div className={styles.mapHeader} aria-hidden="true">
          <span className={styles.mapHeader__title}>{title ?? TITLES[layer] ?? TITLES.shorelines}</span>
        </div>
        <iframe
          ref={iframeRef}
          src={src}
          title={`Ina Coastline — ${TITLES[layer]}`}
          className={styles.mapIframe}
          style={{ height }}
          sandbox="allow-scripts allow-same-origin"
        />
      </div>
      {caption && (
        <p className={styles.mapCaption}>{caption}</p>
      )}
    </div>
  );
};

export default CoastlineMap;
