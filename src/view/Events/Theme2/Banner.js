import React from 'react'
import style from "./event2.module.css";
import eventtrendbg from "../../../images/eventtrendbg.png"
import Slider from "react-slick";
function Banner() {
    var settings = {
        dots: false,
        infinite: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 1500,

        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className={style.bannerarea}>
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <h2 className={style.trending}>Trending</h2>
                    </div>
                </div>
                <div>
                    <Slider {...settings}>
                        <div>
                            <img src={eventtrendbg} className={style.bannerbg} alt="Banner" style={{ borderRadius: "12px" }} />
                        </div>
                        <div>
                            <img src={eventtrendbg} className={style.bannerbg} alt="Banner" style={{ borderRadius: "12px" }} />
                        </div>
                        <div>
                            <img src={eventtrendbg} className={style.bannerbg} alt="Banner" style={{ borderRadius: "12px" }} />
                        </div>

                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default Banner