import React from "react";

function LogoImage({src=''}) {
  return (
    <div className="LogoBox">
        <p style={{color:"wheat"}}>Your Uploaded Logo</p>
      <img src={src} className="img-fluid" alt="" />

    </div>
  );
}

export default LogoImage;
