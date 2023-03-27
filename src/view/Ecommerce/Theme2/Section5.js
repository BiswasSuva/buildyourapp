import React from 'react'
import style from "./ecommerce.module.css"
import givenchy from "../../../assets/images/ThemeImages/givenchy.png"
import adidaas from "../../../assets/images/ThemeImages/adidaas.png"
import nike from "../../../assets/images/ThemeImages/nike.png"
import kalphlauren from "../../../assets/images/ThemeImages/kalphlauren.png"
import balmain from "../../../assets/images/ThemeImages/balmain.png"
import puma from "../../../assets/images/ThemeImages/puma.png"
import kensen from "../../../assets/images/ThemeImages/kensen.png"
import channel from "../../../assets/images/ThemeImages/channel.png"
function Section5() {
  return (
    <div className={style.brand}>
        <div className='container-fluid'>
            <div className={style.brandtitle}>
                <h1>Brand</h1>
            </div>
            <div className={style.logoarea}>
                <div className={style.logoitem}>
                    <img src={givenchy} alt="Brands Logo" className='img-fluid'/>
                </div> 
                <div className={style.logoitem}>
                    <img src={adidaas} alt="Brands Logo" className='img-fluid'/>
                </div> 
                <div className={style.logoitem}>
                    <img src={nike} alt="Brands Logo" className='img-fluid'/>
                </div> 
                <div className={style.logoitem}>
                    <img src={kalphlauren} alt="Brands Logo" className='img-fluid'/>
                </div> 
                <div className={style.logoitem}>
                    <img src={balmain} alt="Brands Logo" className='img-fluid'/>
                </div> 
                <div className={style.logoitem}>
                    <img src={puma} alt="Brands Logo" className='img-fluid'/>
                </div> 
                <div className={style.logoitem}>
                    <img src={kensen} alt="Brands Logo" className='img-fluid'/>
                </div> 
                <div className={style.logoitem}>
                    <img src={channel} alt="Brands Logo" className='img-fluid'/>
                </div> 
            </div>
        </div>
    </div>
  )
}

export default Section5