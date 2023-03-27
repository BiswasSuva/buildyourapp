import React from 'react'
import style from "./productdetails.module.css";
import pimage from "../../../images/pimage.png"
import Paging from "../../../images/Paging.png"
function Banner() {
  return (
    <div className={style.banner}>
        <div className='container-fluid'>
            <div className='bannerItem'>
                <img src={pimage} alt="" className='img-fluid'/>
                <img src={Paging} className={style.linepaging}/>
            </div>
        </div>
    </div>
  )
}

export default Banner