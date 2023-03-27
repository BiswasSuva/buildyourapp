import React from 'react'
import style from "./ecommerce.module.css"
import man1 from "../../../assets/images/ThemeImages/man1.png"
import man2 from "../../../assets/images/ThemeImages/man2.png"
import man3 from "../../../assets/images/ThemeImages/man3.png"
import man4 from "../../../assets/images/ThemeImages/man4.png"
import Bag from "../../../assets/images/ThemeImages/bag-2.png"
function Section4() {
  return (
    <div className={style.productlist}>
      <div className='container-fluid'>
        <div className={style.productbanner}>
          <h1>Popular</h1>
          <p>See More</p>
        </div>
        <div className={style.newproductitem}>
          <div className={`mb-3 ${style.newproductitemwrapper}`}>
            <div className={style.newproductwrapperImg}>
              <img src='https://picsum.photos/200/300' alt="" className='img-fluid' />
              <div className={style.bagimg}>
                    <img src={Bag} className={style.customimg} alt="Bag"/>
              </div>
            </div>
            <h3>Fast Tee Graphics</h3>
            <p className={style.pricedetails}>$60</p>
          </div>
          <div className={`mb-3 ${style.newproductitemwrapper}`}>
            <div className={style.newproductwrapperImg}>
              <img src={man2} alt="" className='img-fluid' />
              <div className={style.bagimg}>
                    <img src={Bag} className={style.customimg} alt="Bag"/>
              </div>
            </div>
            <h3>RIB KNIT TANK</h3>
            <p className={style.pricedetails}>$70</p>
          </div>
          <div className={`mb-3 ${style.newproductitemwrapper}`}>
            <div className={style.newproductwrapperImg}>
              <img src={man3} alt="" className='img-fluid' />
              <div className={style.bagimg}>
                    <img src={Bag} className={style.customimg} alt="Bag"/>
              </div>
            </div>
            <h3>Single Top White</h3>
            <p className={style.pricedetails}>$55</p>
          </div>
          <div className={`mb-3 ${style.newproductitemwrapper}`}>
            <div className={style.newproductwrapperImg}>
              <img src={man4} alt="" className='img-fluid' />
              <div className={style.bagimg}>
                    <img src={Bag} className={style.customimg} alt="Bag"/>
              </div>
            </div>
            <h3>RIB KNIT TANK</h3>
            <p className={style.pricedetails}>$60</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Section4