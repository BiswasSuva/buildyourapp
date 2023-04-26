import React from "react";
import style from "./podcast.module.css";
import podcastface from "../../../images/podcastface.png";
import Notification from "../../../images/icon/Notification.png";
import Bookmark from "../../../images/icon/Bookmark.png";
function PodcastHeader({ feild = [] }) {
  const profileimgShow = feild.find(
    (item) => item.key === "Profile Icon Show"
  )?.value;

  const WelcomeText  = feild.find((item) => item.key === "Welcome Text ")?.value;
  const WelcomeTextSize = feild.find(
    (item) => item.key === "Welcome Text Size"
  )?.value;
  const WelcomeTextColor = feild.find(
    (item) => item.key === "Welcome Text Color"
  )?.value;
  const titleColor = feild.find((item) => item.key === "User Name Text color")?.value;
  const titleSize = feild.find((item) => item.key === "User Name Text Size")?.value;
  return (
    <div className={style.ecommerceheader}>
      <div className="container">
        <div className="row">
          <div className="col-8">
            <div
              className="row"
              style={{ justifyContent: "space-around", paddingLeft: "5px" }}
            >
              {profileimgShow == "yes" && (
                <div className={style.profileimg}>
                  <img src={podcastface} className="img-fluid" alt="" />
                </div>
              )}
              <div className={style.profilename}>
                <p className={style.gm} style={{color:WelcomeTextColor,fontSize:WelcomeTextSize}}>{WelcomeText}</p>
                <p className={style.profileName} style={{color:titleColor,fontSize:titleSize}}>Andrew Ainsley</p>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className={style.socialIcons}>
              <img src={Notification} className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PodcastHeader;
