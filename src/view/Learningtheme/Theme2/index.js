import React from 'react'
import style from "./learning2.module.css";
import Topheader from './Topheader';
import Courseinprogress from './Courseinprogress';
import Featured from './Featured';
import Search from './Search';
import Allfilteredcategories from './Allfilteredcategories';
function index() {
  return (
    <div className={style.scrollProblm} style={{ height: "100%", width: "100%", borderRadius: "30px" }}>
            <div className={style.ecommerce_theme} style={{ borderRadius: "30px" }}>
                <Topheader /> 
                <Search />
                <Allfilteredcategories />
                <Featured />
                <Courseinprogress />
            </div>
        </div>
  )
}

export default index