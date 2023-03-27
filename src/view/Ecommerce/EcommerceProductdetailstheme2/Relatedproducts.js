import React from 'react'
import style from "./productdetails.module.css";
import Slider from "react-slick";
import pimage from "../../../images/pimage.png"
// import piamge2 from "../../../images/pimage2.png"
// import pimage3 from "../../../images/pimage3.png"
import bag from "../../../images/icon/bag4.png"
function Relatedproducts() {
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
        <div className={style.Relatedproducts}>
            <div className='container-fluid'>
                <div className={style.productwrapper}>
                    <h3>You Might Also Like</h3>
                    <div className={style.sliderwrapper}>
                        <Slider {...settings}>
                            <div>
                                <div className={style.productinfo}>
                                    <div className={style.productcarou}>
                                        <img src={pimage} alt="" className='img-fluid' />
                                        <div className={style.busket}>
                                            <img src={bag} alt="BAG ICON" className={style.bag} />
                                        </div>
                                    </div>
                                    <h1 className={style.ptitle}>LEBRON 19 BASKETBALL</h1>
                                    <p className={style.price}>$1200</p>
                                </div>

                            </div>

                            <div>
                                <div className={style.productinfo}>
                                    <div className={style.productcarou}>
                                        <img src={pimage} alt="" className='img-fluid' />
                                        <div className={style.busket}>
                                            <img src={bag} alt="BAG ICON" className={style.bag} />
                                        </div>
                                    </div>
                                    <h1 className={style.ptitle}>LEBRON 19 BASKETBALL</h1>
                                    <p className={style.price}>$1200</p>
                                </div>
                            </div>

                            <div>
                                <div className={style.productinfo}>
                                    <div className={style.productcarou}>
                                        <img src={pimage} alt="" className='img-fluid' />
                                        <div className={style.busket}>
                                            <img src={bag} alt="BAG ICON" className={style.bag} />
                                        </div>
                                    </div>
                                    <h1 className={style.ptitle}>LEBRON 19 BASKETBALL</h1>
                                    <p className={style.price}>$1200</p>
                                </div>
                            </div>




                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Relatedproducts