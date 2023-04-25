import React from 'react'
import style from "./eventdetails2.module.css";
import Header from './Header';
import Description from "../../Events/Eventthemedetails2/Descriptiondetails"
import Follow from './Follow';
import Paragraph from "../../Events/Eventthemedetails2/Para"
import Buyticketsbtn from './Buyticketsbtn';
function Index() {
    return (
        <div className={style.scrollProblm} style={{ height: "100%", width: "100%", borderRadius: "30px" }}>
            <div className={style.ecommerce_theme} style={{ background: "#FFEDEA", borderRadius: "30px", height: "100vh" }}>
               <Header/>
               <Description/>
               <Follow/>
               <Paragraph/>
               <Buyticketsbtn/>
            </div>
        </div>
    )
}

export default Index
