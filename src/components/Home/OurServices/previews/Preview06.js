const mono = 'JetBrains Mono, monospace';
const TICKETS = [
  {
    id: 'PSL-204',
    t: 'STAC catalog returns 502 on /collections',
    s: 'OPEN',
    c: '#e58c0a',
    a: 'MENRISTEK',
    d: '17',
  },
  {
    id: 'PSL-203',
    t: 'Request: GeoMAD 2025 over Sumatra',
    s: 'OPEN',
    c: '#e58c0a',
    a: 'BRIN',
    d: '16',
  },
  {
    id: 'PSL-201',
    t: 'Onboarding workshop · BIG analysts cohort',
    s: 'SCHED.',
    c: '#1040a8',
    a: 'BIG',
    d: '15',
  },
  {
    id: 'PSL-198',
    t: 'Sandbox storage quota for forestry team',
    s: 'RESOLVED',
    c: '#06c8d8',
    a: 'KLHK',
    d: '14',
  },
];

export default function Preview06() {
  return (
    <svg viewBox="0 0 360 280" preserveAspectRatio="xMidYMid meet">
      <rect x="0" y="0" width="360" height="280" fill="#fff" />
      <rect
        x="0"
        y="0"
        width="360"
        height="22"
        fill="#f5f5f7"
        stroke="#e5e5ea"
      />
      <text
        x="12"
        y="14"
        fontFamily={mono}
        fontSize="8"
        fill="#3a3a3c"
        letterSpacing="0.06em"
      >
        SUPPORT · INBOX · 04 OPEN
      </text>

      {TICKETS.map((row, i) => (
        <g key={row.id} transform={`translate(0 ${30 + i * 50})`}>
          <rect
            x="0"
            y="0"
            width="360"
            height="48"
            fill={i === 0 ? '#f8f8fa' : '#fff'}
            stroke="#e5e5ea"
          />
          <text
            x="14"
            y="16"
            fontFamily={mono}
            fontSize="8"
            fill="#8e8e93"
            letterSpacing="0.08em"
          >
            {row.id}
          </text>
          <text
            x="14"
            y="34"
            fontFamily="Outfit, sans-serif"
            fontWeight="500"
            fontSize="10"
            fill="#1d1d1f"
          >
            {row.t}
          </text>
          <text
            x="14"
            y="44"
            fontFamily={mono}
            fontSize="7"
            fill="#8e8e93"
            letterSpacing="0.1em"
          >
            {row.a}
          </text>
          <rect
            x="290"
            y="14"
            width="56"
            height="14"
            fill="none"
            stroke={row.c}
          />
          <text
            x="298"
            y="24"
            fontFamily={mono}
            fontSize="7"
            fill={row.c}
            letterSpacing="0.1em"
          >
            {row.s}
          </text>
          <text
            x="290"
            y="42"
            fontFamily={mono}
            fontSize="7"
            fill="#aeaeb2"
            letterSpacing="0.08em"
          >
            2026·05·{row.d}
          </text>
        </g>
      ))}
    </svg>
  );
}
