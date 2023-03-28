import React from "react";
import style from "./ecommerce.module.css";
// import cart from "../../../assets/images/ThemeImages/25-trolly.png"
import cart from "../../../assets/images/ThemeImages/25-trolly.png";
import notification from "../../../assets/images/ThemeImages/76-notification.png";
import Icon from "../../../AllIcons/Icon";
function Section1({ feild }) {
  const title = feild.find((item) => item.key == "Title")?.value;
  const titleFontSize = feild.find((item)=>item.key == "Title Font Size")?.value
  const titleFontWeight = feild.find((item)=>item.key == "Title Font Weight")?.value
  const titleFontcolor = feild.find((item)=>item.key == "Title Font Color")?.value
  const cartIconShow = feild.find((item)=>item.key == "Cart Icon Show")?.value
  const cartIconSize = feild.find((item)=>item.key == "Cart Icon Size")?.value
  const cartIconColor = feild.find((item)=>item.key == "Cart Icon Color")?.value  
  const cartIcon = feild.find((item) => item.key == "Cart Icon")?.value;
  const notificationIconShow = feild.find((item) => item.key == "Notification Icon Show")?.value;
  const notificationIconSize = feild.find((item) => item.key == "Notification Icon Size")?.value;
  const notificationIconColor = feild.find((item) => item.key == "Notification Icon Color")?.value; 
  const notificationIcon = feild.find((item) => item.key == "Notification Icon")?.value;
  const wishlistIconShow = feild.find((item) => item.key == "Wishlist Icon Show")?.value;
  const wishlistIconSize = feild.find((item) => item.key == "Wishlist Icon Size")?.value;
  const wishlistIconColor = feild.find((item) => item.key == "Wishlist Icon Color")?.value; 
  const wishlistIcon = feild.find((item) => item.key == "Wishlist Icon")?.value;
  return (
    <div className={style.ecommerceheader}>
      <div className="container-fluid">
        <div className="d-flex align-items-center justify-content-between">
          <h4 className={style.title} style={{fontSize:titleFontSize,fontWeight:titleFontWeight,color:titleFontcolor}}>
            {title}
            <span className={style.title_TExt}></span>
          </h4>
          <div className={style.cnmain}>
           {
            cartIconShow =="yes"
            &&
            <div className={style.cartImage}>
            {cartIcon === "none" ? (
              <>
                {" "}
                <img src={cart} alt="Cart" className="img-fluid" />
                <span className={style.count_Image}></span>
              </>
            ) : (
              <Icon
                family={cartIcon?.family}
                name={cartIcon?.name}
                size={cartIconSize}
                color={cartIconColor}
              />
            )}
          </div>

           }
            {notificationIconShow == "yes" && (
              <div className={style.cartImage}>
                {notificationIcon === "none" ? (
                  <img
                    src={notification}
                    alt="Notification"
                    className="img-fluid"
                  />
                ) : (
                  <Icon
                    family={notificationIcon?.family}
                    name={notificationIcon?.name}
                    size={notificationIconSize}
                    color={notificationIconColor}
                  />
                )}
              </div>
            )}
             {wishlistIconShow == "yes" && (
              <div className={style.cartImage}>
                {wishlistIcon === "none" ? (
                 <Icon
                 family="MaterialIcons"
                 name="favorite-outline"
                 size={wishlistIconSize}
                 color={wishlistIconColor}
               />
                ) : (
                  <Icon
                    family={wishlistIcon?.family}
                    name={wishlistIcon?.name}
                    size={wishlistIconSize}
                    color={wishlistIconColor}
                  />
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section1;
