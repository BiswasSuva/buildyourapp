import React from 'react'
import ottprofile from "../../../images/ottprofile.png"
import bxmessage from "../../../images/icon/bx-message-square-dots.png"
import Vector from "../../../images/icon/Vector.png"
import style from "./learning2.module.css"
function Topheader() {
  return (
    <div className={style.ecommerceheader}>
        <div className='container'>
            <div className='row'>
                <div className='col-8' >
                    <div className='row' style={{paddingLeft: "5px", alignItems: "center"}}>
                        <div className={style.profileimg}>
                            <img src={ottprofile} className="img-fluid" alt=""/>
                        </div>
                        <div className={style.profilename}>
                            <p className={style.gmtitle}>Hi, Andy</p>
                            <p className={style.gmdesc}>Just a study lover</p>
                        </div>
                    </div>
                </div>
                <div className='col-4'>
                    <div className={style.socialIcons}>
                        <img src={Vector} className="img-fluid" alt=""/>
                        <img src={bxmessage} className="img-fluid" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Topheader