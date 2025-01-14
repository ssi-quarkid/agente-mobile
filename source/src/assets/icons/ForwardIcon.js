import * as React from "react"
import Svg, { Path } from "react-native-svg"

function ForwardIcon({color,...props}) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={12}
      height={24}
      viewBox="0 0 12 24"
      fill="none"
      {...props}
    >
      <Path
        d="M2.45199 6.57999L3.51299 5.51999L9.29199 11.297C9.38514 11.3896 9.45907 11.4996 9.50952 11.6209C9.55997 11.7421 9.58594 11.8722 9.58594 12.0035C9.58594 12.1348 9.55997 12.2648 9.50952 12.3861C9.45907 12.5073 9.38514 12.6174 9.29199 12.71L3.51299 18.49L2.45299 17.43L7.87699 12.005L2.45199 6.57999Z"
        fill={color}
      />
    </Svg>
  )
}

export default ForwardIcon
