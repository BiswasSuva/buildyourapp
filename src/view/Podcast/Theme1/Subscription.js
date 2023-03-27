import React from 'react'
import style from "./podcast.module.css";
import { Link } from "react-router-dom";
import subs1 from "../../../images/subs1.png"
import subs2 from "../../../images/subs2.png"
import subs3 from "../../../images/subs3.png"
import subs4 from "../../../images/subs4.png"
import subs5 from "../../../images/subs5.png"
import Slider from "react-slick";
function Subscription() {

    var settings = {
        dots: false,
        infinite: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 1500,
        rtl: true,
        slide: '',
        cssEase: 'linear',
        speed: 500,
        slidesToShow: 3.5,
        slidesToScroll: 3
    };
    return (
        <section className={style.subscriptions}>
            <div className='container'>
                <div className='row mb-3'>
                    <div className='col-8'>
                        <h1 className={style.title}>Subscriptions</h1>
                    </div>
                    <div className='col-4 text-right'>
                        <Link to="/" className={style.seeall}>See All</Link>
                    </div>
                </div>
            </div>
            <div className='container' style={{paddingRight: 0}}>
                <div className={style.subscriptionSlide}>
                    <Slider {...settings}>
                        <div className={style.subscriptionBox}>
                            <img src={subs1} alt="" className='img-fluid' />
                        </div>
                        <div className={style.subscriptionBox}>
                            <img src={subs2} alt="" className='img-fluid' />
                        </div>
                        <div className={style.subscriptionBox}>
                            <img src={subs3} alt="" className='img-fluid' />
                        </div>
                        <div className={style.subscriptionBox}>
                            <img src={subs4} alt="" className='img-fluid' />
                        </div>
                        <div className={style.subscriptionBox}>
                            <img src={subs5} alt="" className='img-fluid' />
                        </div>
                        
                    </Slider>    
                </div>
            </div>
        </section >
    )
}

export default Subscription