import React from 'react'
import style from "./learningthemedetails.module.css";
import backimage from "../../../images/backimage.png"
import tplaybtn from "../../../images/tplaybtn.png"
import Tab from "../../../images/Tab.png"
function Banner() {
  return (
        <div className={style.banner} >
            <div className='container'>
                    <div className={style.bannerarea} style={{backgroundImage: `url(${backimage})`}}>
                        <div className={style.playbtn}>
                            <img src={tplaybtn} alt="Play Button" className='img-fluid'/>
                        </div>
                        <div className={style.playtab}>
                            <img src={Tab} alt="" className='img-fluid'/>
                        </div>
                    </div>
            </div>
        </div>
  )
}

export default Banner