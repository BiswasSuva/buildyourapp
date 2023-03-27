import React from 'react'
import style from "./learningthemedetails.module.css";
function Learningdescription() {
  return (
    <div className={style.learndesc}>
        <div className="container">
            <div className={style.paradetails}>
                <h3>UI Design</h3>
                <h1>Get to know the use of components for beginners</h1>
            </div>
            <div className={style.description}>
                <div className={style.btns}>
                    <button style={{background: "#528F65", marginRight: "10px"}}>Description</button>
                    <button style={{background: "#FEFEFE", color: "#9CA4AB", border: "1px solid #E9EBED", borderRadius: "16px"}}>Comment</button>
                </div>

                <h1 className={style.title}>Description</h1>
                <p className={style.paratxt}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type.</p>
                

            </div>
        </div>
    </div>
  )
}

export default Learningdescription