import React from 'react'
import style from "./news.module.css"
import searchiconnews from "../../../images/searchiconnews.png"
import newssearchbox from "../../../images/newssearchbox.png"
function Search() {
    return (
        <div className={style.searchbox}>
            <div className='container'>
                <div className='row'>
                    <div className='col-8'>
                        <h2 className={style.breaktitle}>Breaking News</h2>
                        <p className={style.breakpara}>News for around the world</p>
                    </div>
                    <div className='col-4 text-right'>
                        <img src={newssearchbox} alt="Search Icon" className={style.searchicon}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search