import React from 'react'
import style from "./events.module.css";
import Searchevent from "../../../images/Searchevent.png"
import Notificationsevents from "../../../images/Notificationsevents.png"
function Header() {
    return (
        <div className={style.eventheader}>
            <div className='container'>
                <div className='row'>
                    <div className='col-6'>
                        <div className='d-flex align-items-center'>
                            <h4 className={style.title}>Evenie.</h4>
                        </div>
                    </div>
                    <div className='col-6'>
                        <div className='d-flex align-items-center justify-content-end'>
                            <button style={{ marginRight: "12px" }}><img src={Searchevent} alt="Save" className={style.searchbtn} /></button>
                            <button><img src={Notificationsevents} alt="Save" className={style.notificationbtn} /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header