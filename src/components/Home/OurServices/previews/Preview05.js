const mono = 'JetBrains Mono, monospace';
const INGEST_Y = [60, 110, 160];
const MASK_Y = [80, 140];

export default function Preview05() {
  return (
    <svg viewBox="0 0 360 280" preserveAspectRatio="xMidYMid meet">
      <rect x="0" y="0" width="360" height="280" fill="#fff" />
      <rect x="0" y="0" width="360" height="22" fill="#f5f5f7" stroke="#e5e5ea" />
      <text x="12" y="14" fontFamily={mono} fontSize="8" fill="#3a3a3c" letterSpacing="0.06em">
        ARGO · GEOMAD-IDN-2026 · WORKFLOW
      </text>
      <circle cx="340" cy="11" r="3" fill="#06c8d8" />

      <g fontFamily={mono} fontSize="7" fill="#8e8e93" letterSpacing="0.1em">
        <text x="36" y="240">INGEST</text>
        <text x="116" y="240">MASK</text>
        <text x="196" y="240">COMPOSITE</text>
        <text x="296" y="240">PUBLISH</text>
      </g>

      {INGEST_Y.map((y, i) => (
        <g key={i} transform={`translate(28 ${y})`}>
          <rect width="56" height="32" fill="#fff" stroke="#1d1d1f" />
          <text x="6" y="13" fontFamily={mono} fontSize="8" fill="#1d1d1f" letterSpacing="0.06em">
            S2-{String(i + 1).padStart(2, '0')}
          </text>
          <text x="6" y="25" fontFamily={mono} fontSize="7" fill="#06c8d8" letterSpacing="0.06em">DONE</text>
        </g>
      ))}

      {MASK_Y.map((y, i) => (
        <g key={i} transform={`translate(108 ${y})`}>
          <rect width="56" height="32" fill="#fff" stroke="#1d1d1f" />
          <text x="6" y="13" fontFamily={mono} fontSize="8" fill="#1d1d1f" letterSpacing="0.06em">FMASK</text>
          <text x="6" y="25" fontFamily={mono} fontSize="7" fill={i === 0 ? '#06c8d8' : '#e58c0a'} letterSpacing="0.06em">
            {i === 0 ? 'DONE' : 'RUN'}
          </text>
        </g>
      ))}

      <g transform="translate(188 110)">
        <rect width="72" height="40" fill="#fff" stroke="#1d1d1f" />
        <text x="6" y="15" fontFamily={mono} fontSize="8" fill="#1d1d1f" letterSpacing="0.06em">GEOMAD</text>
        <text x="6" y="28" fontFamily={mono} fontSize="7" fill="#8e8e93" letterSpacing="0.06em">12 / 48</text>
      </g>

      <g transform="translate(290 110)">
        <rect width="56" height="40" fill="#fff" stroke="#1d1d1f" />
        <text x="6" y="15" fontFamily={mono} fontSize="8" fill="#1d1d1f" letterSpacing="0.06em">STAC</text>
        <text x="6" y="28" fontFamily={mono} fontSize="7" fill="#aeaeb2" letterSpacing="0.06em">WAITING</text>
      </g>

      <g stroke="#1d1d1f" strokeWidth="1" fill="none">
        <path d="M84 76 L108 96" />
        <path d="M84 126 L108 96" />
        <path d="M84 126 L108 156" />
        <path d="M84 176 L108 156" />
        <path d="M164 96 L188 126" />
        <path d="M164 156 L188 134" />
        <path d="M260 130 L290 130" />
      </g>

      <rect x="12" y="252" width="336" height="14" fill="#fff" stroke="#e5e5ea" />
      <rect x="12" y="252" width="124" height="14" fill="#06c8d8" opacity="0.4" />
      <text x="16" y="262" fontFamily={mono} fontSize="7" fill="#1d1d1f" letterSpacing="0.08em">37% · 02:48:11</text>
    </svg>
  );
}
