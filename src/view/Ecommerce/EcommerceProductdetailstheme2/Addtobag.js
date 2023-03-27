import React from 'react'
import style from "./productdetails.module.css";
function Addtobag() {
    return (
        <div className={style.addbag}>
            <div className='container-fluid'>
                <div className={style.busketbtmn}>
                    <div className={style.wishlist}>
                        <button><i class="fa-regular fa-heart"></i></button>
                    </div>
                    <div className={style.cartbag}>
                        <button>Add to Bag</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Addtobag