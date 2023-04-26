import React from 'react'
import style from "./ott2.module.css";
import trending1 from "../../../images/trending1.png"
import trending2 from "../../../images/trending2.png"
import trending3 from "../../../images/trending3.png"
import trending4 from "../../../images/trending4.png"
import Slider from "react-slick";
function Trendingnow({feild}) {


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
        <div className={style.trending}>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-8'>
                        <h1 style={{color:headingColor,fontSize:headingSize,}} className={style.trendingtitle}>{heading}</h1>
                    </div>
                    <div className='col-4 text-right'>
                        <p className={style.seeall}>Show All</p>
                    </div>
                </div>
            </div>

            <div className='container-fluid' style={{paddingRight: 0}}>
                <div className={style.trendingslider}>
                    <Slider {...settings}>
                        <div className={style.trendingslideritem}>
                            <img src={trending1} alt="Trending" className='img-fluid' />
                            <p style={{fontSize:titleSize,color:titleColor}}>Puspa</p>

                        </div>
                        <div className={style.trendingslideritem}>
                            <img src={trending2} alt="Trending" className='img-fluid' />
                            <p  style={{fontSize:titleSize,color:titleColor}}>Agilan</p>

                        </div>
                        <div className={style.trendingslideritem}>
                            <img src={trending3} alt="Trending" className='img-fluid' />
                            <p  style={{fontSize:titleSize,color:titleColor}}>Vitenam</p>

                        </div>
                        <div className={style.trendingslideritem}>
                            <img src={trending4} alt="Trending" className='img-fluid' />
                            <p  style={{fontSize:titleSize,color:titleColor}}>Danger</p>

                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default Trendingnow