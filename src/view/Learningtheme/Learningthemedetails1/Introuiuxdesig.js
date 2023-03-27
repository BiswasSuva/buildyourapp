import React from 'react'
import style from "./learningthemedetails.module.css";
import savebtn from "../../../images/savebtn.png"
import starfa from "../../../images/starfa.png"
function Introuiuxdesig() {
  return (
    <section className={style.introuiux}>
      <div className='container-fluid'>
        <div className={style.ui}>
          <div className='row'>
            <div className='col-9'>
              <h1 className={style.titile}>Intro to UI/UX Design</h1>
            </div>
            <div className='col-3'>
              <div className={style.saveebtn}>
                <img src={savebtn} alt="Save Button" className='img-fluid' />
              </div>
            </div>
          </div>

          <div className='row mt-3 mb-3'>
            <div className='col-5'>
              <button className={style.btnuiux}>UI/UX Design</button>
            </div>
            <div className='col-7'>
              <p className={style.rating}><img src={starfa} alt="" className='img-fluid' />4.8 (4,479 reviews)</p>
            </div>
          </div>

          <div className='row'>
            <div className='col-12'>
              <p className={style.price}>$40<span>$75</span></p>
            </div>
          </div>


          <div className='row'>
            <div className='col-12'>
              <div className={style.txtbox}>
                <p>9,839 Students</p>
                <p>2,5 Hours</p>
                <p>Certificate</p>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  )
}

export default Introuiuxdesig