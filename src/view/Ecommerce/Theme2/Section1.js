import React from "react";
import style from "./ecommerce.module.css";
import cart from "../../../assets/images/ThemeImages/searchnormalnew.png";
import notification from "../../../assets/images/ThemeImages/notification-bing.png";
import Icon from "../../../AllIcons/Icon";
function Section1({ feild = [] }) {
  let title = feild.find((item) => item.key === "Title")?.value;
  let titleFontSize = feild.find((item) => item.key === "Title Font Size")?.value;
  let titleFontColor = feild.find((item) => item.key === "Title Font Color")?.value;

  let searchIconShow = feild.find((item) => item.key === "Title")?.value;
  let searchIconColor = feild.find((item) => item.key === "Title")?.value;


  // let searchIcon = feild.find((item) => item.key === "Search Icon")?.value??"";
  // let enabledNotificationIcon = feild.find(
  // (item) => item.key === "Enabled Notification Icon"
  // )?.value??"";
  // let NotificationIcon = feild.find(
  //   (item) => item.key === "Notification Icon"
  // )?.value??"";
  let enabledNotificationIcon = "";
  let NotificationIcon = "";
  let searchIcon = "";
  return (
    <div className={style.ecommercenewtheme}>
      <div className="container-fluid">
        <div className={style.topheadernewtheme}>
          <div
            className={style.topheaderwrap}
            style={{ width: "55%", justifyContent: "space-between" }}
          >
            <button style={{fontSize:titleFontSize,color:titleFontColor}}>{title}</button>
            {/* <button>Featured</button> */}
          </div>
          <div
            className={style.topheaderwrap}
            style={{ width: "25%", justifyContent: "space-between" }}
          >
            <a>
              <img src={cart} alt="Cart" className="img-fluid" />
            </a>
            <a>
              <img
                src={notification}
                alt="Notification"
                className="img-fluid"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section1;
