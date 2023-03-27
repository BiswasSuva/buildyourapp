import React from 'react'
import style from "./podcast2.module.css";
import Podacstheader from './Podacstheader';
import Recentlyplayed from './Recentlyplayed';
import Yourfavourite from './Yourfavourite';
import Madeforyou from './Madeforyou';
import Playaudio from './Playaudio';
function index() {
  return (
    <div className={style.scrollProblm} style={{ height: "100%", width: "100%", borderRadius: "30px" }}>
      <div className={style.ecommerce_theme} style={{ background: "#F6F8FD", borderRadius: "30px" }}>
           <Podacstheader />
           <Recentlyplayed />
           <Yourfavourite />
           <Madeforyou />
           <Playaudio />
       
      </div>
    </div>
  )
}

export default index