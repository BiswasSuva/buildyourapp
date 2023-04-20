import React from 'react'
import style from "./login.module.css";
function Loginform() {
    return (
        <div className={style.Registerform}>
            <div className='container'>
                <div className='row'>
                    <div className="col-12 text-center">
                        <form>
                            {/* <h1>Sign Up</h1> */}
                            <fieldset>
                                <legend>
                                    Welcome,<br/> Please Sign In
                                </legend>
                                <input type="email" id="mail" name="user_email" placeholder='Email*' />
                                <input type="password" id="password" name="user_password" placeholder='Password*' />
                                
                            </fieldset>
                            <button type="submit" className={style.btnreglog}>Sign In</button>
                        </form>
                    </div>

                    <div className="col-8">
                        <p className={style.askingac}>Don't have an account?</p>
                    </div>
                    <div className="col-4">
                        <button className={style.registerbtn}>Register</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Loginform