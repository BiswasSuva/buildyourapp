import React, { useState, useEffect } from "react";
import style from "./ecommerce.module.css";
import man1 from "../../../assets/images/ThemeImages/man1.png";
import man2 from "../../../assets/images/ThemeImages/man2.png";
import man3 from "../../../assets/images/ThemeImages/man3.png";
import man4 from "../../../assets/images/ThemeImages/man4.png";
import Bag from "../../../assets/images/ThemeImages/bag-2.png";
import firstperrson from "../../../assets/images/ThemeImages/firstperrson.png";
import seconfperson from "../../../assets/images/ThemeImages/seconfperson.png";
import thirdperson from "../../../assets/images/ThemeImages/thirdperson.png";
import { useElementList } from "../../../Providers/ElemetProvider";
import { getEcomProduct } from "../../../api/appApi";
import { useEstoreRightSidearContext } from "../../../Providers/EcomRightSidebar";

const DUMMY_PRODUCT = [
  {
    productName: "Oversize Tshirt Baby Blue",
    image: [firstperrson],
    sellPrice: 52,
  },
  {
    productName: "Oversize Tshirt Baby Blue",
    image: [firstperrson],
    sellPrice: 52,
  },
  {
    productName: "Oversize Tshirt Baby Blue",
    image: [seconfperson],
    sellPrice: 52,
  },
  {
    productName: "Oversize Tshirt Baby Blue",
    image: [thirdperson],
    sellPrice: 52,
  },
];

function Section4({ feild = [] }) {
  const { rerender, setRender } = useElementList();
  const { activeElement, setActiveElement } = useEstoreRightSidearContext();


  const [products, setProducts] = useState(DUMMY_PRODUCT);
  let borderRadius = feild.find((item) => item.key == "Border Radius")?.value;
  let cartIconShow = feild.find((item) => item.key == "Cart Icon Show")?.value;
  let cartIcon = feild.find((item) => item.key == "Cart Icon")?.value;

  let cartcolor = feild.find((item) => item.key == "Cart Button Color")?.value;
  let ratingShow = feild.find((item) => item.key == "Rating Show")?.value;
  let TitleFontSize = feild.find(
    (item) => item.key == "Title Font Size"
  )?.value;
  let FontColor = feild.find(
    (item) => item.key == "Text Color"
  )?.value;
  let Headingtitle = feild.find((item) => item.key == "Heading Title")?.value;
  let HeadingColor = feild.find((item) => item.key == "Title Font Color")?.value;

  let BackgroundColor = feild.find((item) => item.key == "Background Color")?.value;


  useEffect(() => {
    fetchProduct();
  }, [rerender]);

  const fetchProduct = async () => {
    let result = await getEcomProduct();
    if (result && result.status && result.data?.length > 0) {
      setProducts(result.data);
    } else {
      setProducts(DUMMY_PRODUCT);
    }
  };

  return (
    <div className={style.productlist} style={{background:BackgroundColor,border:activeElement===3&& "2px solid black"}}>
      <div className="container-fluid">
        <div className={style.productbanner}>
          <h1 style={{color:HeadingColor}}>{Headingtitle}</h1>
          <p>See More</p>
        </div>
        <div className={style.newproductitem}>
          {products.map((item, i) => {
            return (
              <div style={{borderRadius}} className={`mb-3 ${style.newproductitemwrapper}`} key={i}>
                <div className={style.newproductwrapperImg}>
                  <img src={item.image} alt="" className="img-fluid" />
                 {
                  cartIconShow=="yes"&&
                  <div className={style.bagimg}>
                  <img src={Bag} className={style.customimg} alt="Bag" />
                </div>

                 }
                </div>
                <h3 style={{color:FontColor}}>{item.productName}</h3>
                <p className={style.pricedetails}>${item.sellPrice}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Section4;
