import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const iconProps = {
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export const ArrowUpRight = (props: IconProps) => (
  <svg {...iconProps} {...props}>
    <path d="M7 17 17 7M8 7h9v9" />
  </svg>
);

export const ArrowRight = (props: IconProps) => (
  <svg {...iconProps} {...props}>
    <path d="M5 12h14m-5-5 5 5-5 5" />
  </svg>
);

export const Download = (props: IconProps) => (
  <svg {...iconProps} {...props}>
    <path d="M12 3v12m-4-4 4 4 4-4M5 21h14" />
  </svg>
);

export const Menu = (props: IconProps) => (
  <svg {...iconProps} {...props}>
    <path d="M4 8h16M4 16h16" />
  </svg>
);

export const Close = (props: IconProps) => (
  <svg {...iconProps} {...props}>
    <path d="m6 6 12 12M18 6 6 18" />
  </svg>
);

export const Github = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M12 .7A11.3 11.3 0 0 0 8.4 22.8c.6.1.8-.3.8-.6v-2.1c-3.3.7-4-1.4-4-1.4-.5-1.4-1.3-1.8-1.3-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.7 1.7.3 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.2c0 .3.2.7.8.6A11.3 11.3 0 0 0 12 .7Z" />
  </svg>
);

export const Linkedin = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M5.3 7.8A2.3 2.3 0 1 0 5.3 3a2.3 2.3 0 0 0 0 4.7ZM3.3 21h4V9.2h-4V21Zm6.3-11.8h3.8v1.6h.1c.5-1 1.8-2 3.7-2 4 0 4.8 2.6 4.8 6V21h-4v-5.5c0-1.3 0-3-2-3s-2.4 1.5-2.4 2.9V21h-4V9.2Z" />
  </svg>
);

export const Mail = (props: IconProps) => (
  <svg {...iconProps} {...props}>
    <path d="M3 5h18v14H3zM3 6l9 7 9-7" />
  </svg>
);
