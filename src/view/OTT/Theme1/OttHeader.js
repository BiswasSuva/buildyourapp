import React from "react";
import style from "./ott.module.css";
import Ottprofile from "../../../images/ottprofile.png";
import Notification from "../../../images/icon/Notification.png";
import Icon from "../../../AllIcons/Icon";

function OttHeader({ feild }) {
  let profileIcon = feild.find(
    (item) => item.key === "User Picture Show"
  )?.value;
  let welcomeText = feild.find((item) => item.key === "Welcome Text")?.value;
  let welcometextFontFamily = feild.find(
    (item) => item.key === "Welcome Text Style"
  )?.value;
  let welcometextFontSize = feild.find(
    (item) => item.key === "Text Size "
  )?.value;
  let welcometextFontWeight = feild.find(
    (item) => item.key === "Text Color"
  )?.value;
  let welcometextColor = feild.find(
    (item) => item.key === "Text Color"
  )?.value;
    let description = feild.find(
    (item) => item.key === "Description"
  )?.value;

  const notificationIconShow = feild.find((item) => item.key == "Notification Icon Show")?.value;
  const notificationIconSize = feild.find((item) => item.key == "Notification Icon Size")?.value;
  const notificationIconColor = feild.find((item) => item.key == "Icon Coloe")?.value; 
  const notificationIcon = feild.find((item) => item.key == "Notification Icon")?.value;
// console.log("iocns",profileIcon);
  return (
    <div className={style.ecommerceheader}>
      <div className="container">
        <div className="row">
          <div className="col-8">
            <div
              className="row"
              style={{ justifyContent: "space-around", paddingLeft: "5px" }}
            >
              {profileIcon === "yes" && (
                <div className={style.profileimg}>
                  <img src={Ottprofile} className="img-fluid" alt="" />
                </div>
              )}
              <div className={style.profilename}>
                <p
                  style={{
                    fontFamily: welcometextFontFamily,
                    fontSize: `${welcometextFontSize}`,
                    fontWeight:welcometextFontWeight,
                    color:welcometextColor
                  }}
                  className={style.gm}
                >
                  {welcomeText} Andy
                </p>
                <p className={style.profileName}>{description}</p>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className={style.socialIcons}>

            {
                notificationIconShow==="yes" &&(
                  notificationIcon==="none"?
                  <img src={Notification} className="img-fluid" alt="" /> : <Icon
                family={notificationIcon?.family}
                name={notificationIcon?.name}
               //  size={cartIconSize}
                color={notificationIconColor}
              />
                )
              }




              {/* {notificationIconShow ==="yes" &&              <img src={Notification} className="img-fluid" alt="" /> } */}

              {/* <img src={Bookmark} className="img-fluid" alt="" /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OttHeader;
