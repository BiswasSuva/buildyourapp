import React from 'react'
import style from "./podcast.module.css";
import PodcastHeader from './PodcastHeader';
import Subscription from './Subscription';
import Newupdate from './Newupdate';
import Banner from './Banner';
function index({elementList=[]}) {
  return (
    <div className={style.scrollProblm} style={{ height: "100%", width: "100%", borderRadius: "30px" }}>
      <div className={style.ecommerce_theme} style={{ background: "#F6F8FD", borderRadius: "30px" }}>


      {elementList.map((item)=>{
              if(item.elementTypeName.title === "Podcast Hero Header") return <PodcastHeader  feild={item.elementTypeName.field} />
              if(item.elementTypeName.title === "Podcast Hero Banner") return  <Banner  feild={item.elementTypeName.field}/>
              if(item.elementTypeName.title === "Podcast Hero Categories List") return  <Subscription  feild={item.elementTypeName.field} />
              if(item.elementTypeName.title === "Podcast Hero List") return  <Newupdate  feild={item.elementTypeName.field} />

            })}
           
        {/* <PodcastHeader />
        <Banner />
        <Subscription />
        <Newupdate /> */}
      </div>
    </div>
  )
}

export default index