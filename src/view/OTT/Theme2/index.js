import React from 'react'
import style from "./ott2.module.css";
import Trendingnow from './Trendingnow';
import Latestshow from './Latestshow';
import Recentviewed from './Recentviewed';
import Ottbanner from './Ottbanner';
function index({elementList = []}) {
  return (
    <div className={style.scrollProblm} style={{ height: "100%", width: "100%", borderRadius: "30px" }}>
      <div className={style.ecommerce_theme} style={{ background: "#F6F8FD", borderRadius: "30px" }}>
          
          
          
            <Ottbanner />

            {elementList.map((item)=>{
              if(item.elementTypeName.title === "Ott Black Theme Section 1") return <Trendingnow  feild={item.elementTypeName.field} />
              if(item.elementTypeName.title === "Ott Black Theme Section 2") return  <Latestshow  feild={item.elementTypeName.field}/>
              if(item.elementTypeName.title === "Ott Black Theme Section 3") return  <Recentviewed  feild={item.elementTypeName.field} />

            })}
           
           
           
      </div>
    </div>
  )
}

export default index