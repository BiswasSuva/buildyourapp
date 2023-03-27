import React from 'react'
import style from "./productdetails.module.css";
function Selectsize() {
  return (
    <div className={style.selectsize}>
        <div className='container-fluid'>
            <div className={style.sizedesc}>
                <h5>Select Size</h5>
                <div className={style.selectsize}>
                    <ul>
                        <li>7.5</li>
                        <li>8</li>
                        <li>8.5</li>
                        <li>9</li>
                        <li>9.5</li>
                        <li>10</li>
                        
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Selectsize