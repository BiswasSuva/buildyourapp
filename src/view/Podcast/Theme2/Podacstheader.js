import React from 'react'
import style from "./podcast2.module.css";
import Notification from "../../../images/icon/Notificationpodcast.png"
import recentlyplayedpodcast from "../../../images/icon/recentlyplayedpodcast.png"
function Podacstheader() {
  return (
    <div className={style.ecommerceheader}>
      <div className='container'>
        <div className='row' style={{ alignItems: "center" }}>
          <div className='col-8' >
            <div className={style.profilename}>
              <p className={style.gm}>Hello Sharon</p>
              <p className={style.profileName}>Good morning!</p>
            </div>
          </div>
          <div className='col-4'>
            <div className={style.socialIcons}>
              <img src={Notification} className="img-fluid" alt="" />
              <img src={recentlyplayedpodcast} className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Podacstheader