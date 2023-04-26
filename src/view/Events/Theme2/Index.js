import React from 'react'
import style from "./event2.module.css";
import Header from './Header';
import Banner from './Banner';
import Bestforyou from './Bestforyou';
function Index() {
    return (
        <div className={style.scrollProblm} style={{ height: "100%", width: "100%", borderRadius: "30px" }}>
            <div className={style.ecommerce_theme} style={{ background: "#FFEDEA", borderRadius: "30px", height: "100%" }}>
                <Header/>
                <Banner/>
                <Bestforyou/>
            </div>
        </div>
    )
}

export default Index
