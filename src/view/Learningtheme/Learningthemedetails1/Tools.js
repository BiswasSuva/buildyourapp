import React from 'react'
import style from "./learningthemedetails.module.css";
import figmawrap from "../../../images/figmawrap.png"
function Tools() {
  return (
        <div className={style.tools}>
            <div className='container-fluid'>
                <div className={style.toolsitem}>
                    <h1>Tools</h1>
                    <img src={figmawrap} alt="" className='img-fluid'/>
                    <button className={style.btncourse}>Enroll Course - $40</button>
                </div>
            </div>
        </div>
  )
}

export default Tools