import React from 'react'
import style from "./event2.module.css";
import EventoIcons from "../../../images/EventoIcons.png"
function Header() {
    return (
        <div className={style.eventheader}>
            <div className='container'>
                <div className='row'>
                    <div className='col-6'>
                        <h2 className={style.logoarea}>Hi Daniel!</h2>
                    </div>
                    <div className='col-6'>
                       <p style={{marginBottom: 0}} className={style.locationtitle}><img src={EventoIcons} alt="Location" className={style.location}/>Indonesia</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header