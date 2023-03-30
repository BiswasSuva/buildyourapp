import React, { useState, useEffect } from "react";
import Logo from "../../images/Logo.png";
import { SketchPicker } from "react-color";
import useScreen from "../../customHooks/useScreen";
import { prominent } from "color.js";
import { createScreen } from "../../api/appApi";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function Index({logo}) {
  
  const screen = useScreen();
  const navigate = useNavigate();
  // const [logo, setLogo] = useState("");
  const [primaryColor, setPrimaryColor] = useState("");
  const [secondaryColor, setSecondaryColor] = useState("");
  useEffect(() => {
    // setLogo(screen.logo_img ? screen.logo_img : "");
    setPrimaryColor(screen.primary_col ? screen.primary_col : "");
    setSecondaryColor(screen.secondary_col ? screen.secondary_col : "");
  }, [screen]);

  const getColor = async () => {
    if (logo) {
      const color = await prominent(logo, { amount: 2 });
      console.log("color", color);
      let primary = color[1];
      let secondary = color[0];
      setPrimaryColor(rgbToHex(primary[0], primary[1], primary[2]));
      setSecondaryColor(rgbToHex(secondary[0], secondary[1], secondary[2]));
    }
  };

  const Submit = async () => {
    let data = {
      // logo_img:logo
      primary_col: primaryColor,
      secondary_col: secondaryColor,
    };
    let result = await createScreen(data);
    if (result && result.status) {
      // navigate("/color-scheme")
      Swal.fire({
        title: "Move to next  step and design your App",
        icon: "success"
      });
    }
  };
  return (

    <>
      <div className="row">
        <div className="col-lg-12 col-xl-12 col-md-12 col-12">
          <div className="heading-title">
            <p>This colors will be used as primary in your app.</p>
          </div>
        </div>
      </div>
      <div className="row mt-4 justify-content-center" >
        {/* <div className="col-lg-4 col-xl-4 col-md-4 col-12">
            <div className="colorbutton">
              <div className="center">
                <div className="pin" />
              </div>
              <div className="wheel">
                <ul className="colors">
                  <li className="color" />
                  <li className="color" />
                  <li className="color" />
                  <li className="color" />
                  <li className="color" />
                  <li className="color" />
                  <li className="color" />
                  <li className="color" />
                  <li className="color" />
                  <li className="color" />
                  <li className="color" />
                  <li className="color" />
                </ul>
              </div>
            </div>
          </div> */}
        <div className="col-lg-4 col-xl-4 col-md-4 col-12 d-flex align-items-center ">
          {!logo ? (
            <p style={{ color: "#fff" }}>Please upload logo</p>
          ) : (
            <div className="logoUploadarea">
              <img src={logo} className="img-fluid" alt="Uploading Logo" />
            </div>
          )}
        </div>
        <div className="col-lg-4 col-xl-4 col-md-4 col-12">
          <div className="chooseBtn">
            <button className="btn " onClick={getColor}>
              Choose Colour from Logo
            </button>
          </div>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-lg-12 col-md-12 col-xl-12">
          {/* <SketchPicker /> */}
          <div className="colour-picker">

            <label>Primary Colour</label>
            <input
              value={primaryColor}
              onChange={(val) => setPrimaryColor(val.target.value)}
              type="color"
              className="form-control"
            />

            <label>Secondary Colour</label>
            <input
              value={secondaryColor}
              onChange={(val) => setSecondaryColor(val.target.value)}
              type="color"
              className="form-control"
            />

          </div>

        </div>
      </div>

      <div className="row mt-5">
        <div className="col-12">
          <div className="colour-picker">
            <button className="btn " onClick={Submit}>
              Confirm Color
            </button>
          </div>

        </div>
      </div>
    </>

  );
}

export default Index;

function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}
