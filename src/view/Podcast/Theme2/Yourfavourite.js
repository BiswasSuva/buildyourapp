import React from 'react'
import style from "./podcast2.module.css";
import favourite1 from "../../../images/favourite1.png"
import favourite2 from "../../../images/favourite2.png"
import favourite3 from "../../../images/favourite3.png"
import Slider from "react-slick";
function Yourfavourite() {
    var settings = {
        dots: false,
        infinite: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 1500,
        rtl: true,
        slide: '',
        cssEase: 'linear',
        speed: 500,
        slidesToShow: 2.5,
        slidesToScroll: 2
    };
    return (
        <div className={style.yourfavourite}>
            <div className='container'>
                <h1 className={style.title3}>Your Favourite Artist</h1>
                <div className={style.favouriteartist}>
                <Slider {...settings}>
                    <div className={style.favoriteartist}>
                        <img src={favourite1} className="img-fluid" alt=""/>
                        <p>One Ok Rock</p>
                    </div>
                    <div className={style.favoriteartist}>
                        <img src={favourite2} className="img-fluid" alt=""/>
                        <p>TWICE</p>
                    </div>
                    <div className={style.favoriteartist}>
                        <img src={favourite3} className="img-fluid" alt=""/>
                        <p>Official HIGE 
DANdism</p>
                    </div>
                    <div className={style.favoriteartist}>
                        <img src={favourite1} className="img-fluid" alt=""/>
                        <p>One Ok Rock</p>
                    </div>
                </Slider>    
                </div>
            </div>
        </div>
    )
}

export default Yourfavourite