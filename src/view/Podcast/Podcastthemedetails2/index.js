import React from 'react'
import Banner from './Banner';
import Player from './Player';

import style from "./podcastthemedetails2.module.css";
import Topheader from './Topheader'
function index() {
    return (
        <div className={style.scrollProblm} style={{ height: "100%", width: "100%", borderRadius: "30px" }}>
            <div className={style.ecommerce_theme} style={{ background: "#F6F8FD", borderRadius: "30px" }}>
                    <Topheader />
                    
                    <Banner/>
                    
                    <Player/>
            </div>
        </div>
    )
}

export default index         