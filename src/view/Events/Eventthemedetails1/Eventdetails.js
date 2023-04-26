import React from 'react'
import style from "./eventdetails1.module.css";
import detailsmap from "../../../images/detailsmap.png"
function Eventdetails() {
    return (
        <div className={style.follower}>
            <div className='container'>
                <div className="col-12">
                    <p className={style.paradetails}>Morbi tincidunt pulvinar fames aliquam etiam quis volutpat id purus. Dui nec eu tortor interdum ultricies viverra feugiat tristique a</p>
                    <img src={detailsmap} alt="Map" className={style.mapimage}/>
                    <button className={style.buybtn}>Buy Ticket $90</button>
                </div>
            </div>
        </div>
    )
}

export default Eventdetails