import React from 'react'
import style from "./eventdetails1.module.css";
import eventdetailsbackbtn from "../../../images/eventdetailsbackbtn.png"
import wishlistdetailsicon from "../../../images/wishlistdetailsicon.png"
import Background from "../../../images/detailsbg.png"
function Header() {
    return (
        <div className={style.eventdetailsheader}  style={{
            background: `url(${Background})`,
          }}>
            <div className='container'>
                <div className='row'>
                    <div className='col-6'>
                        <div className='d-flex align-items-center'>
                            <img src={eventdetailsbackbtn} alt="BackButton" className={style.backbtn}/>
                        </div>
                    </div>
                    <div className='col-6'>
                    <div className='d-flex align-items-center justify-content-end'>
                            <img src={wishlistdetailsicon} alt="BackButton" className={style.backbtn}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header