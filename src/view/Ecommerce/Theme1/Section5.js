import React from 'react'
import style from "./ecommerce.module.css"
import { Link } from 'react-router-dom'
import fourthperson from "../../../assets/images/ThemeImages/fourthperson.png"
import firstperrson from "../../../assets/images/ThemeImages/firstperrson.png"
import seconfperson from "../../../assets/images/ThemeImages/seconfperson.png"
import thirdperson from "../../../assets/images/ThemeImages/thirdperson.png"
import plus from '../../../assets/images/ThemeImages/plus.png';
import useEcomProduct from '../../../customHooks/useEcomProduct'
function Section5({ fetch, feild = [] }) {
  let coloumn = feild.find((item) => item.key == "Number of coloumns")?.value
  let cartIcon = feild.find((item) => item.key == "Enabled Cart Icon")?.value
  let ratingShow = feild.find((item) => item.key == "Rating Show")?.value

  const products = useEcomProduct({ refetch: fetch })
  console.log("products", products);

  if (products.length > 0) {
    return (
      <div className={style.productlist}>
        <div className='container-fluid'>
          <Link to="">
            <div className={style.productmain} style={{ flexDirection: coloumn && coloumn == 1 ? "column" : "row" }}>
              {products.map((item) => {
                return <div className={style.productitem} key={item._id}>
                  <div className='position-relative'>
                    <div className={style.secondPersonImg}>
                      <img src={item.image[0]} alt="Product" className='img-fluid' />
                    </div>
                    <div className={style.productaddBTn}>
                      {cartIcon == "yes" && <div className={style.productaddBTnInner}>
                        <img src={plus} className={`img-fluid ${style.image}`} />
                      </div>}
                    </div>
                  </div>
                  <div className={style.productdescription}>
                    <h4>{item.productName}</h4>
                    <div className={style.productbottom}>
                      <div className={style.price}>
                        <p>${item.sellPrice}</p>
                      </div>
                      {ratingShow == "yes" && <div className={style.review}>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                      </div>}
                    </div>
                  </div>

                </div>
              })}


            </div>
          </Link>
        </div>
      </div>
    )
  }
  else {
    return <div className={style.productlist}>
      <div className='container-fluid'>
        <div className={style.productmain} style={{ flexDirection: coloumn && coloumn == 1 ? "column" : "row" }}>

          <div className={style.productitem}>
            <div className='position-relative'>
              <div className={style.secondPersonImg}>
                <img src={thirdperson} alt="Product" className='img-fluid' />
              </div>
              <div className={style.productaddBTn}>
                {cartIcon == "yes" && <div className={style.productaddBTnInner}>
                  <img src={plus} className={`img-fluid ${style.image}`} />
                </div>}
              </div>
            </div>
            <div className={style.productdescription}>
              <h4>Oversize Tshirt Baby Blue</h4>
              <div className={style.productbottom}>
                <div className={style.price}>
                  <p>$15</p>
                </div>
                <div className={style.review}>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
              </div>
            </div>

          </div>
          <div className={style.productitem}>
            <div className='position-relative'>
              <div className={style.secondPersonImg}>
                <img src={thirdperson} alt="Product" className='img-fluid' />
              </div>
              <div className={style.productaddBTn}>
                {cartIcon == "yes" && <div className={style.productaddBTnInner}>
                  <img src={plus} className={`img-fluid ${style.image}`} />
                </div>}
              </div>
            </div>
            <div className={style.productdescription}>
              <h4>Oversize Tshirt Baby Blue</h4>
              <div className={style.productbottom}>
                <div className={style.price}>
                  <p>$15</p>
                </div>
                <div className={style.review}>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
              </div>
            </div>

          </div>
          <div className={style.productitem}>
            <div className='position-relative'>
              <div className={style.secondPersonImg}>
                <img src={firstperrson} alt="Product" className='img-fluid' />
              </div>
              <div className={style.productaddBTn}>
                {cartIcon == "yes" && <div className={style.productaddBTnInner}>
                  <img src={plus} className={`img-fluid ${style.image}`} />
                </div>}
              </div>
            </div>
            <div className={style.productdescription}>
              <h4>Oversize Tshirt Baby Blue</h4>
              <div className={style.productbottom}>
                <div className={style.price}>
                  <p>$15</p>
                </div>
                <div className={style.review}>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
              </div>
            </div>

          </div>
          <div className={style.productitem}>
            <div className='position-relative'>
              <div className={style.secondPersonImg}>
                <img src={seconfperson} alt="Product" className='img-fluid' />
              </div>
              <div className={style.productaddBTn}>
                {cartIcon == "yes" && <div className={style.productaddBTnInner}>
                  <img src={plus} className={`img-fluid ${style.image}`} />
                </div>}
              </div>
            </div>
            <div className={style.productdescription}>
              <h4>Oversize Tshirt Baby Blue</h4>
              <div className={style.productbottom}>
                <div className={style.price}>
                  <p>$15</p>
                </div>
                <div className={style.review}>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  }

}

export default Section5