import React from 'react'
import style from "./podcastthemedetails2.module.css";
import podasct2 from  "../../../images/podasct2.png"
import Popupmessage from  "../../../images/Popupmessage.png"
function Player() {
    return (
        <section className={style.audioplayer}>
            <div className='container'>
                <img src={podasct2} alt="Player" className='img-fluid' />
                <img src={Popupmessage} alt="" className='img-fluid'/>
            </div>
        </section>
    )
}

export default Player