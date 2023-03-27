import React from 'react'
import style from "./learning2.module.css";
import Slider from "react-slick";
function Allfilteredcategories() {
    var settings = {
        dots: false,
        infinite: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2500,
        // ltr: true,
        // slide: '',
        // cssEase: 'linear',
        speed: 500,
        slidesToShow: 2.5,
        slidesToScroll: 3
    };
    return (
        <div className={style.categorybtn}>
            <div className='container'>
                <div className={style.allbtns}>
                    <div className={style.btnitem}>
                        <Slider {...settings}>
                            <div>
                                <button>All Course</button>
                            </div>
                            <div>
                                <button>UX Design</button>
                            </div>
                            <div>
                                <button>3D Animation</button>
                            </div>
                            <div>
                                <button>UI Design</button>
                            </div>

                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Allfilteredcategories