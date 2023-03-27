import React from 'react'
import Slider from "react-slick";
import Vest from "../../../assets/images/ThemeImages/Vest.png"
import style from "./ecommerce.module.css"
function Section3() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    arrows: false,
    autoplay: true,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: false,
                dots: false
            }
        },
        {
            breakpoint: 1164,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: false,
                dots: false
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3
            }
        }
    ]
};
  return (
    <div className={style.categorysliding}>
      <div className='container-fluid'>
        <div className={style.fullslider}>
          <Slider {...settings}>
            <div className={style.slideritemwrap}>
              <button className='mr-3'><img src={Vest} className="img-fluid" alt="" />Shirt</button>
            </div>
            <div className={style.slideritemwrap}>
              <button ><img src={Vest} className="img-fluid" alt="" />Shirt</button>
            </div>
            <div className={style.slideritemwrap}>
              <button><img src={Vest} className="img-fluid" alt="" />Shirt</button>
            </div>
            <div className={style.slideritemwrap}>
              <button><img src={Vest} className="img-fluid" alt="" />Shirt</button>
            </div>
            <div className={style.slideritemwrap}>
              <button><img src={Vest} className="img-fluid" alt="" />Shirt</button>
            </div>
            <div className={style.slideritemwrap}>
              <button><img src={Vest} className="img-fluid" alt="" />Shirt</button>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default Section3