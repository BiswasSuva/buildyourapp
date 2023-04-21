import React from 'react'
import profileimagenew from "../../images/profileimagenew.png"
import style from "./social.module.css";
import savebtnhsgs from "../../images/savebtnhsgs.png"
function Search() {
    return (
        <div className={style.search}>
            <div className='container'>
                <div className='row'>
                    <div className='col-3'>
                        <img src={profileimagenew} alt="Profile" className={style.profileimage}/>
                    </div>
                    <div className='col-6' style={{paddingLeft: "0", paddingRight: "0"}}>
                        <input type="search"  className={style.searchbox} placeholder = "On your mind ?"/>
                    </div>
                    <div className='col-3'>
                    <img src={savebtnhsgs} alt="Profile" className={style.save}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search