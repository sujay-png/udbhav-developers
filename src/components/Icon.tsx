import * as React from "react";

export type IconName =
  | "menu"
  | "x"
  | "arrow-right"
  | "arrow-up-right"
  | "arrow-left"
  | "play"
  | "star"
  | "quote"
  | "shield"
  | "leaf"
  | "smile"
  | "facebook"
  | "instagram"
  | "linkedin"
  | "youtube"
  | "map-pin"
  | "phone"
  | "mail"
  | "chevron-down"
  | "chevron-right"
  | "building"
  | "sofa"
  | "wrench"
  | "check"
  | "search"
  | "calendar"
  | "user"
  | "tag"
  | "download"
  | "file-text"
  | "key"
  | "bar-chart"
  | "map"
  | "users"
  | "banknote"
  | "calendar-check";

const paths: Record<IconName, React.ReactNode> = {
  menu: (
    <>
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </>
  ),
  x: (
    <>
      <line x1="5" y1="5" x2="19" y2="19" />
      <line x1="19" y1="5" x2="5" y2="19" />
    </>
  ),
  "arrow-right": (
    <>
      <line x1="4" y1="12" x2="20" y2="12" />
      <polyline points="13 5 20 12 13 19" />
    </>
  ),
  "arrow-up-right": (
    <>
      <line x1="6" y1="18" x2="18" y2="6" />
      <polyline points="8 6 18 6 18 16" />
    </>
  ),
  "arrow-left": (
    <>
      <line x1="20" y1="12" x2="4" y2="12" />
      <polyline points="11 5 4 12 11 19" />
    </>
  ),
  play: <polygon points="6 3 20 12 6 21" />,
  star: (
    <polygon points="12 2 15.09 8.63 22 9.27 16.5 14.14 18.18 21 12 17.27 5.82 21 7.5 14.14 2 9.27 8.91 8.63" />
  ),
  quote: (
    <>
      <path d="M4 15c0-4.4 2.2-7.4 6-9v3c-2 1-3 2.6-3 5h3v6H4v-5z" />
      <path d="M14 15c0-4.4 2.2-7.4 6-9v3c-2 1-3 2.6-3 5h3v6h-6v-5z" />
    </>
  ),
  shield: <path d="M12 2 4 5v6c0 5 3.4 8.6 8 11 4.6-2.4 8-6 8-11V5l-8-3z" />,
  leaf: (
    <>
      <path d="M5 20C3 12 8 5 20 4c1 10-6 16-15 16z" />
      <path d="M5 20c2-4 5-7 10-9" />
    </>
  ),
  smile: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M8 13.5c1 1.6 2.4 2.5 4 2.5s3-.9 4-2.5" />
      <line x1="9" y1="9.5" x2="9.01" y2="9.5" />
      <line x1="15" y1="9.5" x2="15.01" y2="9.5" />
    </>
  ),
  facebook: <path d="M14 9h3V6h-3c-1.7 0-3 1.3-3 3v2H9v3h2v6h3v-6h3l1-3h-4v-2c0-.6.4-1 1-1z" />,
  instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <line x1="17.2" y1="6.8" x2="17.2" y2="6.8" />
    </>
  ),
  linkedin: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <line x1="7" y1="10" x2="7" y2="17" />
      <line x1="7" y1="7" x2="7" y2="7" />
      <path d="M11 17v-7h3v1.3c.6-1 1.6-1.5 3-1.5 2 0 3 1.4 3 3.6V17h-3v-4c0-1-.4-1.6-1.3-1.6-1 0-1.7.8-1.7 1.9V17h-3z" />
    </>
  ),
  youtube: (
    <>
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
    </>
  ),
  "map-pin": (
    <>
      <path d="M12 22s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  phone: (
    <path d="M6 3h3l1.5 4.5L8 9c.8 2.5 2.7 4.4 5.2 5.2l1.5-2.5L19 13v3c0 1.1-.9 2-2 2C10.5 18 3 10.5 3 5c0-1.1.9-2 2-2z" />
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <polyline points="3 7 12 13 21 7" />
    </>
  ),
  "chevron-down": <polyline points="5 8 12 15 19 8" />,
  "chevron-right": <polyline points="9 5 16 12 9 19" />,
  building: (
    <>
      <rect x="5" y="3" width="9" height="18" />
      <rect x="14" y="9" width="5" height="12" />
      <line x1="8" y1="7" x2="8" y2="7" />
      <line x1="11" y1="7" x2="11" y2="7" />
      <line x1="8" y1="11" x2="8" y2="11" />
      <line x1="11" y1="11" x2="11" y2="11" />
      <line x1="8" y1="15" x2="8" y2="15" />
      <line x1="11" y1="15" x2="11" y2="15" />
    </>
  ),
  sofa: (
    <>
      <path d="M4 12V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4" />
      <path d="M3 12h18v5a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-5z" />
      <line x1="5" y1="18" x2="5" y2="20" />
      <line x1="19" y1="18" x2="19" y2="20" />
    </>
  ),
  wrench: (
    <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L4 17l3 3 5.3-5.3a4 4 0 0 0 5.4-5.4l-2.6 2.6-2-2z" />
  ),
  check: <polyline points="5 12 10 17 19 8" />,
  search: (
    <>
      <circle cx="11" cy="11" r="7" />
      <line x1="21" y1="21" x2="16.2" y2="16.2" />
    </>
  ),
  calendar: (
    <>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <line x1="3" y1="9" x2="21" y2="9" />
      <line x1="8" y1="3" x2="8" y2="7" />
      <line x1="16" y1="3" x2="16" y2="7" />
    </>
  ),
  user: (
    <>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21c1.5-4 5-6 8-6s6.5 2 8 6" />
    </>
  ),
  tag: (
    <>
      <path d="M12 3h6a2 2 0 0 1 2 2v6L11 20l-8-8L12 3z" />
      <line x1="15.5" y1="7.5" x2="15.5" y2="7.5" />
    </>
  ),
  download: (
    <>
      <path d="M12 3v12" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="4" y1="20" x2="20" y2="20" />
    </>
  ),
  "file-text": (
    <>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10 9 9 9 8 9" />
    </>
  ),
  key: (
    <>
      <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" />
    </>
  ),
  "bar-chart": (
    <>
      <line x1="12" y1="20" x2="12" y2="10" />
      <line x1="18" y1="20" x2="18" y2="4" />
      <line x1="6" y1="20" x2="6" y2="16" />
    </>
  ),
  map: (
    <>
      <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6" />
      <line x1="8" y1="2" x2="8" y2="18" />
      <line x1="16" y1="6" x2="16" y2="22" />
    </>
  ),
  users: (
    <>
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </>
  ),
  banknote: (
    <>
      <rect x="2" y="6" width="20" height="12" rx="2" />
      <circle cx="12" cy="12" r="2" />
      <path d="M6 12h.01M18 12h.01" />
    </>
  ),
  "calendar-check": (
    <>
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
      <path d="m9 16 2 2 4-4" />
    </>
  ),
};

interface IconProps extends React.SVGAttributes<SVGSVGElement> {
  name: IconName;
  size?: number;
}

const filled = new Set<IconName>(["star", "play", "facebook", "quote"]);

export function Icon({ name, size = 20, className, ...props }: IconProps) {
  const isFilled = filled.has(name);
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={isFilled ? "currentColor" : "none"}
      stroke={isFilled ? "none" : "currentColor"}
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      {...props}
    >
      {paths[name]}
    </svg>
  );
}
