import React from 'react'

function ProfCardUi({ children, mt = "14" }) {
  return (
 
      <div className={`col-lg-3 col-md-6 mt-${mt}`}>
        {children}
      </div>


  )
}

export default ProfCardUi