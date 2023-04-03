import React from 'react'
import style from "./ott2.module.css";
import trend1 from "../../../images/trend1.png"
import trend2 from "../../../images/trend2.png"
import trend3 from "../../../images/trend3.png"
import trend4 from "../../../images/trend4.png"
import Slider from "react-slick";
function Recentviewed({feild=[]}) {
    const heading=  feild.find((item) => item.key === "Heading")?.value;
    const headingSize=  feild.find((item) => item.key === "Heading Font Size")?.value;
    const headingColor=  feild.find((item) => item.key === "Heading Font Color")?.value;
    const titleColor=  feild.find((item) => item.key === "Title Color")?.value;
    const titleSize=  feild.find((item) => item.key === "Title Size")?.value;
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
        slidesToShow: 3.5,
        slidesToScroll: 3
    };
  return (
    <div className={style.recentview}>
        <div className='container-fluid'>
                <div className='row'>
                    <div className='col-8'>
                        <h1 className={style.recentviewtitle} style={{fontSize:headingSize,color:headingColor}} >{heading}</h1>
                    </div>
                </div>
            </div>
         <div className='container-fluid' style={{paddingRight: 0}}>
                <div className={style.trendingslider}>
                    <Slider {...settings}>
                        <div className={style.trendingslideritem}>
                            <img src={trend1} alt="Trending" className='img-fluid' />
                            <p  style={{fontSize:titleSize,color:titleColor}}>Danger</p>
                        </div>
                        <div className={style.trendingslideritem}>
                            <img src={trend2} alt="Trending" className='img-fluid' />
                            <p  style={{fontSize:titleSize,color:titleColor}}>Danger</p>
                        </div>
                        <div className={style.trendingslideritem}>
                            <img src={trend3} alt="Trending" className='img-fluid' />
                            <p  style={{fontSize:titleSize,color:titleColor}}>Danger</p>
                        </div>
                        <div className={style.trendingslideritem}>
                            <img src={trend4} alt="Trending" className='img-fluid' />
                            <p  style={{fontSize:titleSize,color:titleColor}}>Danger</p>
                        </div>
                    </Slider>
                </div>
            </div>
    </div>
  )
}

export default Recentviewed