import React from 'react'
import style from "./register.module.css";
function Registerform() {
    return (
        <div className={style.Registerform}>
            <div className='container'>
                <div className='row'>
                    <div className="col-12 text-center">
                        <form>
                            {/* <h1>Sign Up</h1> */}
                            {/* <fieldset>
                                <legend>
                                    Register your account to get started
                                </legend>

                                <input type="text" id="fname" name="first_name" placeholder='First Name*' />
                                <input type="text" id="lname" name="last_name" placeholder='Last Name*' />
                                <input type="email" id="mail" name="user_email" placeholder='Email*' />
                                <input type="text" id="referaal" name="referaal_code" placeholder='Refferral Code (Optinal)' />
                                <input type="password" id="password" name="user_password" placeholder='Password*' />
                                <input type="password" id="password" name="confirm_password" placeholder='Confirm Password*' />
                            </fieldset>
                            <button type="submit" className={style.btnreglog}>Save & Next</button> */}


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
                            <button type="submit" className={style.skip}>Skip</button>

                            {/* Third Steps */}
                            {/* <div className="form-group">
                                <label className={style.formlabel}>
                                    <i class="fa-sharp fa-solid fa-upload" style={{ color: "#4bc970", width: "100%", textAlign: 'center' }}></i>
                                    Choose an image
                                    <input type="file" className="form-control" id="uploadFile" />
                                </label>
                                <p style={{color: "#14181b", fontSize: "14px"}}>In order to have a secure platform we need to be 100% sure that it's you</p>
                                <button type="submit" className={style.btnreglog}>Save & Next</button>
                            </div> */}

                            {/* Fourth Steps */}

                            {/* <fieldset>
                                <legend>
                                    Choose your interest
                                </legend>
                                <div className={style.chooseinterest}>
                                    <button><i class="fa-solid fa-cart-shopping" style={{fontSize: "14px", color: "#14181b"}}></i> E-Commerce</button>
                                    <button><i class="fa-solid fa-play" style={{fontSize: "14px", color: "#14181b"}}></i>  OTT</button>
                                    <button><i class="fa-solid fa-headphones" style={{fontSize: "14px", color: "#14181b"}}></i> Podcast</button>
                                    <button><i class="fa-solid fa-chalkboard" style={{fontSize: "14px", color: "#14181b"}}></i> Learning</button>
                                </div>
                                <button type="submit" className={style.btnreglog}>Start your journey</button>
                                <button type="submit" className={style.skip}>Skip</button>
                            </fieldset> */}

                        </form>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Registerform