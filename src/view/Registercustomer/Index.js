import React from 'react'
import style from "./register.module.css";
import Logo from './Logo';
import Registerform from './Registerform';

function Index() {
    return (
        <div className={style.scrollProblm} style={{ height: "100%", width: "100%", borderRadius: "30px" }}>
            <div className={style.ecommerce_theme} style={{ background: "#f4f7f8", borderRadius: "30px", padding: "10px 15px", height: "100%" }}>
                <Logo/>
                <Registerform/>
            </div>
        </div>
    )
}

export default Index