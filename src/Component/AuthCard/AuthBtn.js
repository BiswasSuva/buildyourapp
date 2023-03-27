import React from 'react'

function AuthBtn({name="Button",onClick,style={},disabled=false}) {
  return (
    <button
      onClick={onClick}
      style={style}
      // className="register-btn btn btn-secondary"
      className="btn btn-secondary btn-logreg"
      disabled={disabled}
    >
      {/* <div> */}
      {/* <i style={{}} className="fa fa-spinner fa-spin"></i> */}
      {/* </div> */}
     
      {name}
    </button>  )
}

export default AuthBtn