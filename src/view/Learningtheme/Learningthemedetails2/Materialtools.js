import React from 'react'
import style from "./learningthemedetails.module.css";
import Tool1 from "../../../images/tool1.png"
import Tool2 from "../../../images/tool2.png"
import Tool3 from "../../../images/tool3.png"
function Materialtools() {
  return (
        <div className={style.material}>
            <div className='container'>
                <div className={style.main}>
                    <h1>Material support tool</h1>
                    <div className={style.toolitems}>
                        <img src={Tool1} alt="" className=''/>
                        <img src={Tool2} alt="" className=''/>
                        <img src={Tool3} alt="" className=''/>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Materialtools