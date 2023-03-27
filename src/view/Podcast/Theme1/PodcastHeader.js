import React from 'react'
import style from "./podcast.module.css";
import podcastface from "../../../images/podcastface.png"
import Notification from "../../../images/icon/Notification.png"
import Bookmark from "../../../images/icon/Bookmark.png"
function PodcastHeader() {
  return (
    <div className={style.ecommerceheader}>
        <div className='container'>
            <div className='row'>
                <div className='col-8' >
                    <div className='row' style={{justifyContent: "space-around", paddingLeft: "5px"}}>
                        <div className={style.profileimg}>
                            <img src={podcastface} className="img-fluid" alt=""/>
                        </div>
                        <div className={style.profilename}>
                            <p className={style.gm}>Good Morning 👋</p>
                            <p className={style.profileName}>Andrew Ainsley</p>
                        </div>
                    </div>
                </div>
                <div className='col-4'>
                    <div className={style.socialIcons}>
                        <img src={Notification} className="img-fluid" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PodcastHeader