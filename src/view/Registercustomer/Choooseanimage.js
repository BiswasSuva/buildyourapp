import React from 'react'
import style from "./register.module.css";
import Logo from './Logo';
function Chooseimage() {
    return (

        <div className={style.scrollProblm} style={{ height: "100%", width: "100%", borderRadius: "30px" }}>
            <div className={style.ecommerce_theme} style={{ background: "#f4f7f8", borderRadius: "30px", padding: "10px 15px", height: "100%" }}>
                <Logo />
                <div className={style.Registerform}>
                    <div className='container'>
                        <div className='row'>
                            <div className="col-12 text-center">
                                <form>
                                    <div className="form-group">
                                        <label className={style.formlabel}>
                                            <i class="fa-sharp fa-solid fa-upload" style={{ color: "#312450", width: "100%", textAlign: 'center' }}></i>
                                            Choose an image
                                            <input type="file" className="form-control" id="uploadFile" disabled/>
                                        </label>
                                        <p style={{ color: "#14181b", fontSize: "14px" }}>In order to have a secure platform we need to be 100% sure that it's you</p>
                                        <button type="submit" className={style.btnreglog}>Save & Next</button>
                                    </div>

                                </form>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div >
    )
}

export default Chooseimage