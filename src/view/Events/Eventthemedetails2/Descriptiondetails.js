import React from 'react'
import style from "./eventdetails2.module.css";
import participantsgrp from "../../../images/participantsgrp.png"
function Description() {
    return (
            <div className={style.descriptiondetails}>
                <div className='container'>
                    <div className='row'>
                        <div className='col-6'>
                            <h6 className={style.line}>Start from</h6>
                            <p className={style.price}>$120<span>-$1,320</span></p>
                        </div>
                        <div className='col-6 text-right'>
                            <h6 className={style.line}>Participant</h6>
                            <img src={participantsgrp} alt="Group" className={style.grpimage} />
                        </div>
                    </div>
                </div>
            </div>


    )
}

export default Description