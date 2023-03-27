import React from 'react'
import style from "./learningthemedetails.module.css";
function Topheader() {
  return (
        <div className={style.topheader}>
            <div className="container-fluid">
                <div className={style.topsection}>
                    <div className={style.arrowlefticon}>
                        <button><i class="fa-solid fa-arrow-left-long"></i></button>
                    </div>
                    <div className={style.titlename}>
                        <h1>Play Course</h1>
                    </div>
                    <div className={style.blnak}>
                    
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Topheader