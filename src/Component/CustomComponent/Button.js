import React from 'react'
import "./Button.css"

function Button({ name = "name", onClick }) {
  return (
    <div >
      
      <button className="button-62" role="button" onClick={onClick}>{name}</button>

    </div>
  )
}

export default Button