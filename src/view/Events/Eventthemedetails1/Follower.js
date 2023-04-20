import React from 'react'
import style from "./eventdetails1.module.css";
import User from "../../../images/User.png"
function Follower() {
    return (
        <div className={style.follower}>
            <div className='container'>
                <div className='row'>
                    <div className='col-6'>
                        <div className='row'>
                            <div className={style.profile}>
                                <img src={User} alt="User" className={style.userprofile}/>
                            </div>
                            <div className={style.namedesignation}>
                                <p className={style.name}>Adam<br/> Levine</p>
                                <p className={style.designation}>Organizer</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-6'></div>
                </div>
            </div>
        </div>
    )
}

export default Follower