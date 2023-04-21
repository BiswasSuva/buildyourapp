import React from 'react'
import style from "./register.module.css";
import Logo from './Logo';
function Chooseinterest() {
    return (

        <div className={style.scrollProblm} style={{ height: "100%", width: "100%", borderRadius: "30px" }}>
            <div className={style.ecommerce_theme} style={{ background: "#f4f7f8", borderRadius: "30px", padding: "10px 15px", height: "100%" }}>
                <Logo />
                <div className={style.Registerform}>
                    <div className='container'>
                        <div className='row'>
                            <div className="col-12 text-center">
                                <form>

                                    <fieldset>
                                        <legend>
                                            Pick your interest
                                        </legend>
                                        <p className={style.txtinfo}>Select your interest so that we can tailor a great chrissalem app experiance</p>
                                        <div className={style.chooseinterest}>
                                            <button><i class="fa-solid fa-circle-nodes" style={{ fontSize: "14px", color: "#14181b", width: "100%" }}></i> Networking</button>
                                            <button><i class="fa-regular fa-calendar"  style={{ fontSize: "14px", color: "#14181b", width: "100%" }}></i>  Events</button>
                                            <button><i class="fa-solid fa-brush" style={{ fontSize: "14px", color: "#14181b", width: "100%" }}></i> Design</button>
                                            <button><i class="fa-solid fa-scale-unbalanced-flip" style={{ fontSize: "14px", color: "#14181b", width: "100%" }}></i> Legal</button>
                                            <button><i class="fa-solid fa-arrows-to-circle" style={{ fontSize: "14px", color: "#14181b", width: "100%" }}></i> Content</button>
                                            <button><i class="fa-solid fa-bullhorn" style={{ fontSize: "14px", color: "#14181b", width: "100%" }}></i> Marketing</button>
                                            <button><i class="fa-solid fa-person-circle-xmark" style={{ fontSize: "14px", color: "#14181b", width: "100%" }}></i> Leadership</button>
                                            <button><i class="fa-solid fa-people-carry-box" style={{ fontSize: "14px", color: "#14181b", width: "100%" }}></i> Culture</button>
                                        
                                        </div>
                                        <button type="submit" className={style.btnreglog}>Start your journey</button>
                                        <button type="submit" className={style.skip}>Skip</button>
                                    </fieldset>


                                </form>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div >
    )
}

export default Chooseinterest