import React from 'react'
import style from "./productdetails.module.css";
import Productdescription from './Productdescription';
import Selectsize from './Selectsize';
import Selectcolor from './Selectcolor';
import Relatedproducts from './Relatedproducts';
import Addtobag from './Addtobag';
import Banner from './Banner';
import Topheader from './Topheader';
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
                <Topheader/>
                <Banner />

                <div className={style.allsections}>
                    <Productdescription />
                    <Selectsize />
                    <Selectcolor />
                    <Relatedproducts />
                    <Addtobag />
                </div>

            </div>
        </div>
    )
}

export default index