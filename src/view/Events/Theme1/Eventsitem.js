import React from 'react'
import style from "./events.module.css";
import eventboximage from "../../../images/eventboximage.png"
import wishlist from "../../../images/wishlist.png"
import bg2 from "../../../images/bg2.png"
import bg3 from "../../../images/bg3.png"
function Eventsitem() {
  return (
    <div className={style.eventsitem}>
      <div className='container'>
        <div className='row'>
          <div className='col-12' style={{marginBottom: "16px"}}>
            <div className={style.eventlist}>
              <div className={style.imagebox}>
                <img src={eventboximage} alt="" className='img-fluid' />
              </div>
              <div className={style.article}>
                <h2 className={style.timearticle}>23 Oct - 08:00 PM </h2>
                <h1 className={style.maititle}>Disco Tehran - Goodbye Party</h1>
              </div>
              <div className={style.wishlist}>
                <img src={wishlist} alt="Wishlist" className="img-fluid" />
              </div>
            </div>
          </div>
          <div className='col-12' style={{marginBottom: "16px"}}>
            <div className={style.eventlist}>
              <div className={style.imagebox}>
                <img src={bg2} alt="" className='img-fluid' />
              </div>
              <div className={style.article}>
                <h2 className={style.timearticle}>31 Oct - 08:00 PM </h2>
                <h1 className={style.maititle}>Everyday People NYC: rOLLER</h1>
              </div>
              <div className={style.wishlist}>
                <img src={wishlist} alt="Wishlist" className="img-fluid" />
              </div>
            </div>
          </div>
          <div className='col-12' style={{marginBottom: "16px"}}>
            <div className={style.eventlist}>
              <div className={style.imagebox}>
                <img src={bg3} alt="" className='img-fluid' />
              </div>
              <div className={style.article}>
                <h2 className={style.timearticle}>31 Oct - 08:00 PM </h2>
                <h1 className={style.maititle}>Everyday People NYC: rOLLER</h1>
              </div>
              <div className={style.wishlist}>
                <img src={wishlist} alt="Wishlist" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Eventsitem