import React from 'react'
import style from "./news.module.css"
import searchiconnews from "../../../images/searchiconnews.png"
function Search() {
    return (
        <div className={style.searchbox}>
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <div className="main">
                            <div className={style.hassearch} style={{marginBottom: "1rem"}}>
                                <img src={searchiconnews} alt="Search Icon" className={style.formcontrolfeedback}/>
                                <input type="text" className="form-control" placeholder="Search  Topicks" style={{paddingLeft: "2.5rem", height: "49px", borderRadius: "10px", border: "1px solid rgba(0, 0, 0, 0.38)"}}/>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search