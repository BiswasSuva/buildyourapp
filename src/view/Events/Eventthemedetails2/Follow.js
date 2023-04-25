import React from 'react'
import style from "./eventdetails2.module.css";
function Follow() {
    return (

        <div className={style.follow}>
            <div className='container'>
                <div className='row align-items-center'>
                    <div className='col-8'>
                        <h1 className={style.follower}>Korea-ID Tourism</h1>
                        <div className='d-flex align-items-center justify-content-between'>
                            <p className={style.location}>Jakarta</p>
                            <p className={style.events}>25 Events</p>
                        </div>
                    </div>

                    <div className='col-4'>
                        <button className={style.followbtn}>Follow</button>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Follow