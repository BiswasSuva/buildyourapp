import React from 'react'
import style from "./social.module.css";
import proimageheh from "../../images/proimageheh.png"
import tripledotsgsgs from "../../images/tripledotsgsgs.png"
import rectangle from "../../images/rectangle.png"
import wishlistbtn from "../../images/wishlistbtn.png"
import commentbtn from "../../images/commentbtn.png"
import sharebtn from "../../images/sharebtn.png"
import secondbg from "../../images/secondbg.png"
import love from "../../images/love.png"
import profile2 from "../../images/profile2.png"
function Card() {
    return (
        <>
        <div className={style.card} style={{marginTop: "14px"}}>
            <div className='container'>
                <div className='row'>
                    <div className='col-8'>
                        <div className={style.pro}>
                            <div>
                                <img src={proimageheh} alt="Profile" className={style.profile} />
                            </div>
                            <div>
                                <h2>Lorem ipsum</h2>
                                <p>Tue at 12;30 Am</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-4 d-flex align-items-center justify-content-end'>
                        <img src={tripledotsgsgs} alt="Dots" className={style.dotstriple} />
                    </div>
                </div>
            </div>

            <div className='col-12' style={{ paddingLeft: "0", paddingRight: "0" }}>
                <img src={rectangle} className={style.bgimage} alt="Background Image" />
            </div>

            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <p className={style.paratext}>Lorem ipsum dolor sit amet consectetur. Tellus egestas tempus integer feugiat quis accumsan nullam.</p>
                    </div>
                </div>
            </div>

            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <div className={style.bottompart}>
                            <div className={style.allbtns}>
                                <button><img src={wishlistbtn} alt="Love" /></button>
                                <button><img src={commentbtn} alt="Love" /></button>
                                <button><img src={sharebtn} alt="Love" /></button>
                            </div>
                            <div className={style.cmntsection}>
                                <p>125 likes . </p>
                                <p>42 Comments .</p>
                                <p>2 share</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className={style.card}>
            <div className='container'>
                <div className='row'>
                    <div className='col-8'>
                        <div className={style.pro}>
                            <div>
                                <img src={profile2} alt="Profile" className={style.profile} />
                            </div>
                            <div>
                                <h2>Lorem ipsum</h2>
                                <p>Tue at 12;30 Am</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-4 d-flex align-items-center justify-content-end'>
                        <img src={tripledotsgsgs} alt="Dots" className={style.dotstriple} />
                    </div>
                </div>
            </div>

            <div className='col-12' style={{ paddingLeft: "0", paddingRight: "0" }}>
                <img src={secondbg} className={style.bgimage} alt="Background Image" />
            </div>

            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <p className={style.paratext}>Lorem ipsum dolor sit amet consectetur. Tellus egestas tempus integer feugiat quis accumsan nullam.</p>
                    </div>
                </div>
            </div>

            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <div className={style.bottompart}>
                            <div className={style.allbtns}>
                                <button><img src={love} alt="Love" /></button>
                                <button><img src={commentbtn} alt="Love" /></button>
                                <button><img src={sharebtn} alt="Love" /></button>
                            </div>
                            <div className={style.cmntsection}>
                                <p>125 likes . </p>
                                <p>42 Comments .</p>
                                <p>2 share</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
        
    )
}

export default Card