import React from 'react'
import style from "./productdetails.module.css";
import ess from "../../../images/ess.png"
import four from "../../../images/4.png"
import five from "../../../images/5.png"
import six from "../../../images/6.png"
import seven from "../../../images/7.png"
import eight from "../../../images/8.png"
function Banner() {
    return (
        <div className={style.banner}>
            <div className="container-fluid">
                <div className={style.bannerItem}>
                    <div className={style.bannerImage}>
                        <img src={ess} alt="Banner" className='img-fluid' />
                        <div className={style.thumbnailimages}>
                            <ul>
                                <li><img src={four} alt="" className='img-fluid'/></li>
                                <li><img src={five} alt="" className='img-fluid'/></li>
                                <li><img src={six} alt="" className='img-fluid'/></li>
                                <li><img src={seven} alt="" className='img-fluid'/></li>
                                <li><img src={eight} alt="" className='img-fluid'/></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner