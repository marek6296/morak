import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

const base = (size?: number): Partial<SVGProps<SVGSVGElement>> => ({
  width: size ?? 24,
  height: size ?? 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

/* --- Service icons --------------------------------------------------- */

export function SolarIcon({ size, ...props }: IconProps) {
  return (
    <svg {...base(size)} {...props}>
      <path d="M4.5 16.5h15" />
      <path d="M6 6.5h12l1.5 10h-15z" />
      <path d="M9.5 6.5 8.5 16.5" />
      <path d="M14.5 6.5 15.5 16.5" />
      <path d="M5 11.5h14" />
      <path d="M12 3v2" />
      <path d="M4 4.5l1.2 1.2" />
      <path d="M20 4.5l-1.2 1.2" />
      <path d="M9 20.5h6" />
      <path d="M11 16.5v4" />
      <path d="M13 16.5v4" />
    </svg>
  );
}

export function ClimateIcon({ size, ...props }: IconProps) {
  return (
    <svg {...base(size)} {...props}>
      <rect x="3" y="5" width="18" height="9" rx="2" />
      <path d="M3 10h18" />
      <path d="M7 14v1.2a2.5 2.5 0 0 1-1.5 2.3" />
      <path d="M12 14v1.2a2.5 2.5 0 0 1-1.5 2.3" />
      <path d="M17 14v1.2a2.5 2.5 0 0 1-1.5 2.3" />
      <path d="M6 7.5h3" />
      <path d="M6 12h3" />
    </svg>
  );
}

export function CameraIcon({ size, ...props }: IconProps) {
  return (
    <svg {...base(size)} {...props}>
      <path d="M3.5 6.2 16 3l2.5 4.7L6 10.8z" />
      <path d="M8 9.6l1.3 4" />
      <circle cx="13.5" cy="7.2" r="1.2" fill="currentColor" />
      <path d="M10 14 7 21" />
      <path d="M7 14l3.5.8" />
      <path d="M18 8.5l3 1.5" />
    </svg>
  );
}

export function ElectricIcon({ size, ...props }: IconProps) {
  return (
    <svg {...base(size)} {...props}>
      <path d="M13 2 4.5 13.5h5L10 22l9.5-11.5h-5z" />
    </svg>
  );
}

/* --- Small UI icons -------------------------------------------------- */

export function CheckIcon({ size, ...props }: IconProps) {
  return (
    <svg {...base(size)} {...props}>
      <path d="m4 12 5 5 11-12" />
    </svg>
  );
}

export function ArrowRightIcon({ size, ...props }: IconProps) {
  return (
    <svg {...base(size)} {...props}>
      <path d="M4 12h16" />
      <path d="m14 6 6 6-6 6" />
    </svg>
  );
}

export function ArrowUpRightIcon({ size, ...props }: IconProps) {
  return (
    <svg {...base(size)} {...props}>
      <path d="M6 18 18 6" />
      <path d="M8 6h10v10" />
    </svg>
  );
}

export function PhoneIcon({ size, ...props }: IconProps) {
  return (
    <svg {...base(size)} {...props}>
      <path d="M5.5 3.5h3l1.5 4-2 1.2a11 11 0 0 0 5.3 5.3l1.2-2 4 1.5v3a2 2 0 0 1-2.2 2A16 16 0 0 1 3.5 5.7 2 2 0 0 1 5.5 3.5Z" />
    </svg>
  );
}

export function MailIcon({ size, ...props }: IconProps) {
  return (
    <svg {...base(size)} {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3.5 6.5 8.5 6.5 8.5-6.5" />
    </svg>
  );
}

export function PinIcon({ size, ...props }: IconProps) {
  return (
    <svg {...base(size)} {...props}>
      <path d="M12 22s7-6.3 7-12a7 7 0 1 0-14 0c0 5.7 7 12 7 12Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

export function ClockIcon({ size, ...props }: IconProps) {
  return (
    <svg {...base(size)} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

export function ShieldIcon({ size, ...props }: IconProps) {
  return (
    <svg {...base(size)} {...props}>
      <path d="M12 3 4 6v6c0 4.5 3.5 8 8 9 4.5-1 8-4.5 8-9V6z" />
      <path d="m8.5 12 2.5 2.5L15.5 10" />
    </svg>
  );
}

export function BadgeIcon({ size, ...props }: IconProps) {
  return (
    <svg {...base(size)} {...props}>
      <path d="M12 2.5 14.5 5l3.3-.3.7 3.3 2.8 1.9-1.6 2.9 1.6 2.9-2.8 1.9-.7 3.3-3.3-.3L12 21.5 9.5 19l-3.3.3-.7-3.3L2.7 14 4.3 11.1 2.7 8.2 5.5 6.3l.7-3.3 3.3.3z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

export function ToolsIcon({ size, ...props }: IconProps) {
  return (
    <svg {...base(size)} {...props}>
      <path d="M14 4a4 4 0 0 1 4.8 5.2l2.5 2.5a1.5 1.5 0 0 1 0 2.1l-4.5 4.5a1.5 1.5 0 0 1-2.1 0l-2.5-2.5A4 4 0 0 1 7 11l-4-4 3-3 4 4a4 4 0 0 1 4-4z" />
    </svg>
  );
}

export function ChatIcon({ size, ...props }: IconProps) {
  return (
    <svg {...base(size)} {...props}>
      <path d="M21 12a8 8 0 0 1-11.6 7.1L4 20.5l1.4-4.4A8 8 0 1 1 21 12z" />
    </svg>
  );
}

export function SparkIcon({ size, ...props }: IconProps) {
  return (
    <svg {...base(size)} {...props}>
      <path d="M12 3v4" />
      <path d="M12 17v4" />
      <path d="M3 12h4" />
      <path d="M17 12h4" />
      <path d="m5.5 5.5 2.8 2.8" />
      <path d="m15.7 15.7 2.8 2.8" />
      <path d="m5.5 18.5 2.8-2.8" />
      <path d="m15.7 8.3 2.8-2.8" />
    </svg>
  );
}

export function PlusIcon({ size, ...props }: IconProps) {
  return (
    <svg {...base(size)} {...props}>
      <path d="M12 5v14" />
      <path d="M5 12h14" />
    </svg>
  );
}

export function MinusIcon({ size, ...props }: IconProps) {
  return (
    <svg {...base(size)} {...props}>
      <path d="M5 12h14" />
    </svg>
  );
}

export function ChevronDownIcon({ size, ...props }: IconProps) {
  return (
    <svg {...base(size)} {...props}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export function MenuIcon({ size, ...props }: IconProps) {
  return (
    <svg {...base(size)} {...props}>
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h10" />
    </svg>
  );
}

export function CloseIcon({ size, ...props }: IconProps) {
  return (
    <svg {...base(size)} {...props}>
      <path d="m6 6 12 12" />
      <path d="M18 6 6 18" />
    </svg>
  );
}

export function StarIcon({ size, ...props }: IconProps) {
  return (
    <svg {...base(size)} {...props} fill="currentColor" stroke="none">
      <path d="M12 2.5 14.9 8.3 21.3 9.3 16.6 13.9 17.8 20.3 12 17.3 6.2 20.3 7.4 13.9 2.7 9.3 9.1 8.3z" />
    </svg>
  );
}

export function FacebookIcon({ size, ...props }: IconProps) {
  return (
    <svg {...base(size)} {...props}>
      <path d="M15 3h-2.5A3.5 3.5 0 0 0 9 6.5V9H6.5v3H9v10h3V12h2.7l.3-3H12V6.8c0-.6.4-1 1-1h2z" />
    </svg>
  );
}

export function InstagramIcon({ size, ...props }: IconProps) {
  return (
    <svg {...base(size)} {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="3.5" />
      <circle cx="17" cy="7" r="0.8" fill="currentColor" />
    </svg>
  );
}

export function ChargerIcon({ size, ...props }: IconProps) {
  return (
    <svg {...base(size)} {...props}>
      <rect x="5" y="3" width="10" height="18" rx="2" />
      <path d="M5 8h10" />
      <path d="M9 5.5h2" />
      <path d="M15 11h2a2 2 0 0 1 2 2v2a1.5 1.5 0 0 0 1.5 1.5" />
      <path d="M9.5 13v3" />
      <path d="M10.5 13.5l-1 1.5h2l-1 1.5" />
    </svg>
  );
}

export function BatteryIcon({ size, ...props }: IconProps) {
  return (
    <svg {...base(size)} {...props}>
      <rect x="3" y="7" width="16" height="10" rx="2" />
      <path d="M19 10.5v3h1.5a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1z" />
      <path d="M6 10v4" />
      <path d="M9 10v4" />
      <path d="M12 10v4" />
    </svg>
  );
}

export function HouseIcon({ size, ...props }: IconProps) {
  return (
    <svg {...base(size)} {...props}>
      <path d="m3 11 9-7 9 7" />
      <path d="M5 10v10h14V10" />
      <path d="M10 20v-6h4v6" />
    </svg>
  );
}

export function CertifiedIcon({ size, ...props }: IconProps) {
  return (
    <svg {...base(size)} {...props}>
      <circle cx="12" cy="9.5" r="5" />
      <path d="m9.5 14.5-2 6 4.5-2.5 4.5 2.5-2-6" />
      <path d="m10 9.5 1.5 1.5 2.5-3" />
    </svg>
  );
}
