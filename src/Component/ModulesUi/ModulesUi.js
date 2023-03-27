import React from 'react'

function ModulesUi({children}) {
  return (
    <section id="recommended" className='bg-shape' style={{paddingTop: "0"}}>
    <div className="container-fluid">
      <div className="row mt-4">
        {children}
      </div>
      </div>
    </section>
      )
}

export default ModulesUi