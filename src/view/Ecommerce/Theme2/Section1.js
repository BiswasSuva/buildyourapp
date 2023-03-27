import React from "react";
import style from "./ecommerce.module.css";
import cart from "../../../assets/images/ThemeImages/searchnormalnew.png";
import notification from "../../../assets/images/ThemeImages/notification-bing.png";
import Icon from "../../../AllIcons/Icon";
function Section1({ feild }) {
  let title = feild.find((item) => item.key === "Title")?.value;
  let searchIcon = feild.find((item) => item.key === "Search Icon")?.value;
  let enabledNotificationIcon = feild.find(
    (item) => item.key === "Enabled Notification Icon"
  )?.value;
  let NotificationIcon = feild.find(
    (item) => item.key === "Notification Icon"
  )?.value;

  return (
    <div className={style.ecommercenewtheme}>
      <div className="container-fluid">
        <div className={style.topheadernewtheme}>
          <div
            className={style.topheaderwrap}
            style={{ width: "55%", justifyContent: "space-between" }}
          >
            <button>{title}</button>
            {/* <button>Featured</button> */}
          </div>
          <div
            className={style.topheaderwrap}
            style={{ width: "25%", justifyContent: "space-between" }}
          >
            <a>
              {searchIcon === "none" ? (
                <img src={cart} alt="Cart" className="img-fluid" />
              ) : (
                <Icon
                  family={searchIcon?.family}
                  name={searchIcon?.name}
                  size="20px"
                  // className={style.formcontrolfeedback}
                />
              )}
            </a>
            {enabledNotificationIcon === "yes" && (
              <a>
                {NotificationIcon === "none" ? (
                  <img
                    src={notification}
                    alt="Notification"
                    className="img-fluid"
                  />
                ) : (
                  <Icon
                    family={NotificationIcon?.family}
                    name={NotificationIcon?.name}
                    size="20px"
                    // className={style.formcontrolfeedback}
                  />
                )}
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section1;
