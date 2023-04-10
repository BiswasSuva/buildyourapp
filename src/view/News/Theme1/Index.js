import React from 'react'
import style from "./news.module.css";
import Header from './Header';
import Search from './Search';
import Filters from './Filters';
import Newslists from './Newslists';
function Index() {
    return (
        <div className={style.scrollProblm} style={{ height: "100%", width: "100%", borderRadius: "30px" }}>
            <div className={style.ecommerce_theme} style={{ background: "#fff", borderRadius: "30px" }}>
                <Header/>
                <Search/>
                <Filters/>
                <Newslists/>
            </div>
        </div>
    )
}

export default Index