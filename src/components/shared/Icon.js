/*
 Custom icon component using Bootstrap Icon SVG path.
 Icon SVG path located on assets/iconList.js
*/

import React from "react";

function Icon({ icon, size = "16", color = "currentColor" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill={color}
      viewBox="0 0 16 16"
    >
      <path d={icon} />
    </svg>
  );
}

export default Icon;
