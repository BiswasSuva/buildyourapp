import React from 'react'
import style from "./ott2.module.css";
import trend1 from "../../../images/trend1.png"
import trend2 from "../../../images/trend2.png"
import trend3 from "../../../images/trend3.png"
import trend4 from "../../../images/trend4.png"
import Slider from "react-slick";
function Recentviewed() {
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
    <div className={style.recentview}>
        <div className='container-fluid'>
                <div className='row'>
                    <div className='col-8'>
                        <h1 className={style.recentviewtitle}>Recently Viewed</h1>
                    </div>
                </div>
            </div>
         <div className='container-fluid' style={{paddingRight: 0}}>
                <div className={style.trendingslider}>
                    <Slider {...settings}>
                        <div className={style.trendingslideritem}>
                            <img src={trend1} alt="Trending" className='img-fluid' />
                            <p>Vinom</p>
                        </div>
                        <div className={style.trendingslideritem}>
                            <img src={trend2} alt="Trending" className='img-fluid' />
                            <p>Warcraft</p>
                        </div>
                        <div className={style.trendingslideritem}>
                            <img src={trend3} alt="Trending" className='img-fluid' />
                            <p>Spiderman</p>
                        </div>
                        <div className={style.trendingslideritem}>
                            <img src={trend4} alt="Trending" className='img-fluid' />
                            <p>Vinom</p>
                        </div>
                    </Slider>
                </div>
            </div>
    </div>
  )
}

export default Recentviewed