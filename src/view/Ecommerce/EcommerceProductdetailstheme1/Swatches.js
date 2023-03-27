import React from 'react'
import style from "./productdetails.module.css";
function Swatches() {
  return (
        <div className={style.swatchsection}>
            <div className='container-fluid'>
                <div className={style.swatchwrfapper}>
                    <h2>Oversize Tshirt Baby Blue</h2>
                    <div className={style.swatchdesc}>
                        <div className={style.price}>
                            <h4>$15</h4>
                        </div>
                        <div className={style.review}>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>
                    </div>

                    <div className={style.linesize}>Available Size</div>    
                    <div className={style.sizes}>
                        <ul>
                            <li>S</li>
                            <li>M</li>
                            <li>L</li>
                            <li>XL</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Swatches