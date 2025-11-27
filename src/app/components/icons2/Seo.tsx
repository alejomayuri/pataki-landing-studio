import * as React from "react"
import { SVGProps } from "react"

const SeoIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={80}
    height={80}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <defs>
      <linearGradient id="galaxy-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="var(--color-galaxy-start)" />
        <stop offset="100%" stopColor="var(--color-galaxy-end)" />
      </linearGradient>
    </defs>
    <path
      stroke="url(#galaxy-gradient)"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11 6a5 5 0 0 1 5 5m.659 5.655L21 21m-2-10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z"
    />
  </svg>
)

export default SeoIcon

