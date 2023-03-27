import React from 'react'
import style from "./learning.module.css";
import { Link } from "react-router-dom";
import a from "../../../images/icon/Chips.png";
import b from "../../../images/icon/Chips (2).png";
import c from "../../../images/icon/Chips (1).png";
import d from "../../../images/icon/Chips (4).png";
import Slider from "react-slick";
function Popularcourse() {
    var settings = {
        dots: false,
        infinite: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 1500,
        ltr: true,
        slide: '',
        cssEase: 'linear',
        speed: 500,
        slidesToShow: 2.5,
        slidesToScroll: 2
    };
    return (
        <div className={style.popularcourse}>
            <div className='container-fluid'>
                <div className='row mb-3'>
                    <div className='col-8'>
                        <p className={style.topmentors}>Most Popular Courses</p>
                    </div>
                    <div className='col-4 text-right'>
                        <Link to="/" className={style.seeall}>See All</Link>
                    </div>
                </div>
            </div>

            <div className='container-fluid'>
                <div className={style.allbtns}>
                <Slider {...settings}>
                    <button className={style.btnall}><img src={a}/>All</button>
                    <button className={style.btnall2}><img src={b}/>Design</button>
                    <button className={style.btnall2}><img src={d}/>Business</button>
                    <button className={style.btnall2}><img src={c}/>Corporate</button>
                </Slider>
                </div>
            </div>
        </div>
    )
}

export default Popularcourse