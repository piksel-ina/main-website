const mono = 'JetBrains Mono, monospace';
const sans = '-apple-system, BlinkMacSystemFont, sans-serif';

const INSTANCES = [
  { name: 'Standard', cpu: '4 vCPU', ram: '15 GB', use: 'Geospatial Learning' },
  { name: 'Medium', cpu: '4 vCPU', ram: '30 GB', use: 'Quick Data Production' },
  { name: 'Large', cpu: '8 vCPU', ram: '60 GB', use: 'Time-Series Analysis' },
  { name: 'Very Large', cpu: '16 vCPU', ram: '120 GB', use: 'Multi-region Pipelines' },
  { name: 'Ultra Large', cpu: '32 vCPU', ram: '256 GB', use: 'Bulk Production' },
  { name: 'GPU', cpu: '32 vCPU', ram: '256 GB', use: 'Machine Learning', gpu: true },
];

export default function Preview02() {
  const rH = 22;

  return (
    <svg viewBox="0 0 480 340" preserveAspectRatio="xMidYMid meet">
      <rect width="480" height="340" fill="#fff" />

      {/* Title bar */}
      <rect x="0" y="0" width="480" height="20" fill="#f5f5f7" stroke="#e5e5ea" />
      <text x="10" y="13" fontFamily={mono} fontSize="8" fill="#3a3a3c" letterSpacing="0.06em">
        PIKSEL-SANDBOX · SELECT_INSTANCE
      </text>
      <circle cx="460" cy="10" r="3" fill="#7c3aed" />

      {/* Instance table */}
      <g transform="translate(8 30)">
        {/* Table background */}
        <rect x="0" y="0" width="464" height={16 + INSTANCES.length * rH} fill="#f8f8fa" stroke="#e5e5ea" strokeWidth="0.5" />

        {/* Column headers */}
        <text x="4" y="10" fontFamily={mono} fontSize="6.5" fill="#8e8e93" letterSpacing="0.1em">INSTANCE</text>
        <text x="150" y="10" fontFamily={mono} fontSize="6.5" fill="#8e8e93" letterSpacing="0.1em">RESOURCES</text>
        <text x="310" y="10" fontFamily={mono} fontSize="6.5" fill="#8e8e93" letterSpacing="0.1em">USE CASE</text>
        <line x1="4" y1="16" x2="460" y2="16" stroke="#e5e5ea" strokeWidth="0.5" />

        {INSTANCES.map((inst, i) => {
          const y = 20 + i * rH;
          const isGpu = inst.gpu;
          return (
            <g key={inst.name} transform={`translate(0 ${y})`}>
              {isGpu && (
                <rect x="1" y="-2" width="462" height={rH - 2} fill="#fff" />
              )}
              <text x="4" y="12" fontFamily={sans} fontSize="9" fill={isGpu ? '#1d1d1f' : '#3a3a3c'}>
                {inst.name}
              </text>
              <text x="150" y="12" fontFamily={mono} fontSize="8" fill="#6e6e73">
                {inst.cpu} · {inst.ram}{isGpu ? ' · GPU' : ''}
              </text>
              <text x="310" y="12" fontFamily={mono} fontSize="7.5" fill={isGpu ? '#7c3aed' : '#8e8e93'}>
                {inst.use}
              </text>
              {i < INSTANCES.length - 1 && (
                <line x1="4" y1={rH - 4} x2="460" y2={rH - 4} stroke="#ebebed" strokeWidth="0.5" />
              )}
            </g>
          );
        })}
      </g>

      {/* Notebook code section below */}
      <g transform="translate(16 196)" opacity="0.9">
        <line x1="-8" y1="0" x2="456" y2="0" stroke="#e5e5ea" strokeWidth="0.5" />

        {/* In [1] */}
        <g transform="translate(0 8)">
          <text x="8" y="12" fontFamily={mono} fontSize="8" fill="#8e8e93">In [1]:</text>
          <rect x="46" y="0" width="410" height="30" fill="#f8f8fa" stroke="#e5e5ea" />
          <text x="52" y="12" fontFamily={mono} fontSize="8" fill="#1040a8">import datacube, xarray as xr</text>
          <text x="52" y="23" fontFamily={mono} fontSize="8" fill="#1d1d1f">{'dc = datacube.Datacube(app="piksel")'}</text>
        </g>

        {/* In [2] */}
        <g transform="translate(0 46)">
          <text x="8" y="12" fontFamily={mono} fontSize="8" fill="#8e8e93">In [2]:</text>
          <rect x="46" y="0" width="410" height="40" fill="#f8f8fa" stroke="#e5e5ea" />
          <text x="52" y="12" fontFamily={mono} fontSize="8" fill="#1040a8">{'ds = dc.load('}</text>
          <text x="52" y="23" fontFamily={mono} fontSize="8" fill="#1d1d1f">{'    product="s2_l2a",'}</text>
          <text x="52" y="34" fontFamily={mono} fontSize="8" fill="#1d1d1f">{'    time=("2025-04", "2025-09"),'}</text>
        </g>

        {/* Out [2] — mini chart */}
        <g transform="translate(0 94)">
          <text x="8" y="12" fontFamily={mono} fontSize="8" fill="#8e8e93">Out[2]:</text>
          <rect x="46" y="0" width="410" height="24" fill="#fff" stroke="#e5e5ea" />
          <polyline
            points="54,18 120,15 190,12 260,9 330,10 390,7 440,5 454,4"
            fill="none"
            stroke="#7c3aed"
            strokeWidth="1.5"
            opacity="0.7"
          />
          <text x="52" y="22" fontFamily={mono} fontSize="6" fill="#8e8e93" letterSpacing="0.08em">
            NDVI · MEAN · 2025
          </text>
        </g>
      </g>
    </svg>
  );
}
