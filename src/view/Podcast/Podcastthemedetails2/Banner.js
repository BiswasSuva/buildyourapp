import React from 'react'
import style from "./podcastthemedetails2.module.css";
import subtract from "../../../images/subtract.png"
function Banner() {
  return (
        <section className={style.banner}>
            <div className='container'>
                <div className={style.bannerimage}>
                    <img src={subtract} alt="" className='img-fluid'/>
                    <p style={{marginTop: "20px"}}>Let’s live like we’re immortal</p>
                    <p>Live just for tonight</p>
                    <h3>We’ll think about tomorrow, yeah</h3>
                    <p>When the sun comes up</p>
                    <p>Cause by this time tomorrow</p>
                </div>
            </div>
        </section>
  )
}

export default Banner