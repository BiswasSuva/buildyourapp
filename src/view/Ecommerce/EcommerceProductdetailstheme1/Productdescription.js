import React from 'react'
import style from "./productdetails.module.css";
function Productdescription() {
    return (
        <div className={style.productdescription} style={{margin: "10px 0", padding: "8px 0"}}>
            <div className='container-fluid'>
                <div className={style.description}>
                    <h2>Description</h2>
                    <p>Men's oversized T-shirt in durable material. Perfect for casual style. With 100% Cotton, Machine wash in cold water, some 
                        product colors may not be available.</p>
                    <p>- Suitable to be worn alone or layered.</p>   
                    <p>- Modern oversized cut.</p>
                    <p>- Casual wide striped motif.</p>
                    <p>Please note that these products may have different product IDs.</p>
                </div>
            </div>
        </div>
    )
}

export default Productdescription