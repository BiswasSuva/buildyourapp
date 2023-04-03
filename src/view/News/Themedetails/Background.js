import React from 'react'
import style from "./newsthemedetails.module.css";
import newsbg from "../../../images/newsbg.png"
import backbtnnews from "../../../images/backbtnnews.png"
import sharebtn from "../../../images/carbon_share.png"
import savebtnnewsdetails from "../../../images/savebtnnewsdetails.png"
function Background() {
    return (
        <div className={style.bgnews} style={{ backgroundImage: `url(${newsbg})` }}>
            <div className={style.overlay}></div>
            <div className='container'>
                <div className='row pt-3 pb-3'>
                    <div className='col-6'>
                        <button><img src={backbtnnews} alt="Back"/></button>
                    </div>
                    <div className='col-6 d-flex justify-content-end'>
                        <button><img src={sharebtn} alt="Share" className={style.sharebtn}/></button>
                        <button><img src={savebtnnewsdetails} alt="Save" className={style.save}/></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Background