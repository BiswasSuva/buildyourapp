import React from 'react'
import style from "./events.module.css";
function Populareventstitle() {
    return (
        <div className={style.populareventstitle}>
            <div className='container'>
                <div className='row'>
                    <div className='col-8'>
                        <h1 className={style.populartitle}>Popular Events</h1>
                    </div>
                    <div className='col-4'>
                        <a className={style.viewmore}>View more</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Populareventstitle