import React from 'react'
import Banner from './Banner';
import style from "./learningthemedetails.module.css";
import Topheader from './Topheader';
import Learningdescription from './Learningdescription';
import Materialtools from './Materialtools';
function index() {
  return (
    <div className={style.scrollProblm} style={{ height: "100%", width: "100%", borderRadius: "30px" }}>
            <div className={style.ecommerce_theme} style={{ background: "#F6F8FD", borderRadius: "30px" }}>
                   <Topheader/>
                   <Banner/>
                   <Learningdescription />
                   <Materialtools />
            </div>
        </div>
  )
}

export default index