import React from "react";
import style from "./ott.module.css";
import Ottprofile from "../../../images/ottprofile.png";
import Notification from "../../../images/icon/Notification.png";

function OttHeader({ feild }) {
  let profileIcon = feild.find(
    (item) => item.key === "Profile Icon Show"
  )?.value;
  let welcomeText = feild.find((item) => item.key === "Welcome Text")?.value;
  let welcometextFontFamily = feild.find(
    (item) => item.key === "Welcome Text Style"
  )?.value;
  let welcometextFontSize = feild.find(
    (item) => item.key === "Welcome Text Size"
  )?.value;
  let welcometextFontWeight = feild.find(
    (item) => item.key === "Welcome Text Font Weight"
  )?.value;
  let welcometextColor = feild.find(
    (item) => item.key === "Welcome Text Color"
  )?.value;

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
                    fontSize: `${welcometextFontSize}px`,
                    fontWeight:welcometextFontWeight,
                    color:welcometextColor
                  }}
                  className={style.gm}
                >
                  {welcomeText} Andy
                </p>
                <p className={style.profileName}>only streaming movie lovers</p>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className={style.socialIcons}>
              <img src={Notification} className="img-fluid" alt="" />
              {/* <img src={Bookmark} className="img-fluid" alt="" /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OttHeader;
