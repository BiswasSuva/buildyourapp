import React from 'react'
import style from "./ott2.module.css";
import trending1 from "../../../images/trending1.png"
import trending2 from "../../../images/trending2.png"
import trending3 from "../../../images/trending3.png"
import trending4 from "../../../images/trending4.png"
import Slider from "react-slick";
function Latestshow() {
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

    var settingsbtn = {
        dots: false,
        infinite: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        rtl: true,
        slide: '',
        cssEase: 'linear',
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 4
    };

    return (
        <div className={style.latestshow}>
            <div className='container-fluid'>
                <div className='row mb-2'>
                    <div className='col-8'>
                        <h1 className={style.trendingtitle}>Latest Shows</h1>
                    </div>
                    <div className='col-4 text-right'>
                        <p className={style.seeall}>Show All</p>
                    </div>
                </div>
            </div>
            <div className='container-fluid'>
                <div className={style.latestbtn}>
                    <Slider {...settingsbtn}>
                        <div className={style.btnitems}>
                            <button>All</button>
                        </div>
                        <div className={style.btnitems}>
                            <button>Movies</button>
                        </div>
                        <div className={style.btnitems}>
                            <button>Drama</button>
                        </div>
                        <div className={style.btnitems}>
                            <button>Thirller</button>
                        </div>
                        <div className={style.btnitems}>
                            <button>Romance</button>
                        </div>
                    </Slider>
                </div>
            </div>
            <div className='container-fluid' style={{ paddingRight: 0 }}>
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

export default Latestshow