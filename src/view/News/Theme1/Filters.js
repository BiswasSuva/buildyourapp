import React from 'react'
import style from "./news.module.css"
import Slider from "react-slick";
function Filters() {
    var settings = {
        dots: false,
        infinite: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 1500,

        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4
    };
    return (
        <div className={style.filter}>
            <div className='container'>
                <div className={style.allbtns}>
                    <Slider {...settings}>
                        <div className={style.singlebtn}>
                            <button>Political</button>
                        </div>
                        <div className={style.singlebtn}>
                            <button>Social</button>
                        </div>
                        <div className={style.singlebtn}>
                            <button>Current</button>
                        </div>
                        <div className={style.singlebtn}>
                            <button>Sports</button>
                        </div>
                        <div className={style.singlebtn}>
                            <button>National</button>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default Filters