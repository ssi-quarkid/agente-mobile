import * as React from "react"
import Svg, { Path } from "react-native-svg"

function FaqIcon({color, ...props}) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={28}
      height={28}
      viewBox="0 0 28 28"
      fill="none"
      {...props}
    >
      <Path
        d="M15.313 19.688a1.313 1.313 0 11-2.626 0 1.313 1.313 0 012.626 0zM14 7.874c-2.413 0-4.375 1.766-4.375 3.938v.437a.875.875 0 101.75 0v-.438c0-1.203 1.178-2.187 2.625-2.187s2.625.984 2.625 2.188C16.625 13.015 15.447 14 14 14a.875.875 0 00-.875.875v.875a.875.875 0 101.75 0v-.079c1.995-.366 3.5-1.958 3.5-3.858 0-2.172-1.962-3.938-4.375-3.938zM25.375 14A11.375 11.375 0 1114 2.625 11.387 11.387 0 0125.375 14zm-1.75 0A9.625 9.625 0 1014 23.625 9.636 9.636 0 0023.625 14z"
        fill={color}
      />
    </Svg>
  )
}

export default FaqIcon