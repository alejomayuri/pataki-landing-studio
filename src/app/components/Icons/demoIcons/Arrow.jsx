import * as React from "react"
const ArrowIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.fill}
      fillRule="evenodd"
      d="M17.65 11.25 12.79 6.54l1.045-1.077L20.577 12l-6.742 6.538-1.045-1.076 4.86-4.712H3v-1.5h14.65Z"
      clipRule="evenodd"
    />
  </svg>
)
export default ArrowIcon
