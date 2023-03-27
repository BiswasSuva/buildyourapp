import React from 'react'
import changethis from "../../images/changethis.png"
function Mainmobile({children}) {
    return (
        <div className='mainMobile'>
            <div className="iphone">
                {/* <div className="screen" /> */}
                    {children}
                
                <div className="notch" />
            </div>

        </div>
    )
}

export default Mainmobile