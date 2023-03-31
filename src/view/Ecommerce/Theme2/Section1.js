import React from "react";
import style from "./ecommerce.module.css";
import cart from "../../../assets/images/ThemeImages/searchnormalnew.png";
import notification from "../../../assets/images/ThemeImages/notification-bing.png";
import Icon from "../../../AllIcons/Icon";
function Section1({ feild = [] }) {
  let title = feild.find((item) => item.key === "Title")?.value;
  let titleFontSize = feild.find((item) => item.key === "Title Font Size")?.value;
  let titleFontColor = feild.find((item) => item.key === "Title Font Color")?.value;
  let searchIconShow = feild.find((item) => item.key === "Search Icon Show")?.value;
  let searchIconColor = feild.find((item) => item.key === "Search Icon Color")?.value;
  let searchIcon = feild.find((item)=>item.key==="Search Icon")?.value
  let notificationconShow = feild.find((item) => item.key === "Notification Icon Show")?.value;
  let notificationColor = feild.find((item) => item.key === "Notification Icon Color")?.value;
  let notificationIcon = feild.find((item)=>item.key==="Notification Icon")?.value
  return (
    <div className={style.ecommercenewtheme} >
      <div className="container-fluid">
        <div className={style.topheadernewtheme}>
          <div
            className={style.topheaderwrap}
            style={{ width: "55%", justifyContent: "space-between" }}
          >
            <button style={{ fontSize: titleFontSize, color: titleFontColor }}>
              {title}
            </button>
            {/* <button>Featured</button> */}
          </div>
          <div
            className={style.topheaderwrap}
            style={{ width: "25%", justifyContent: "space-between" }}
          >
            <a>
              {searchIconShow == "yes" && (
               searchIcon==="none"? <img src={cart} alt="Cart" className="img-fluid" />: <Icon
               family={searchIcon?.family}
               name={searchIcon?.name}
              //  size={cartIconSize}
               color={searchIconColor}
             />
              )}
            </a>
            <a>

              {
                notificationconShow==="yes" &&(
                  notificationIcon==="none"?
                  <img
                  src={notification}
                  alt="Notification"
                  className="img-fluid"
                />: <Icon
                family={notificationIcon?.family}
                name={notificationIcon?.name}
               //  size={cartIconSize}
                color={notificationColor}
              />
                )
              }
             
            </a>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Section1;
