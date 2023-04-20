import React from 'react'
import style from "./news.module.css"
import newsimage from "../../../images/newsimage.png"
import mdi from "../../../images/mdi_tick-circle.png"
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
        <div className={style.bannerbox}>
            <div className='container'>
                
                    <Slider {...settings}>
                        <div className=''>
                            <div className={style.bannerimage}>
                                <img src={newsimage} alt="Banner" className={style.bg} />
                                <button className={style.tags}>Political</button>
                            </div>

                            <div className={style.bannertitle}>
                                <p><img src={mdi} alt="Tick" className={style.tickright} />2 Hours ago</p>
                                <h4>Lorem ipsum dolor sit amet consectetur. Vitae sit sed nisi augue varius.</h4>
                            </div>
                        </div>
                        <div className='' >
                            <div className={style.bannerimage}>
                                <img src={newsimage} alt="Banner" className={style.bg} />
                                <button className={style.tags}>Political</button>
                            </div>

                            <div className={style.bannertitle}>
                                <p><img src={mdi} alt="Tick" className={style.tickright} />2 Hours ago</p>
                                <h4>Lorem ipsum dolor sit amet consectetur. Vitae sit sed nisi augue varius.</h4>
                            </div>
                        </div>
                        <div className=''>
                            <div className={style.bannerimage}>
                                <img src={newsimage} alt="Banner" className={style.bg} />
                                <button className={style.tags}>Political</button>
                            </div>

                            <div className={style.bannertitle}>
                                <p><img src={mdi} alt="Tick" className={style.tickright} />2 Hours ago</p>
                                <h4>Lorem ipsum dolor sit amet consectetur. Vitae sit sed nisi augue varius.</h4>
                            </div>
                        </div>
                        
                    </Slider>
               
            </div>
        </div>

    )
}

export default Banner