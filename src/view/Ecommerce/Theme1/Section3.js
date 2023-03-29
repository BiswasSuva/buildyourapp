import React from "react";
import style from "./ecommerce.module.css";
import Slider from "react-slick";
import useEcomBanner from "../../../customHooks/useEcomBanner";
function Section3({fetch,feild = []}) {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        arrows: true,
        autoplay: true,
        slidesToScroll: 1,
        initialSlide: 0,
    };
    const banner = useEcomBanner({ refetch: fetch });
    let BannerHeight = feild.find((item) => item.key === "Banner Height")?.value;
    console.log("banner", BannerHeight);

    let BannerWidth = feild.find((item) => item.key === "Banner Width")?.value;


    return (
        <div className="container-fluid" style={{paddingTop: "10px", paddingBottom: "10px" }}>
            <div className={style.banner}>
                <Slider {...settings}>
                    {banner.length > 0 ? (
                        banner.map((item) => {
                            return <img src={item.image} key={item._id} className={style.bannerht} style={{height:`${BannerHeight}px`,width:`${BannerWidth}px`}} />;
                        })
                    ) : (
                        <div className={style.bannerarea} style={{height:`${BannerHeight}px`,width:`${BannerWidth}px`}}>
                            <div className={style.discounttitle}>
                Uniqlo Basic Edition Special Discount Up To 60%
              </div>
              <div className={style.paradetails}>
                <p>Grab our latest collection and get our special promo</p>
              </div>
                        </div>
                    )}
                    
                </Slider>
            </div>
        </div>
    );
}

export default Section3;
