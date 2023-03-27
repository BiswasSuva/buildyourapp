import React from 'react'
import Component1 from './Component1'
import Component2 from './Component2'
import Component3 from './Component3'
import Component4 from './Component4'
function Addproduct() {
    return (
        <div role="main" className="form-all">

            <ul>
                <li id="cid_18" className="form-input-wide" data-type="control_head">
                    <div className="form-header-group  header-large">
                        <div className="header-text httal htvam">
                            <h1 id="header_18" className="form-header" data-component="header">
                                Add Product
                            </h1>

                        </div>
                    </div>
                </li>
            </ul>
            <ul className="form-section page-section" style={{ height: "600px", overflowY: "auto" }}>

                <Component1 />
               
                <Component2 />

                <Component3 />
                
                <Component4/>

                

            </ul>
        </div>
    )
}

export default Addproduct