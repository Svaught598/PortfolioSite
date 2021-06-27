import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function IconLink(props) {
  const { icon, destination, darkMode } = props
  const color = (darkMode)
    ? "#292929FF"
    : "#264653ff"

  return (
    <div className="rounded-xl p-2 bg-persian-green h-16 w-full grow orange-on-hover shadow-xl">
      <a href={ destination } className="mx-auto">
        <FontAwesomeIcon
          icon={ icon }
          className="h-full color-transition"
          color={ color }
          style={ {"width": "100%"} }
        />
      </a>
    </div>
  )
}