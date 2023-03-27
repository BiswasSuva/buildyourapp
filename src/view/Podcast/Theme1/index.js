import React from 'react'
import style from "./podcast.module.css";
import PodcastHeader from './PodcastHeader';
import Subscription from './Subscription';
import Newupdate from './Newupdate';
import Banner from './Banner';
function index() {
  return (
    <div className={style.scrollProblm} style={{ height: "100%", width: "100%", borderRadius: "30px" }}>
      <div className={style.ecommerce_theme} style={{ background: "#F6F8FD", borderRadius: "30px" }}>
        <PodcastHeader />
        <Banner />
        <Subscription />
        <Newupdate />
      </div>
    </div>
  )
}

export default index