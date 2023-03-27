import React from 'react'
import "./Eva.scss"

function Eva() {
  return (
<div className='eva'>
  <div className="e-albania">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" id="orbit">
      <circle
        fill="none"
        stroke="#fff"
        strokeWidth={5}
        cx={50}
        cy={50}
        r={40}
      />
      <circle fill="#EB1E51" cx={50} cy={50} r={24} />
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        width={34}
        textAnchor="middle"
        fill="#fff"
        style={{ fontSize: "300%" }}
      >
        e
      </text>
    </svg>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" id="electron">
      <circle fill="#EB1E51" cx={10} cy={90} r={10} />
    </svg>
  </div>
  <h1 className="logo-title"> Hey i'm Eva your product AI manager</h1>
</div>  )
}

export default Eva