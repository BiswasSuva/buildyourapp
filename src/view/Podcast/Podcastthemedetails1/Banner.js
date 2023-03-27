import React from 'react'
import style from "./podcastthemedetails.module.css";
import bannerdetails from "../../../images/bannerdetails.png"
function Banner() {
    return (
        <section className={style.detailsbanner}>
            <div className='container'>
                <div className={style.bannerImage}>
                    <img src={bannerdetails} alt="" className='img-fluid'/>
                    <h1>685: Steve Rambam | The Real Life of a Private Investigator</h1>
                    <h6>The Jordan Harbinger Show</h6>
                </div>
            </div>
        </section>
    )
}

export default Banner