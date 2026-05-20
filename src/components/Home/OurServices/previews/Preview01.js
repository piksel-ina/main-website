const teal = '#06c8d8';
const primary = '#1040a8';
const mono = 'JetBrains Mono, monospace';

const LAYERS = [
  ['S2 · L2A', 'ON', true],
  ['S1 · GRD', 'ON', true],
  ['LANDSAT 9', 'OFF', false],
  ['AOI · DRAW', '—', false],
];

export default function Preview01() {
  return (
    <svg viewBox="0 0 360 280" preserveAspectRatio="xMidYMid meet">
      <defs>
        <pattern id="p01grid" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M20 0H0V20" fill="none" stroke="#e5e5ea" strokeWidth="0.5" />
        </pattern>
        <linearGradient id="p01swath" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor={teal} stopOpacity="0" />
          <stop offset="50%" stopColor={teal} stopOpacity="0.32" />
          <stop offset="100%" stopColor={teal} stopOpacity="0" />
        </linearGradient>
      </defs>

      <rect x="0" y="0" width="100" height="280" fill="#fafafa" stroke="#e5e5ea" />
      <text x="10" y="22" fontFamily={mono} fontSize="8" fill="#636366" letterSpacing="0.08em">
        LAYERS · 04
      </text>
      {LAYERS.map((row, i) => (
        <g key={i} transform={`translate(10 ${48 + i * 46})`}>
          <rect width="80" height="34" fill="none" stroke="#e5e5ea" />
          <text x="8" y="14" fontFamily={mono} fontSize="8" fill="#1d1d1f" letterSpacing="0.06em">
            {row[0]}
          </text>
          <text x="8" y="27" fontFamily={mono} fontSize="7" fill="#8e8e93" letterSpacing="0.08em">
            {row[1]}
          </text>
          {row[2] && <rect x="64" y="10" width="10" height="2" fill={teal} />}
        </g>
      ))}

      <rect x="100" y="0" width="260" height="280" fill="url(#p01grid)" />
      <rect x="100" y="0" width="260" height="280" stroke="#1d1d1f" strokeWidth="1" fill="none" />

      <g fill={primary} opacity="0.75">
        <rect x="120" y="130" width="60" height="14" />
        <rect x="186" y="134" width="38" height="9" />
        <rect x="230" y="132" width="22" height="12" />
        <rect x="258" y="140" width="48" height="8" />
        <rect x="196" y="150" width="22" height="28" />
        <rect x="226" y="152" width="22" height="22" />
        <rect x="254" y="156" width="34" height="20" />
        <rect x="295" y="158" width="46" height="18" />
      </g>

      <g transform="rotate(-18 230 140)">
        <rect x="60" y="80" width="320" height="48" fill="url(#p01swath)" />
        <line x1="60" y1="80" x2="380" y2="80" stroke={teal} strokeWidth="0.6" />
        <line x1="60" y1="128" x2="380" y2="128" stroke={teal} strokeWidth="0.6" />
      </g>

      <rect x="208" y="120" width="58" height="40" fill="none" stroke="#1d1d1f" strokeWidth="1" strokeDasharray="3 2" />

      <g stroke="#1d1d1f" strokeWidth="0.8">
        <line x1="232" y1="135" x2="244" y2="135" />
        <line x1="238" y1="129" x2="238" y2="141" />
      </g>
      <text x="246" y="138" fontFamily={mono} fontSize="8" fill="#1d1d1f">JKT</text>

      <text x="106" y="272" fontFamily={mono} fontSize="8" fill="#636366" letterSpacing="0.08em">95°E</text>
      <text x="220" y="272" fontFamily={mono} fontSize="8" fill="#636366" letterSpacing="0.08em">110°E</text>
      <text x="325" y="272" fontFamily={mono} fontSize="8" fill="#636366" letterSpacing="0.08em">141°E</text>
    </svg>
  );
}
