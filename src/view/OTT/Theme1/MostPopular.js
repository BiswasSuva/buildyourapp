import React from 'react'
import style from "./ott.module.css";
import movie1 from "../../../images/movie1.png"
import movie2 from "../../../images/movie2.png"
import movie3 from "../../../images/movie3.png"
import movie4 from "../../../images/movie4.png"
import Slider from "react-slick";
function MostPopular() {
    var settings = {
        dots: false,
        infinite: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2500,

        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    };
    return (
        <div className={style.MostPopular}>
            <div className='container'>
                <div className='row mb-1'>
                    <div className='col-8'>
                        <h1 className={style.toptitle}>Most Popular Movies</h1>
                    </div>
                    <div className='col-4 text-right'>
                        <p className={style.seeall}>See All</p>
                    </div>
                </div>

                <div className={style.popularslider}>
                    <Slider {...settings}>

                        <div className={style.box}>
                            <img src={movie1} alt="" className='img-fluid' />
                            <h1 className={style.movietitle}>Jurasssic World</h1>
                            <p className={style.totalseen}><span className={style.dotss}></span>192,9K</p>
                        </div>

                        <div className={style.box}>
                            <img src={movie2} alt="" className='img-fluid' />
                            <h1 className={style.movietitle}>Fistful of Vengeance</h1>
                            <p className={style.totalseen}><span className={style.dotss}></span>81,6K</p>
                        </div>

                        <div className={style.box}>
                            <img src={movie3} alt="" className='img-fluid' />
                            <h1 className={style.movietitle}>Drifting Home</h1>
                            <p className={style.totalseen}><span className={style.dotss}></span>82K</p>
                        </div>

                        <div className={style.box}>
                            <img src={movie4} alt="" className='img-fluid' />
                            <h1 className={style.movietitle}>Luck</h1>
                            <p className={style.totalseen}><span className={style.dotss}></span>18,6K</p>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default MostPopular