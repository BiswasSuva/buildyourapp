import React from 'react'
import style from "./learning.module.css";
function Banner() {
  return (
    <div className={style.ecommerceheader}>
        <div className='container'>
           <div className={style.bgbanner}>
                <h2>40% <span>OFF</span></h2>
                <h1>Today's Special</h1>
                <p>Get a discount for every course order!
Only valid for today!</p>
           </div>
        </div>
    </div>
  )
}

export default Banner