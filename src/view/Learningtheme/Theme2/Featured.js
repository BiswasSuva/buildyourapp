import React from 'react'
import style from "./learning2.module.css";
import { Link } from "react-router-dom";
import featuredbg from "../../../images/featuredbg.png"
import profileicon from "../../../images/icon/profileicon.png"
import featured2 from "../../../images/featured2.png"
import Slider from "react-slick";
function Featured() {
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
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className={style.featuredbox}>
            <div className='container'>
                <div className='row mb-2'>
                    <div className='col-8'>
                        <p className={style.topcourse}>Featured Class</p>
                    </div>
                    <div className='col-4 text-right'>
                        <Link to="/" className={style.seeall}>See All</Link>
                    </div>
                </div>

                <div className={style.featuredBanner}>
                    <Slider {...settings}>
                        <div className={style.featuredbannerwrap}>
                            <div className={style.featurebanneritem}>
                                <img src={featuredbg} alt="" className='img-fluid' />
                                <div className={style.topfeatureddes}>
                                    <div className={style.rating}>
                                        <p><span className={style.starticon}><i className="fa-solid fa-star"></i>4.4</span> (5)</p>
                                    </div>
                                    <div className={style.save}>
                                        <i className="fa-solid fa-bookmark"></i>
                                    </div>
                                </div>
                                <div className={style.btndoll}>
                                    <p>$129</p>
                                </div>
                            </div>

                            <div className={style.bannerdetails}>
                                <p className={style.subjectline}>Science</p>
                                <h1 className={style.paratitle}>Tricks and tips in learning to count Pythagoras</h1>
                                <div className={style.author}>
                                    <div className={style.authordetails}>
                                        <img src={profileicon} alt="" className='img-fluid' />
                                    </div>
                                    <div className={style.authordetails}>
                                        <p className={style.name}>Alex Endean</p>
                                        <p className={style.designation}>Instructor</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={style.featuredbannerwrap}>
                            <div className={style.featurebanneritem}>
                                <img src={featured2} alt="" className='img-fluid' />
                                <div className={style.topfeatureddes}>
                                    <div className={style.rating}>
                                        <p><span className={style.starticon}><i className="fa-solid fa-star"></i>4.4</span> (5)</p>
                                    </div>
                                    <div className={style.save}>
                                        <i className="fa-solid fa-bookmark"></i>
                                    </div>
                                </div>
                                <div className={style.btndoll}>
                                    <p>$129</p>
                                </div>
                            </div>

                            <div className={style.bannerdetails}>
                                <p className={style.subjectline}>Science</p>
                                <h1 className={style.paratitle}>Tricks and tips in learning to count Pythagoras</h1>
                                <div className={style.author}>
                                    <div className={style.authordetails}>
                                        <img src={profileicon} alt="" className='img-fluid' />
                                    </div>
                                    <div className={style.authordetails}>
                                        <p className={style.name}>Alex Endean</p>
                                        <p className={style.designation}>Instructor</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>


            </div>
        </div>
    )
}

export default Featured