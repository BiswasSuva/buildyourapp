import React from 'react'
import style from "./eventdetails1.module.css";
import Header from './Header';
import Scheduledevent from './Scheduledevent';
import Follower from './Follower';
function Index() {
  return (
    <div className={style.scrollProblm} style={{ height: "100%", width: "100%", borderRadius: "30px" }}>
            <div className={style.ecommerce_theme} style={{ background: "#fff", borderRadius: "30px" }}>
                <Header/>
                <Scheduledevent/>
                <Follower/>
            </div>
        </div>
  )
}

export default Index