import React from 'react'
import style from "./productdetails.module.css";
import backbtn from "../../../images/backbtn.png"
import ex from "../../../images/export.png"
function Topheader() {
  return (
    <div className={style.topheader}>
        <div className='container-fluid'>
            <div className={style.topheadersection}>
                <button><img src={backbtn} alt="" className='img-fluid'/></button>
                <h1 className={style.titleheader}>Basketball Shoes</h1>
                <div className={style.cart}>
                    <button><img src={ex} alt="" className='img-fluid'/></button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Topheader