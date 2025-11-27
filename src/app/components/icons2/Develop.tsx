import * as React from "react"
import { SVGProps } from "react"

const DevelopIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    width={80}
    height={80}
    viewBox="0 0 32 32"
    {...props}
  >
    <defs>
      <linearGradient id="galaxy-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="var(--color-galaxy-start)" />
        <stop offset="100%" stopColor="var(--color-galaxy-end)" />
      </linearGradient>
    </defs>
    <path
      d="M28 24V5H4v19h8v1h-1v2h10v-2h-1v-1h8zM6 7h20v15H6V7zm12 18h-4v-1h4v1zm-3-14H8V9h7v2zm4 3h-9v-2h9v2zm-2 3h-7v-2h7v2zm-5 3H8v-2h4v2z"
      fill="url(#galaxy-gradient)"
    />
  </svg>
)

export default DevelopIcon
