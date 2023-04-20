import React from 'react'
import style from "./events.module.css";
import Header from './Header';
import Featured from './Featured';
import Populareventstitle from './Populareventstitle';
import Eventsitem from './Eventsitem';
function Index() {
    return (
        <div className={style.scrollProblm} style={{ height: "100%", width: "100%", borderRadius: "30px" }}>
            <div className={style.ecommerce_theme} style={{ background: "#fff", borderRadius: "30px" }}>
               <Header/>
               <Featured/>
               <Populareventstitle/>
               <Eventsitem/>
            </div>
        </div>
    )
}

export default Index
