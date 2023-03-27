import React from 'react'
import style from "./productdetails.module.css";
function Selectcolor() {
  return (
    <div className={style.selectsize}>
      <div className='container-fluid'>
        <div className={style.selectcolor}>
          <h3>Select Color</h3>
          <ul>
            <li style={{ background: "#E74C3C" }}></li>
            <li style={{ background: "#2ECC71" }}></li>
            <li style={{ background: "#E0085FF" }}></li>
            <li style={{ background: "#FEA628" }}></li>
            <li style={{ background: "#523E53" }}></li>
          </ul>

          <div className={style.dropdown}>

            <div className='form-group'>
              <select className="form-control" id=''>
                <option>Size & Fit</option>
                <option>test</option>
                <option>test</option>
                <option>test</option>
                <option>test</option>
              </select>
            </div>

            <div className='form-field'>
              <div className='form-group'>
                <select className="form-control" id=''>
                  <option>Review (12)</option>
                  <option>test</option>
                  <option>test</option>
                  <option>test</option>
                  <option>test</option>
                  <div className='star-icon'>
                  <i class="fa-solid fa-star"></i>
                  </div>
                </select>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Selectcolor