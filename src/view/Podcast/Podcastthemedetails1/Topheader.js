import React from 'react'
import style from "./podcastthemedetails.module.css";
function Topheader() {
    return (
        <section className={style.topheader}>
            <div className='container'>
                <div className={style.sec}>
                    <div className={style.backbtn}>
                        <button><i className="fa-solid fa-arrow-left"></i></button>
                    </div>
                    <div className={style.title}>
                        <h3>The Jordan Harbinger Sh...</h3>
                    </div>
                    <div className={style.threedots}>
                        <button><i className="fa-solid fa-ellipsis"></i></button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Topheader