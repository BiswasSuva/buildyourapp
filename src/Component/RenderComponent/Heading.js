import React from 'react'

function Heading({heading="heading"}) {
  return (
    <ul>
    <li id="cid_18" className="form-input-wide" data-type="control_head">
      <div className="form-header-group  header-large">
        <div className="header-text httal htvam">
          <h1 id="header_18" className="form-header" data-component="header">
            {heading}
          </h1>

        </div>
      </div>
    </li>
  </ul>  )
}

export default Heading