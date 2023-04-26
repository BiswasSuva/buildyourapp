import React from 'react'
import style from "./eventdetails1.module.css";
import User from "../../../images/User.png"
function Follower() {
    return (
        <div className={style.follower} style={{padding: '20px 15px', borderBottom: "1px solid #EDF2F7" }}>
            <div className='container'>
                <div className='row align-items-center'>
                    <div className='col-6 '>
                        <div className='row align-items-center'>
                            <div className={style.profile}>
                                <img src={User} alt="User" className={style.userprofile}/>
                            </div>
                            <div className={style.namedesignation}>
                                <p className={style.name}>Adam<br/> Levine</p>
                                <p className={style.designation}>Organizer</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-6 text-right'>
                        <button className={style.follow}>Follow</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Follower