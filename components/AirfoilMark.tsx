interface AirfoilMarkProps {
  className?: string;
  size?: number;
}

export default function AirfoilMark({ className = '', size = 32 }: AirfoilMarkProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size * 0.65}
      viewBox="0 0 120 78"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 39
           C4 39, 8 10, 32 8
           C56 6, 80 18, 116 39
           C116 39, 80 65, 44 68
           C24 70, 4 39, 4 39Z"
        stroke="#00D4AA"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M4 39
           C4 39, 8 10, 32 8
           C56 6, 80 18, 116 39"
        stroke="#00D4AA"
        strokeWidth="1.2"
        fill="none"
        strokeLinecap="round"
        opacity="0.3"
        strokeDasharray="4 4"
      />
    </svg>
  );
}
