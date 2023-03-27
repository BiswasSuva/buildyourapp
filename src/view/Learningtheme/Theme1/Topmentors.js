import React from 'react'
import style from "./learning.module.css";
import { Link } from "react-router-dom";
import Mentor1 from "../../../images/mentor1.png"
import Slider from "react-slick";
function Topmentors() {
    var settings = {
        dots: false,
        infinite: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 1500,
        ltr: true,
        slide: '',
        cssEase: 'linear',
        speed: 500,
        slidesToShow: 3.5,
        slidesToScroll: 2
    };
    return (
        <div className={style.mentors}>
            <div className='container'>
                <div className='row mb-3'>
                    <div className='col-8'>
                        <p className={style.topmentors}>Top Mentors</p>
                    </div>
                    <div className='col-4 text-right'>
                        <Link to="/" className={style.seeall}>See All</Link>
                    </div>
                </div>
            </div>

            <div className='container-fluid' style={{paddingLeft: "0"}}>
                <div className={style.slidermentor}>
                    <Slider {...settings}>
                        <div className={style.profilenameimage}>
                            <img src={Mentor1} className="img-fluid" alt="" />
                            <p>Jacob</p>
                        </div>
                        <div className={style.profilenameimage}>
                            <img src={Mentor1} className="img-fluid" alt="" />
                            <p>Jacob</p>
                        </div>
                        <div className={style.profilenameimage}>
                            <img src={Mentor1} className="img-fluid" alt="" />
                            <p>Jacob</p>
                        </div>
                        <div className={style.profilenameimage}>
                            <img src={Mentor1} className="img-fluid" alt="" />
                            <p>Jacob</p>
                        </div>
                        <div className={style.profilenameimage}>
                            <img src={Mentor1} className="img-fluid" alt="" />
                            <p>Jacob</p>
                        </div>
                        <div className={style.profilenameimage}>
                            <img src={Mentor1} className="img-fluid" alt="" />
                            <p>Jacob</p>
                        </div>
                        <div className={style.profilenameimage}>
                            <img src={Mentor1} className="img-fluid" alt="" />
                            <p>Jacob</p>
                        </div>
                        <div className={style.profilenameimage}>
                            <img src={Mentor1} className="img-fluid" alt="" />
                            <p>Jacob</p>
                        </div>
                        <div className={style.profilenameimage}>
                            <img src={Mentor1} className="img-fluid" alt="" />
                            <p>Jacob</p>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default Topmentors