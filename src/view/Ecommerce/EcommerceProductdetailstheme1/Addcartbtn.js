import React from 'react'
import style from "./productdetails.module.css";
import cartimage from "../../../images/carttrolly.png"
function Addcartbtn() {
    return (
        <div className={style.cartbtnsection}>
            <div className='container-fluid' style={{ margin: "25px 0" }}>
                <div className={style.addcartbtn}>
                    <button><img src={cartimage} />Add to Cart</button>
                </div>
            </div>

        </div>

    )
}

export default Addcartbtn