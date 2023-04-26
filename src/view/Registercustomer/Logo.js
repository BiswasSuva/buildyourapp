import React from 'react'
import style from "./register.module.css";
import Logoimage from "../../images/Logo.png"
function Logo() {
    return (
        <div className={style.logoarea}>
            <div className='container'>
                <div className='row'>
                    <div className="col-12 text-center">
                        <img src={Logoimage} className={style.logo} alt="Logo"/>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Logo