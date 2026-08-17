const mono = 'JetBrains Mono, monospace';

const responseLines = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<WMS_Capabilities version="1.3.0">',
  '  <Service>',
  '    <Name>WMS</Name>',
  '    <Title>Piksel Web Services</Title>',
  '  </Service>',
  '  <Capability>',
  '    <Layer>...</Layer>',
  '  </Capability>',
  '</WMS_Capabilities>',
];

export default function Preview04() {
  return (
    <svg viewBox="0 0 360 280" preserveAspectRatio="xMidYMid meet">
      <rect x="0" y="0" width="360" height="280" fill="#fff" />

      <rect x="0" y="0" width="360" height="28" fill="#1040a8" />
      <text
        x="12"
        y="18"
        fontFamily={mono}
        fontSize="7"
        fill="#fff"
        letterSpacing="0.04em"
      >
        GET /wms?service=WMS&amp;request=GetCapabilities
      </text>
      <rect x="312" y="9" width="36" height="12" fill="#06c8d8" />
      <text
        x="320"
        y="18"
        fontFamily={mono}
        fontSize="7"
        fill="#0d295b"
        letterSpacing="0.1em"
      >
        200 · OK
      </text>

      <g fontFamily={mono} fontSize="8" letterSpacing="0.02em">
        {responseLines.map((line, index) => (
          <g key={line}>
            <text x="14" y={50 + index * 15} fill="#8e8e93">
              {index + 1}
            </text>
            <text x="34" y={50 + index * 15} fill="#1d1d1f">
              {line}
            </text>
          </g>
        ))}
      </g>

      <rect
        x="0"
        y="252"
        width="360"
        height="28"
        fill="#f5f5f7"
        stroke="#e5e5ea"
      />
      <text
        x="14"
        y="269"
        fontFamily={mono}
        fontSize="8"
        fill="#3a3a3c"
        letterSpacing="0.08em"
      >
        OGC · WMS
      </text>
      <text
        x="120"
        y="269"
        fontFamily={mono}
        fontSize="8"
        fill="#3a3a3c"
        letterSpacing="0.08em"
      >
        FORMAT · XML
      </text>
      <text
        x="250"
        y="269"
        fontFamily={mono}
        fontSize="8"
        fill="#3a3a3c"
        letterSpacing="0.08em"
      >
        v 1.3.0
      </text>
    </svg>
  );
}
