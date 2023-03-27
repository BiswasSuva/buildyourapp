import React from 'react'
import style from "./ecommerce.module.css"
import productnew1 from "../../../assets/images/ThemeImages/productnew1.png"
import productnew6 from "../../../assets/images/ThemeImages/productnew6.png"
import productnew2 from "../../../assets/images/ThemeImages/productnew2.png"
import productnew3 from "../../../assets/images/ThemeImages/productnew3.png"
import productnew4 from "../../../assets/images/ThemeImages/productnew4.png"
import productnew5 from "../../../assets/images/ThemeImages/productnew5.png"
import Cartimage from "../../../assets/images/ThemeImages/Cartimage.png";
function Section6() {
  return (
    <div className={style.bestseller}>
      <div className='container-fluid'>
        <div className={style.bestsellertitle}>
          <h1>Best Seller</h1>
          <p>See More</p>
        </div>
        <div className='row'>
          <div className='col-4'>
            <div className={style.productlistitem}>
              <div className={style.productlistitemImg}>
                <img src={productnew1} className="img-fluid" alt="Floar Tee" />
                <div className={style.productlistItemAbsolute}>
                  <img src={Cartimage} className="img-fluid" />
                </div>
              </div>
              <h4>Flora Tee</h4>
              <p>$59</p>
            </div>
          </div>
          <div className='col-4'>
            <div className={style.productlistitem}>
              <div className={style.productlistitemImg}>
                <img src={productnew2} className="img-fluid" alt="Floar Tee" />
                <div className={style.productlistItemAbsolute}>
                  <img src={Cartimage} className="img-fluid" />
                </div>
              </div>
              <h4>Flora Tee</h4>
              <p>$59</p>
            </div>
          </div>
          <div className='col-4'>
            <div className={style.productlistitem}>
              <div className={style.productlistitemImg}>
                <img src={productnew3} className="img-fluid" alt="Floar Tee" />
                <div className={style.productlistItemAbsolute}>
                  <img src={Cartimage} className="img-fluid" />
                </div>
              </div>
              <h4>Flora Tee</h4>
              <p>$59</p>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-4'>
            <div className={style.productlistitem}>
              <div className={style.productlistitemImg}>
                <img src={productnew4} className="img-fluid" alt="Floar Tee" />
                <div className={style.productlistItemAbsolute}>
                  <img src={Cartimage} className="img-fluid" />
                </div>
              </div>
              <h4>Flora Tee</h4>
              <p>$59</p>
            </div>
          </div>
          <div className='col-4'>
            <div className={style.productlistitem}>
              <div className={style.productlistitemImg}>
                <img src={productnew5} className="img-fluid" alt="Floar Tee" />
                <div className={style.productlistItemAbsolute}>
                  <img src={Cartimage} className="img-fluid" />
                </div>
              </div>
              <h4>Flora Tee</h4>
              <p>$59</p>
            </div>
          </div>
          <div className='col-4'>
            <div className={style.productlistitem}>
              <img src={productnew6} className="img-fluid" alt="Floar Tee" />
              <h4>Flora Tee</h4>
              <p>$59</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section6