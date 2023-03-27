import React from 'react'
import style from "./ott2.module.css";
import Trendingnow from './Trendingnow';
import Latestshow from './Latestshow';
import Recentviewed from './Recentviewed';
import Ottbanner from './Ottbanner';
function index() {
  return (
    <div className={style.scrollProblm} style={{ height: "100%", width: "100%", borderRadius: "30px" }}>
      <div className={style.ecommerce_theme} style={{ background: "#F6F8FD", borderRadius: "30px" }}>
            <Ottbanner />
            <Trendingnow />
            <Latestshow />
            <Recentviewed />
      </div>
    </div>
  )
}

export default index