const InaDcMark = ({
  size = 36,
  color = 'var(--pk-primary, #1040a8)',
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 36 36"
    fill="none"
    aria-hidden="true"
    {...props}
  >
    <rect x="2" y="2" width="9" height="9" fill={color} />
    <rect x="13" y="2" width="9" height="9" fill={color} opacity="0.55" />
    <rect x="2" y="13" width="9" height="9" fill={color} opacity="0.55" />
    <rect x="13" y="13" width="9" height="9" fill={color} />
    <rect x="24" y="13" width="9" height="9" fill={color} opacity="0.25" />
    <rect x="13" y="24" width="9" height="9" fill={color} opacity="0.25" />
    <circle cx="28.5" cy="6.5" r="2.5" fill={color} />
  </svg>
);

export default InaDcMark;
