import React from 'react'
import style from "./podcast2.module.css";
function Playaudio() {
  return (
    <div className={style.playaudio}>
        <div className={style.audioitem}>
            <h2>Wasted Nights</h2>
            <p>ONE OK ROCK</p>
        </div>
        <div className={style.playbtn}>
            <i className="fa fa-play"></i>
        </div>
    </div>
  )
}

export default Playaudio