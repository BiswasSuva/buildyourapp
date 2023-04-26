import React from 'react'
import style from "./eventdetails2.module.css";
import eventdetailsbg2 from "../../../images/eventdetailsbg2.png"
import Back from "../../../images/Back.png"
import Favorite from "../../../images/Favorite.png"
import whitevent from "../../../images/whitevent.png"
import whitelocation from "../../../images/whitelocation.png"
function Header() {
    return (
        <div className={style.eventdetailsheader} style={{ backgroundImage: `url(${eventdetailsbg2})` }}>
            <div className='container'>
                <div className='row'>
                    <div className='col-6'>
                        <img src={Back} alt="Back" className={style.backbtn} />
                    </div>
                    <div className='col-6 justify-content-end d-flex'>
                        <img src={Favorite} alt="Back" className={style.favouritebtn} />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12'>
                        <h2 className={style.eventdetailstitle}>KPOP Award Indonesia</h2>
                    </div>
                </div>

                <div className='row mt-3 mb-3'>
                    <div className='col-5'>
                        <p className={style.para}><img src={whitevent} />Dec 22 | 7pm</p>
                    </div>
                    <div className='col-7'>
                        <p className={style.para}><img src={whitelocation} alt="Location" />Jakarta International Stadium</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header