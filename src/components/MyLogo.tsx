// provided by Greg Bergé with his app https://react-svgr.com/playground/
import * as React from "react"

type LogoProps = {
    size?: string;
    alt?: string;
    className?: string;
    fillColor?: string;
}

const MyLogo: React.FC<LogoProps> = ({ size='1rem', className, alt, fillColor}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 15.876 15.879"
    className={className}
    aria-label={alt}
  >
    <g
      style={{
        display: "inline",
      }}
    >
      <path
        d="M4.961 3.969a.993.993 0 0 0-.992.992v13.891c0 .548.444.992.992.992h1.654V7.937c0-.721.597-1.318 1.318-1.318h5.56c2.769 0 5.16 1.648 6.248 4.013a7.939 7.939 0 0 0-7.834-6.663Z"
        style={{
          display: "inline",
          fill: fillColor,
          stroke: fillColor,
          strokeWidth: 0,
          strokeMiterlimit: 0,
        }}
        transform="translate(-3.969 -3.969)"
      />
      <path
        d="M16.466 7.882c.469.886.737 1.895.736 2.967-.006 3.703-2.844 6.352-6.353 6.352h-3.71v2.646h6.353a6.352 6.352 0 0 0 2.974-11.965z"
        style={{
          display: "inline",
          fill: fillColor,
          stroke: fillColor,
          strokeWidth: 0,
          strokeMiterlimit: 0,
        }}
        transform="translate(-3.969 -3.969)"
      />
    </g>
  </svg>
)
export default MyLogo;
