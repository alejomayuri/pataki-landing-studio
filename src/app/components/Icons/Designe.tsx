import * as React from "react";
import { SVGProps } from "react";

const DesigneIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={80}
    height={80}
    viewBox="0 0 30 30"
    {...props}
  >
    <defs>
    <linearGradient id="galaxy-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="var(--color-galaxy-start)" />
        <stop offset="100%" stopColor="var(--color-galaxy-end)" />
    </linearGradient>
    </defs>
    <path
      d="m8.283 5.453-2.83 2.83 1.063 1.06L7.93 7.93l.707.707-1.414 1.414 1.414 1.414 1.414-1.414.707.707-1.414 1.414 1.414 1.414 2.828-2.828zm13 .436-2.666 2.666 2.828 2.828 2.666-2.666a11.98 11.98 0 0 0-1.287-1.541 11.983 11.983 0 0 0-1.54-1.287Zm-4.08 4.08L6.596 20.576l-.707 3.535 3.535-.707L20.03 12.797Zm2.04 6.445-2.829 2.828 1.414 1.414 1.414-1.414.707.707-1.414 1.414 1.414 1.414 1.414-1.414.707.707-1.414 1.414 1.06 1.063 2.83-2.83z"
      fill="url(#galaxy-gradient)"
    />
  </svg>
);

export default DesigneIcon;