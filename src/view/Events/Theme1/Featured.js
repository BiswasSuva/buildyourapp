import React from 'react'
import style from "./events.module.css";
import eventsbg from "../../../images/eventsbg.png"
import grpimage from "../../../images/grpimage.png"
import location from "../../../images/location.png"
function Featured() {
    return (
        <div className={style.featuredsection}>
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <div className=''>
                            <h4 className={style.featuredtitle}>Featured</h4>
                            <div className={style.bannerImage}>
                                <img src={eventsbg} alt="Banner" className={style.bannerimageht} />
                                <div className='d-flex align-items-center' style={{ padding: "0 12px", marginTop: "10px" }}>
                                    <div className={style.banneritem}>
                                        <h6>2000s Hip Hop Night</h6>
                                        <p><img src={location} alt="LOcation" />Brooklyn</p>
                                    </div>
                                    <div className={style.grpimage}>
                                        <img src={grpimage} alt="Group Image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Featured