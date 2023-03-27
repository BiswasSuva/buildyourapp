import React from 'react'
import style from "./productdetails.module.css";
import logotitlecrack from "../../../images/logotitlecrack.png"
function Productdescription() {
  return (
    <div className={style.cartsection}>
        <div className='container-fluid'>
            <div className={style.description}>
                <img src={logotitlecrack} alt="" className='img-fluid' style={{maxWidth
                : "100px"}}/>
                <h3 className={style.producttitle}>Basketball Shoes</h3>
                <h5 className={style.productprice}>$50.90</h5>
                <p className={style.descriptionproduct}>Kevin Durant tried to stay on the wing, waiting for the right moment to attack before cutting across the defence. The KD14 is designed to help non-stop, versatile players like KD feel fresh in all their games. Multi-layer mesh and midfoot strap help you reduce foot movement inside the shoe. Full-length Zoom Air cushioning plus Cushlon cushioning help deliver energy back for long-lasting performance.</p>
                    <ul>
                        <li>Suitable without distraction</li>
                        <li>Inner strap</li>
                        <li>Optimum response sensor</li>
                    </ul>
            </div>
        </div>
    </div>
  )
}

export default Productdescription