import React from 'react'
import Banner from './Banner'
import Introuiuxdesig from './Introuiuxdesig';
import style from "./learningthemedetails.module.css";
import Notch from './Notch';
import Tabfunction from './Tabfunction';
import Tools from './Tools';
function index() {
    return (
        <div className={style.scrollProblm} style={{ height: "100%", width: "100%", borderRadius: "30px" }}>
            <div className={style.ecommerce_theme} style={{ background: "#F6F8FD", borderRadius: "30px" }}>
                <Notch/>
                <Banner/>
                <Introuiuxdesig/>
                <Tabfunction/>
                <Tools/>
            </div>
        </div>
    )
}

export default index