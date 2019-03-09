import React from 'react'

const strokeStyle = {vectorEffect: 'non-scaling-stroke'}

const BellIcon = () => (
  <svg
    viewBox="0 0 25 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid"
    width="1em"
    height="1em"
  >
    <path
      d="M6 11C6 14.5 6 15.5 5 18.5H20C19 15.5 19 14.5 19 11C19 7.5 16.5 4.5 12.5 4.5C8.50002 4.5 6 7.5 6 11Z"
      stroke="currentColor"
      style={strokeStyle}
    />
    <path
      d="M10.5 18.5C10.5 20.5 11 21.5 12.5 21.5C14 21.5 14.5 20.5 14.5 18.5"
      stroke="currentColor"
      style={strokeStyle}
    />
  </svg>
)

export default BellIcon
