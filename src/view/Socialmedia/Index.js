import React from 'react'
import style from "./social.module.css";
import Header from './Header';
import Search from './Search';
import Card from './Card';
function Index() {
  return (
    <div className={style.scrollProblm} style={{ height: "100%", width: "100%", borderRadius: "30px" }}>
            <div className={style.ecommerce_theme} style={{ background: "#fff", borderRadius: "30px", height: "100%" }}>
               <Header/>
               <Search/>
               <Card/>
            </div>
        </div>
  )
}

export default Index