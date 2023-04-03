import React from 'react'
import style from "./news.module.css"
function Filters() {
    return (
        <div className={style.filter}>
            <div className='container'>
                <div className='row mb-3'>
                    <div className='col-12 d-flex justify-content-between'>
                        <button>Political</button>
                        <button>Sports</button>
                        <button>Current affairs</button>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12 d-flex justify-content-between'>
                        <button>Social</button>
                        <button>National</button>
                        <button>International</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Filters