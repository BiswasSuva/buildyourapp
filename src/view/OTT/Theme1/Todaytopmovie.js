import React from 'react'
import style from "./ott.module.css";
import Slider from "react-slick";
function Todaytopmovie() {
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
        slidesToShow: 3.5,
        slidesToScroll: 2
    };
    return (
        <div className={style.Todaytopmovie}>
            <div className='container'>
                <div className='row mb-1'>
                    <div className='col-8'>
                        <h1 className={style.toptitle}>Today Top Movie</h1>
                    </div>
                    <div className='col-4 text-right'>
                        <p className={style.seeall}>See All</p>
                    </div>
                </div>

                <div className={style.allbtns}>
                    <Slider {...settings}>
                        <button className={style.btns}>All</button>
                        <button className={style.btns}>Action</button>
                        <button className={style.btns}>Adventure</button>
                        <button className={style.btns}>Mystery</button>
                        {/* <div className={style.singlebtn}>
                            <button className={style.btns}>All</button>
                        </div>

                        <div className={style.singlebtn1}>
                            <button className={style.btns}>Action</button>
                        </div>

                        <div className={style.singlebtn2}>
                            <button className={style.btns}>Adventure</button>
                        </div>

                        <div className={style.singlebtn3}>
                            <button className={style.btns}>Mystery</button>
                        </div> */}
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default Todaytopmovie