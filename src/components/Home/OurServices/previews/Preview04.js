const mono = 'JetBrains Mono, monospace';

export default function Preview04() {
  return (
    <svg viewBox="0 0 360 280" preserveAspectRatio="xMidYMid meet">
      <rect x="0" y="0" width="360" height="280" fill="#fff" />

      <rect x="0" y="0" width="360" height="28" fill="#1040a8" />
      <text
        x="12"
        y="18"
        fontFamily={mono}
        fontSize="9"
        fill="#fff"
        letterSpacing="0.06em"
      >
        GET ows.piksel.big.go.id/stac/v1
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

      <g fontFamily={mono} fontSize="9" letterSpacing="0.04em">
        <text x="14" y="50" fill="#8e8e93">
          1
        </text>
        <text x="34" y="50" fill="#1d1d1f">
          {'{'}
        </text>
        <text x="14" y="65" fill="#8e8e93">
          2
        </text>
        <text x="34" y="65" fill="#1040a8">
          &quot;type&quot;:
        </text>
        <text x="84" y="65" fill="#1d1d1f">
          &quot;Catalog&quot;,
        </text>
        <text x="14" y="80" fill="#8e8e93">
          3
        </text>
        <text x="34" y="80" fill="#1040a8">
          &quot;id&quot;:
        </text>
        <text x="78" y="80" fill="#1d1d1f">
          &quot;piksel-stac&quot;,
        </text>
        <text x="14" y="95" fill="#8e8e93">
          4
        </text>
        <text x="34" y="95" fill="#1040a8">
          &quot;stac_version&quot;:
        </text>
        <text x="142" y="95" fill="#1d1d1f">
          &quot;1.0.0&quot;,
        </text>
        <text x="14" y="110" fill="#8e8e93">
          5
        </text>
        <text x="34" y="110" fill="#1040a8">
          &quot;links&quot;:
        </text>
        <text x="92" y="110" fill="#1d1d1f">
          [
        </text>
        <text x="14" y="125" fill="#8e8e93">
          6
        </text>
        <text x="50" y="125" fill="#1d1d1f">
          {'{ "rel":'}
        </text>
        <text x="118" y="125" fill="#06c8d8">
          &quot;child&quot;
        </text>
        <text x="156" y="125" fill="#1d1d1f">
          ,
        </text>
        <text x="14" y="140" fill="#8e8e93">
          7
        </text>
        <text x="60" y="140" fill="#1040a8">
          &quot;href&quot;:
        </text>
        <text x="108" y="140" fill="#06c8d8">
          &quot;/collections/s2_l2a&quot;
        </text>
        <text x="14" y="155" fill="#8e8e93">
          8
        </text>
        <text x="50" y="155" fill="#1d1d1f">
          {'}, ...'}
        </text>
        <text x="14" y="170" fill="#8e8e93">
          9
        </text>
        <text x="34" y="170" fill="#1d1d1f">
          {']'}
        </text>
        <text x="14" y="185" fill="#8e8e93">
          10
        </text>
        <text x="34" y="185" fill="#1d1d1f">
          {'}'}
        </text>
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
        CORS · OPEN
      </text>
      <text
        x="120"
        y="269"
        fontFamily={mono}
        fontSize="8"
        fill="#3a3a3c"
        letterSpacing="0.08em"
      >
        TLS · 1.3
      </text>
      <text
        x="200"
        y="269"
        fontFamily={mono}
        fontSize="8"
        fill="#3a3a3c"
        letterSpacing="0.08em"
      >
        CACHE · 3600s
      </text>
      <text
        x="310"
        y="269"
        fontFamily={mono}
        fontSize="8"
        fill="#3a3a3c"
        letterSpacing="0.08em"
      >
        v 1.0
      </text>
    </svg>
  );
}
