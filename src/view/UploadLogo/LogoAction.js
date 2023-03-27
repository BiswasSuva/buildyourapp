import React from "react";
import Button from "../../Component/CustomComponent/Button";

function LogoAction({onBack,onConfirm}) {
  return (
    <>
      <div
        className=""
        style={{
          marginTop: "2rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <button className="back_btn" onClick={onBack}>
          <i className="fa-solid fa-rotate-left mr-1"></i>
        </button>
        <Button name="Confirm" onClick={onConfirm}/>
      </div>
    </>
  );
}

export default LogoAction;
