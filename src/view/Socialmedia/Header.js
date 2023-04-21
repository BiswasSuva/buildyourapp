import React from 'react'
import style from "./social.module.css";
import search from "../../images/teenyicons.png"
import claritynotification from "../../images/claritynotification.png"
function Header() {
    return (
        <div className={style.newsheader}>
            <div className='container'>
                <div className='row'>
                    <div className='col-6'>
                        <div className={style.logo}>
                            <p>Socialapp</p>
                        </div>
                    </div>
                    <div className='col-6 d-flex align-items-center justify-content-end'>
                        <div className='row' style={{ paddingRight: "15px" }}>
                            <p style={{ marginBottom: 0, marginRight: "10px" }}><img src={search} alt="Search" className={style.searchicon} /></p>
                            <p style={{ marginBottom: 0 }}><img src={claritynotification} alt="Notification" className={style.notiicon} /></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header