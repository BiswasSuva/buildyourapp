import React from 'react'
import style from "./ecommerce.module.css"
import ImageProduct from "../../../assets/images/ThemeImages/ImageProduct.png"
import Background from "../../../assets/images/ThemeImages/Background.png"
import Slider from "react-slick";
function Section2() {

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    arrows: false,
    autoplay: true,
    slidesToScroll: 2,
    initialSlide: 0,
  };
  return (
    <div className='container-fluid' style={{ height: "100%" }}>
      <div className={style.banner}>
        <Slider {...settings}>
          <div className={style.newthemebanner} style={{ backgroundImage: `url(${Background})` }}>
            <div className='row' style={{ height: "100%" }}>
              <div className='col-6' style={{ height: "100%" }}>
                <div className={style.bannertext} >
                  <h5>New Releases</h5>
                  <h1>BLACK JACKET</h1>
                  <a href="">Shop Now</a>
                </div>
              </div>
              <div className='col-6' style={{ height: "100%" }}>
                <div className={style.bannerimagearea} style={{ height: "100%" }}>
                  <img src={ImageProduct} className="img-fluid" alt="" />
                </div>

              </div>
            </div>
          </div>
          <div className={style.newthemebanner} style={{ backgroundImage: `url(${Background})` }}>
            <div className='row' style={{ height: "100%" }}>
              <div className='col-6' style={{ height: "100%" }}>
                <div className={style.bannertext} >
                  <h5>New Releases</h5>
                  <h1>BLACK JACKET</h1>
                  <a href="">Shop Now</a>
                </div>
              </div>
              <div className='col-6' style={{ height: "100%" }}>
                <div className={style.bannerimagearea} style={{ height: "100%" }}>
                  <img src={ImageProduct} className="img-fluid" alt="" />
                </div>

              </div>
            </div>
          </div>
        </Slider>
      </div>

    </div>
  )
}

export default Section2