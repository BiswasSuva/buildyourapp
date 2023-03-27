import React from 'react'
import style from "./ott2.module.css";
import trending1 from "../../../images/trending1.png"
import trending2 from "../../../images/trending2.png"
import trending3 from "../../../images/trending3.png"
import trending4 from "../../../images/trending4.png"
import Slider from "react-slick";
function Trendingnow() {
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
        <div className={style.trending}>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-8'>
                        <h1 className={style.trendingtitle}>Trending Now</h1>
                    </div>
                    <div className='col-4 text-right'>
                        <p className={style.seeall}>Show All</p>
                    </div>
                </div>
            </div>

            <div className='container-fluid' style={{paddingRight: 0}}>
                <div className={style.trendingslider}>
                    <Slider {...settings}>
                        <div className={style.trendingslideritem}>
                            <img src={trending1} alt="Trending" className='img-fluid' />
                        </div>
                        <div className={style.trendingslideritem}>
                            <img src={trending2} alt="Trending" className='img-fluid' />
                        </div>
                        <div className={style.trendingslideritem}>
                            <img src={trending3} alt="Trending" className='img-fluid' />
                        </div>
                        <div className={style.trendingslideritem}>
                            <img src={trending4} alt="Trending" className='img-fluid' />
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default Trendingnow