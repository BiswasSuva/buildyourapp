import React from 'react'
import style from "./register.module.css";
import Logo from './Logo';
function Generalinfo() {
    return (

        <div className={style.scrollProblm} style={{ height: "100%", width: "100%", borderRadius: "30px" }}>
            <div className={style.ecommerce_theme} style={{ background: "#f4f7f8", borderRadius: "30px", padding: "10px 15px", height: "100%" }}>
            <Logo/>
                <div className={style.Registerform}>
                    <div className='container'>
                        <div className='row'>
                            <div className="col-12 text-center">
                                <form>

                                    {/* Second Steps */}
                                    <fieldset>
                                        <legend>
                                            General Info:
                                        </legend>

                                        <input type="text" id="contactN" name="contactN" placeholder='Contact Number' />

                                        <input type="text" id="country" name="country" placeholder='Country' />

                                        <input type="text" id="city" name="city" placeholder='City' />

                                        <input type="textarea" id="about" name="about" placeholder='About Me' />


                                    </fieldset>
                                    <button type="submit" className={style.btnreglog}>Save & Next</button>
                                    {/* <button type="submit" className={style.skip}>Skip</button> */}


                                </form>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div >
    )
}

export default Generalinfo