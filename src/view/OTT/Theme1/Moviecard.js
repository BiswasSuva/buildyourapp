import React from 'react'
import style from "./ott.module.css";
import Preview from "../../../images/Preview.png"
import verify from "../../../images/icon/verify.png"
import movielogo from "../../../images/icon/movielogo.png"
function Moviecard() {
  return (
    <div className={style.moviecard}>
        <div className='container'>
            <div className={style.maincard}>
                <div className={style.carditem}>
                    <img src={Preview} alt="" className='img-fluid'/>
                    <div className={style.livepreview}>

                    </div>
                    <p className={style.heading}>Spider-man homecoming</p>
                    <div className={style.hashtagbtns}>
                        <button>Adventure</button>
                        <button>Action</button>
                        <button>Fantasy</button>
                    </div>
                    <div className={style.moviefooter}>
                        <div className={style.leftbox}>
                            <img src={movielogo} className="img-fluid" alt="Logo"/>
                            <p className={style.hallname}>Studio Pinewood</p>
                            <img src={verify} className={style.verify} alt="Icon" />
                        </div>
                        <div className={style.rightbox}>
                            <button>Adventure</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Moviecard