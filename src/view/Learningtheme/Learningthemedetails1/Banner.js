import React from 'react'
import style from "./learningthemedetails.module.css";
import backgroundbg from "../../../images/backgroundbg.png"
import alhr from "../../../images/alhr.png"
function Banner() {
  return (
    <div className={style.banner} style={{backgroundImage: `url(${backgroundbg})`}}>
        <div className="container">
            <div className={style.playbtn}>
                <img src={alhr} alt="" className='img-fluid'/>
            </div>
        </div>
    </div>
  )
}

export default Banner