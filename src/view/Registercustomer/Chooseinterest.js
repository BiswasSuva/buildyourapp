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
                                            Choose your interest
                                        </legend>
                                        <div className={style.chooseinterest}>
                                            <button><i class="fa-solid fa-cart-shopping" style={{ fontSize: "14px", color: "#14181b" }}></i> E-Commerce</button>
                                            <button><i class="fa-solid fa-play" style={{ fontSize: "14px", color: "#14181b" }}></i>  OTT</button>
                                            <button><i class="fa-solid fa-headphones" style={{ fontSize: "14px", color: "#14181b" }}></i> Podcast</button>
                                            <button><i class="fa-solid fa-chalkboard" style={{ fontSize: "14px", color: "#14181b" }}></i> Learning</button>
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