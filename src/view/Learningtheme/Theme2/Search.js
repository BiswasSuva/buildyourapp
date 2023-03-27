import React from 'react'
import style from "./learning2.module.css";
import iconsearch from "../../../images/icon/iconsearch.png"
import Filter from "../../../images/icon/Filter.png"
function Search() {
    return (
        <div className={style.searchbox}>
            <div className='container'>
                <div className={style.activecourse}>
                    {/* <i className="fa fa-search mr-2 " aria-hidden="true"/> */}
                    <img src={iconsearch} alt="" className='img-fluid'/>
                    <input className={style.search_course} type="text" name="" placeholder="Search..."/>
                    <img src={Filter} alt="" className='img-fluid'/>
                </div>
            </div>
        </div>
    )
}

export default Search