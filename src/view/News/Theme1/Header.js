import React from 'react'
import style from "./news.module.css"
import newsprofile from "../../../images/newsprofile.png"
import savebtnnews from "../../../images/savebtnnews.png"
import tripledots from "../../../images/tripledots.png"
function Header() {
    return (
        <div className={style.newsheader}>
            <div className='container'>
                <div className='row'>
                    <div className='col-6'>
                        <div className='d-flex align-items-center'>
                            <img src={newsprofile} alt="Profile" className='img-fluid' />
                            <h4 className={style.title}>News</h4>
                        </div>
                    </div>
                    <div className='col-6'>
                        <div className='d-flex align-items-center justify-content-end'>
                            <button><img src={savebtnnews} alt="Save" className={style.savebtn}/></button>
                            <button><img src={tripledots} alt="Save" className={style.threedots}/></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header