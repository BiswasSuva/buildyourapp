import React from 'react'
import style from "./podcast2.module.css";
import re1 from "../../../images/re1.png"
import artistimage from "../../../images/artistimage.png"
import feelsimage from "../../../images/feelsimage.png"
import Slider from "react-slick";
function Recentlyplayed() {
    var settings = {
        dots: false,
        infinite: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 1500,
        rtl: true,
        slide: '',
        cssEase: 'linear',
        speed: 500,
        slidesToShow: 2.5,
        slidesToScroll: 2
    };
    return (
        <div className={style.recentlyplayed}>
            <div className='container' style={{paddingRight: "0", position: "relative"}}>
                <h1 className={style.title2}>Recently Played</h1>
                <div className={style.recentslider}>
                    <Slider {...settings}>
                        <div className={style.recentbox}>
                            <img src={re1} alt="" className='img-fluid' />
                            <h1 className={style.boxtitle}>Eye Of The Storm</h1>
                            <p className={style.year}>2019 - Album</p>
                        </div>
                        <div className={style.recentbox}>
                            <img src={artistimage} alt="" className='img-fluid' />
                            <h1 className={style.boxtitle}>Justin Bieber</h1>
                            <p className={style.year}>2019 - Album</p>
                        </div>
                        <div className={style.recentbox}>
                            <img src={feelsimage} alt="" className='img-fluid' />
                            <h1 className={style.boxtitle}>The Feels</h1>
                            <p className={style.year}>2021 - Album</p>
                        </div>
                        <div className={style.recentbox}>
                            <img src={re1} alt="" className='img-fluid' />
                            <h1 className={style.boxtitle}>Eye Of The Storm</h1>
                            <p className={style.year}>2019 - Album</p>
                        </div>
                       
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default Recentlyplayed