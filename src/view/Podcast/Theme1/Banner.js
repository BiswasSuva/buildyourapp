import React from 'react'
import style from "./podcast.module.css";
import promodiscount from "../../../images/promodiscount.png"
import lady from "../../../images/lady.png"
function Banner() {
  return (
    <section className={style.banner} style={{
      backgroundImage: `url(${promodiscount})`
    }}>
      <div className="container" style={{marginTop: "-10px"}}>
        <div className='row'>
          <div className='col-8'>
              <h1 className={style.bannertitle}>Enjoy All Benefits!</h1>
              <p className={style.bannerpara}>Enjoy listening podcast with better audio quality, without restrictions, and without ads</p>
              <button className={style.btnbanner}>Get Premium</button>
          </div>
          {/* <div className='col-4'>
            
          </div> */}
        </div>
      </div>
    </section>
  )
}

export default Banner