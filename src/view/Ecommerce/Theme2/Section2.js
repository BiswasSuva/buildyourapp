import React from 'react'
import style from "./ecommerce.module.css"
import ImageProduct from "../../../assets/images/ThemeImages/ImageProduct.png"
import Background from "../../../assets/images/ThemeImages/Background.png"

import estoretheme2banner from "../../../images/estoretheme2banner.3deeee84aaf54cd36eb6 (1).png"
import useEcomBanner from '../../../customHooks/useEcomBanner'
import Slider from "react-slick";
import { useEstoreRightSidearContext } from "../../../Providers/EcomRightSidebar";

function Section2({fetch, feild = [] }) {
  const { activeElement, setActiveElement } = useEstoreRightSidearContext();

  let height = feild.find((item) => item.key === "Banner Height")?.value;
  let width = feild.find((item) => item.key === "Banner Width")?.value;
  let borderRadius = feild.find((item) => item.key === "Border Radius")?.value;
  let backgroundColor = feild.find((item) => item.key === "Background Color")?.value;
  // const { rerender, setRender } = useElementList();

  const banner = useEcomBanner({ refetch: fetch });



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


  const DummyImage =[
    {
      image:estoretheme2banner,
      style:{height:"208px",width:"360px",}
    }
  ]
  return (
    <div className='container-fluid'  style={{ height: "100%" ,backgroundColor:"#fff",padding:'20px 0' ,borderRadius:"30px 30px 0 0",border:activeElement===1&& "2px solid black"}}>
      <div className={style.banner} style={{height:height,width:width,borderRadius:borderRadius,backgroundColor, margin: "0 auto"}}>
        <Slider {...settings} className="bannersliderall">
         {banner.length==0? <img src={estoretheme2banner}/>:

         (
          banner.map((item,i)=>{
            return <img src={item.image} key={i}/>
          })
         )
         }
          {/* {DummyImage.map((item)=>{
            return <img src={item.image} />

          })} */}
          {/* <div className={style.newthemebanner} style={{ backgroundImage: `url(${Background})` }}>
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
          </div> */}
        </Slider>
      </div>

    </div>
  )
}

export default Section2