import React from 'react'
import style from "./productdetails.module.css";
import Section1 from './Section1';
import Productdescription from './Productdescription';
import Addcartbtn from './Addcartbtn';
import Swatches from './Swatches';
import Banner from './Banner';
function index() {
    return (
        <div
            className={style.scrollProblm}
            style={{ height: "100%", width: "100%", borderRadius: "30px" }}
        >
            <div
                className={style.ecommerce_theme}
                style={{ background: "#F6F8FD", borderRadius: "30px" }}
            >

            <Section1 />
            <Banner/>
            <Swatches />
            <Productdescription />
            <Addcartbtn />
            
            </div>
        </div>
    )
}

export default index