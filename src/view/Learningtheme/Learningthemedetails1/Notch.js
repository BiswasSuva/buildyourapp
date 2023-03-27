import React from 'react'
import style from "./learningthemedetails.module.css";
function Notch() {
    return (
        <div className={style.notch}>
            <div className={style.notchwrap}>
                <div className={style.notchleft}>
                    <p className={style.time}>19.27</p>
                </div>
                <div className={style.notchright}>
                    <span className={style.notchrighticon}>
                        <i className="fa-solid fa-signal" />
                    </span>
                    <span className={style.notchrighticon}>
                        <i className="fa-solid fa-wifi" />
                    </span>
                    <span className={style.notchrighticon}>
                        <i className="fa-solid fa-battery-full" />
                    </span>
                </div>
            </div>
        </div>

    )
}

export default Notch