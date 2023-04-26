import React, { useEffect, useState } from 'react'
import style from "./ecommerce.module.css"
import { Link } from 'react-router-dom'
import fourthperson from "../../../assets/images/ThemeImages/fourthperson.png"
import firstperrson from "../../../assets/images/ThemeImages/firstperrson.png"
import seconfperson from "../../../assets/images/ThemeImages/seconfperson.png"
import thirdperson from "../../../assets/images/ThemeImages/thirdperson.png"
import plus from '../../../assets/images/ThemeImages/plus.png';
import useEcomProduct from '../../../customHooks/useEcomProduct'
import { useElementList } from '../../../Providers/ElemetProvider'
import { getEcomProduct } from '../../../api/appApi'


const DUMMY_PRODUCT = [
  {
    productName:"Oversize Tshirt Baby Blue",
    image:[firstperrson],
    sellPrice:52
  },
  {
    productName:"Oversize Tshirt Baby Blue",
    image:[firstperrson],
    sellPrice:52

  },  {
    productName:"Oversize Tshirt Baby Blue",
    image:[seconfperson],
    sellPrice:52

  },  {
    productName:"Oversize Tshirt Baby Blue",
    image:[thirdperson],
    sellPrice:52

  }, 

]








function Section5({ fetch, feild = [] }) {
  const {rerender,setRender} = useElementList()

  const [products,setProducts] = useState(DUMMY_PRODUCT)
  let coloumn = feild.find((item) => item.key == "Number of coloumns")?.value
  let cartIcon = feild.find((item) => item.key == "Cart Button Show")?.value
  let cartcolor = feild.find((item) => item.key == "Cart Button Color")?.value
  let ratingShow = feild.find((item) => item.key == "Rating Show")?.value
  let TitleFontSize = feild.find((item) => item.key == "Title Font Size")?.value
  let TitleFontColor = feild.find((item) => item.key == "Title Font Color")?.value

  useEffect(()=>{
fetchProduct()
  },[rerender])

  const fetchProduct = async()=>{
    // alert("lala")
    let result  = await getEcomProduct()
    if(result && result.status && result.data?.length>0){
      setProducts(result.data)
    }
    else{
      setProducts(DUMMY_PRODUCT)
    }
  }


  // const products = useEcomProduct({ refetch: fetch })
  console.log("products", products);

    return (
      <div className={style.productlist}>
        <div className='container-fluid'>
          <Link to="">
            <div className={style.productmain} style={{ flexDirection: coloumn && coloumn == 1 ? "column" : "row" }}>
              {products.map((item,i) => {
                return <div className={style.productitem} key={i}>
                  <div className='position-relative'>
                    <div className={style.secondPersonImg}>
                      <img src={item.image[0]} alt="Product" className='img-fluid' />
                    </div>
                    <div className={style.productaddBTn}>
                      {cartIcon == "yes" && <div className={style.productaddBTnInner} style={{background:cartcolor}}>
                        <img src={plus} className={`img-fluid ${style.image}`} />
                      </div>}
                    </div>
                  </div>
                  <div className={style.productdescription}>
                    <h4 style={{fontSize:TitleFontSize,color:TitleFontColor}}>{item.productName}</h4>
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

export default Section5