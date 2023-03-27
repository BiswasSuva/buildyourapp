import React from 'react'
import style from "./ott2.module.css";
import ottbanner from "../../../images/ottbanner.png"
import ottbanner1 from "../../../images/ottbanner1.png"
import ottbanner2 from "../../../images/ottbanner2.png"
import playbtn from "../../../images/icon/play_circle.png"
import Slider from "react-slick";
function Ottbanner() {
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
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className={style.banner}>
            <div className={style.bannerslider}>
                <Slider {...settings}>
                    <img src={ottbanner} alt="" className='img-fluid' />
                    <img src={ottbanner1} alt="" className='img-fluid' />
                    <img src={ottbanner2} alt="" className='img-fluid' />
                </Slider>
            </div>
            <div className={style.bannerfooter}>
                <p>Top Gun</p>
                <img src={playbtn} alt="" className={style.plybtn} />
            </div>

        </div>
    )
}

export default Ottbanner