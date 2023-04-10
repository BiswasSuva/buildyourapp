import React from 'react'
import style from "./newsthemedetails.module.css";
import Background from './Background';
import Newsarticle from './Newsarticle';
function Index() {
    return (
        <div className={style.scrollProblm} style={{ height: "100%", width: "100%", borderRadius: "30px" }}>
            <div className={style.ecommerce_theme} style={{ background: "#fff", borderRadius: "30px" }}>
                <Background/>
                <Newsarticle/>
            </div>
        </div>
    )
}

export default Index