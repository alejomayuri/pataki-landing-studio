import * as React from "react"
import { SVGProps } from "react"
const MailIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={800}
    height={800}
    viewBox="0 -2.5 20 20"
    {...props}
  >
    <title>{"email [#1573]"}</title>
    <path
      fill="#677082"
      fillRule="evenodd"
      d="m18 2.291-8 7.027-8-7.037V2h16v.291ZM2 13V4.945l8 7.035 8-7.027V13H2Zm-2 2h20V0H0v15Z"
    />
  </svg>
)
export default MailIcon
