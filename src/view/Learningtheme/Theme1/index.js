import React from 'react'
import Section1 from './Section1'
import Search from './Search'
import Banner from './Banner';
import Topmentors from './Topmentors';
import Popularcourse from './Popularcourse';
import style from "./learning.module.css";

function index() {
    return (
        <div className={style.scrollProblm} style={{ height: "100%", width: "100%", borderRadius: "30px" }}>
            <div className={style.ecommerce_theme} style={{ background: "#F6F8FD", borderRadius: "30px" }}>
                    <Section1/>
                    <Search/>
                    <Banner/>
                    <Topmentors/>
                    <Popularcourse/>
            </div>
        </div>
    )
}

export default index