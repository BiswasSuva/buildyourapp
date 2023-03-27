import React from 'react'
import autolayout from "../../../images/autolayout.png"
import style from "./podcastthemedetails.module.css";
function Player() {
    return (
        <section className={style.audioplayer}>
            <div className='container'>
                <img src={autolayout} alt="Player" className='img-fluid' />
            </div>
        </section>
    )
}

export default Player