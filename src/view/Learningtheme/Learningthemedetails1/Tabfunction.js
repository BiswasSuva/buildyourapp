import React from 'react'
import style from "./learningthemedetails.module.css";
import profileimage from "../../../images/profileimage.png"
import notification from "../../../images/notification.png"
function Tabfunction() {
    return (
        <section className={style.tabfunction}>
            <div className='container-fluid'>
                <div className={style.mentorPart}>
                    <a href="#" >About</a>
                    <a href="#">Lessons</a>
                    <a href="#">Reviews</a>
                </div>

                <div className={style.namedetails}>
                        <div className={style.nameitem}>
                            <img src={profileimage} alt="" className='img-fluid'/>
                            <div className={style.namedesignation}>
                                <h1>Jonathan Williams</h1>
                                <p>Senior UI/UX Designer at Google</p>
                            </div>
                        </div>
                        <div className={style.messageicon}>
                            <img src={notification} alt="" className='img-fluid'/>
                        </div>
                </div>

                <div className={style.aboutparagraph}>
                    <h2>About Course</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
                </div>

                
            </div>
        </section>
    )
}

export default Tabfunction