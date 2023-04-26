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
                            <fieldset>
                                <legend>
                                    Register your account to get started
                                </legend>

                                <input type="text" id="fname" name="first_name" placeholder='First Name*' disabled/>
                                <input type="text" id="lname" name="last_name" placeholder='Last Name*' disabled/>
                                <input type="email" id="mail" name="user_email" placeholder='Email*' disabled/>
                                <input type="text" id="referaal" name="referaal_code" placeholder='Refferral Code (Optinal)' disabled/>
                                <input type="password" id="password" name="user_password" placeholder='Password*' disabled/>
                                <input type="password" id="password" name="confirm_password" placeholder='Confirm Password*' disabled/>
                            </fieldset>
                            <button type="submit" className={style.btnreglog}>Save & Next</button>

                        </form>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Registerform