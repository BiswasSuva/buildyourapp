import React from 'react'
import style from "./productdetails.module.css";
import cart from "../../../assets/images/ThemeImages/25-trolly.png"
function Section1() {
    return (
        <div className={style.cartsection}>
            <div className='container-fluid'>
                <div className="d-flex align-items-center justify-content-between">
                    <div className={style.backarrow}>
                        <i class="fa-solid fa-arrow-left-long"></i>
                    </div>
                    <div className={style.pgtitle}>
                        <h2>Detail Product</h2>
                    </div>
                    <div className={style.carticon}>
                        <img src={cart} alt="Cart Icon"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section1