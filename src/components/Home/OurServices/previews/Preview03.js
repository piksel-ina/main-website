const mono = 'JetBrains Mono, monospace';
const LEGEND = [
  ['#16a34a', 'FOREST'],
  ['#d97706', 'CLEARED'],
  ['#0d295b', 'WATER'],
  ['#aeaeb2', 'CLOUD'],
];

export default function Preview03() {
  return (
    <svg viewBox="0 0 360 280" preserveAspectRatio="xMidYMid meet">
      <defs>
        <pattern
          id="p03grid"
          width="24"
          height="24"
          patternUnits="userSpaceOnUse"
        >
          <path d="M24 0H0V24" fill="none" stroke="#e5e5ea" strokeWidth="0.5" />
        </pattern>
      </defs>
      <rect x="0" y="0" width="360" height="280" fill="url(#p03grid)" />
      <rect x="0" y="0" width="360" height="280" fill="none" stroke="#e5e5ea" />

      <rect x="0" y="0" width="360" height="22" fill="#0d295b" />
      <text
        x="12"
        y="14"
        fontFamily={mono}
        fontSize="8"
        fill="#fff"
        letterSpacing="0.1em"
      >
        PIKSEL · KEHUTANAN · KALIMANTAN
      </text>

      <g opacity="0.85">
        <path
          d="M20 60 L120 50 L180 80 L160 130 L100 150 L40 130 Z"
          fill="#16a34a"
          opacity="0.55"
        />
        <path
          d="M120 50 L240 60 L260 110 L200 130 L160 130 L180 80 Z"
          fill="#16a34a"
          opacity="0.30"
        />
        <path
          d="M240 60 L340 70 L340 160 L260 110 Z"
          fill="#0d295b"
          opacity="0.18"
        />
        <path
          d="M40 130 L100 150 L160 130 L200 130 L240 200 L160 240 L60 220 Z"
          fill="#d97706"
          opacity="0.30"
        />
        <path
          d="M200 130 L260 110 L340 160 L320 230 L240 200 Z"
          fill="#16a34a"
          opacity="0.20"
        />
      </g>

      <g transform="translate(160 110)">
        <circle r="4" fill="#fff" stroke="#1d1d1f" strokeWidth="1.5" />
        <circle r="1.5" fill="#06c8d8" />
        <rect
          x="10"
          y="-12"
          width="78"
          height="22"
          fill="#fff"
          stroke="#1d1d1f"
        />
        <text
          x="14"
          y="-1"
          fontFamily={mono}
          fontSize="7"
          fill="#1d1d1f"
          letterSpacing="0.06em"
        >
          LOSS · 4.2 KHA
        </text>
        <text
          x="14"
          y="7"
          fontFamily={mono}
          fontSize="6"
          fill="#8e8e93"
          letterSpacing="0.06em"
        >
          2020 – 2025
        </text>
      </g>

      <g transform="translate(264 170)">
        <circle r="4" fill="#fff" stroke="#1d1d1f" strokeWidth="1.5" />
        <circle r="1.5" fill="#d97706" />
      </g>

      <g transform="translate(12 252)">
        <rect width="336" height="20" fill="#fff" stroke="#e5e5ea" />
        {LEGEND.map(([c, l], i) => (
          <g key={i} transform={`translate(${10 + i * 82} 8)`}>
            <rect width="10" height="6" fill={c} />
            <text
              x="14"
              y="6"
              fontFamily={mono}
              fontSize="7"
              fill="#1d1d1f"
              letterSpacing="0.08em"
            >
              {l}
            </text>
          </g>
        ))}
      </g>
    </svg>
  );
}
