import React from 'react'
import FindIcon from './FindIcon';
import "./index.css"

function Icon({ family, name, size = '35px', color = 'black', style = {}, ...props }) {
    const AllIconName = FindIcon(family)
    return (
        <span style={{ fontFamily: family, fontSize: size, color: color, ...style }} {...props}>
            {String.fromCodePoint(AllIconName[name])}
        </span>
    )
}

export default Icon