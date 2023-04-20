import React from 'react'
import style from "./eventdetails1.module.css";
import datecalender from "../../../images/datecalender.png"
import grpimage from "../../../images/grpimage.png"
import location from "../../../images/location.png"
function Scheduledevent() {
  return (
    <div className={style.scheduledevent}>
        <div className='container'>
            <div className='row'>
                <div className='col-12'>
                    <h1 className={style.eventtitle}>2000s Hip Hop Night</h1>
                   
                </div>
            </div>
            <div className='row'>
                <div className='col-8'>
                    <h2 className={style.clndertitle}><img src={datecalender} alt="Date"/>29 Oct - 07:00 PM</h2>
                    <h2 className={style.clndertitle}><img src={location} alt="Location"/>Brooklyn</h2>
                </div>
                <div className='col-4'>
                    <img src={grpimage} alt="Group Image" className={style.grpimage}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Scheduledevent