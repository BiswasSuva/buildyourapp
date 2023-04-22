import React from 'react'
import style from "./register.module.css";
import Logo from './Logo';
import netwroking from "../../images/chooseinterest/netwroking.png"
import events from "../../images/chooseinterest/events.png"
import design from "../../images/chooseinterest/design.png"
import legal from "../../images/chooseinterest/legal.png"
import content from "../../images/chooseinterest/content.png"
import marketing from "../../images/chooseinterest/marketing.png"
import leadership from "../../images/chooseinterest/leadership.png"
import culture from "../../images/chooseinterest/culture.png"
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
                                            <button><img src={netwroking} alt="Networking"/> Networking</button>
                                            <button><img src={events} alt="Networking"/>  Events</button>
                                            <button><img src={design} alt="Networking"/> Design</button>
                                            <button><img src={legal} alt="Networking"/> Legal</button>
                                            <button><img src={content} alt="Networking"/> Content</button>
                                            <button><img src={marketing} alt="Networking"/> Marketing</button>
                                            <button><img src={leadership} alt="Networking"/> Leadership</button>
                                            <button><img src={culture} alt="Networking"/> Culture</button>
                                        
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