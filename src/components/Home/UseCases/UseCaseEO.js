const PALETTES = {
  agri: { bg: '#1a2e0a', bands: ['#4d7c0f', '#65a30d', '#84cc16', '#a3e635'] },
  urban: { bg: '#0c1929', bands: ['#1e40af', '#3b82f6', '#60a5fa', '#93c5fd'] },
  forestry: { bg: '#052e16', bands: ['#166534', '#22c55e', '#4ade80', '#86efac'] },
  coastal: { bg: '#083344', bands: ['#0e7490', '#06b6d4', '#22d3ee', '#67e8f9'] },
  disaster: { bg: '#0c1929', bands: ['#155e75', '#0891b2', '#22d3ee', '#a5f3fc'] },
  mining: { bg: '#1c1108', bands: ['#78350f', '#b45309', '#d97706', '#fbbf24'] },
};

const UseCaseEO = ({ id, featured = false }) => {
  const p = PALETTES[id] || PALETTES.agri;
  const w = featured ? 720 : 420;
  const h = featured ? 440 : 280;

  return (
    <svg viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="xMidYMid slice">
      <rect width={w} height={h} fill={p.bg} />
      {p.bands.map((c, i) => (
        <rect
          key={i}
          x={0}
          y={h * 0.2 + i * (h * 0.15)}
          width={w}
          height={h * 0.18}
          fill={c}
          opacity={0.3 + i * 0.1}
        />
      ))}
      <rect
        x={w * 0.1}
        y={h * 0.3}
        width={w * 0.5}
        height={h * 0.4}
        fill="none"
        stroke={p.bands[2]}
        strokeWidth="0.5"
        strokeDasharray="4 2"
        opacity="0.5"
      />
      <circle cx={w * 0.7} cy={h * 0.6} r={h * 0.12} fill={p.bands[1]} opacity="0.2" />
    </svg>
  );
};

export default UseCaseEO;
