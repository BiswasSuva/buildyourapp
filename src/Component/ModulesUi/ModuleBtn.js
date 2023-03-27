import React from 'react'

function ModuleBtn({name="button",onClick}) {
  return (
    <div className="app-modules-recomanded-add-menu-wrap">
    <div className="app-modules-recomanded-confirm-box">
      <a className="btn app-modules-recomanded-confirm-btn"  onClick={onClick}>{name}</a>
    </div>
  </div>  )
}

export default ModuleBtn