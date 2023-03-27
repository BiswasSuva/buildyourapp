import React from "react";
import style from "./ecommerce.module.css";
// import cart from "../../../assets/images/ThemeImages/25-trolly.png"
import cart from "../../../assets/images/ThemeImages/25-trolly.png";
import notification from "../../../assets/images/ThemeImages/76-notification.png";
import Icon from "../../../AllIcons/Icon";
function Section1({ feild }) {
  const title = feild.find((item) => item.key == "Title")?.value;
  const cartIcon = feild.find((item) => item.key == "Cart Icon")?.value;
  // console.log("new",cartIcon);
  const notificationIconShow = feild.find(
    (item) => item.key == "Enabled Notification Icon"
  )?.value;
  const notificationIcon = feild.find(
    (item) => item.key == "Notification Icon"
  )?.value;
  return (
    <div className={style.ecommerceheader}>
      <div className="container-fluid">
        <div className="d-flex align-items-center justify-content-between">
          <h4 className={style.title}>
            {title}
            <span className={style.title_TExt}></span>
          </h4>
          <div className={style.cnmain}>
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
                  size="20px"
                />
              )}
            </div>
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
                    size="20px"
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
