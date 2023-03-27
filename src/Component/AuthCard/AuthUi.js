import React from "react";
import a from "../../assets/images/Logo.png";
import byo from "../../assets/images/byo.png"
import b from "../../assets/images/sideimg.png";
// import loginbg from "../../images/mobile_development2.gif"

import loginbg from "../../images/login-img.svg";
import aa from "../../images/cartoon/two.png";
import bb from "../../images/cartoon/three.png";
import cc from "../../images/cartoon/one.png";
import dd from "../../images/cartoon/four.png";
import Draw from "../../images/draw2.svg"
import { Link, useLocation } from "react-router-dom";

// import loginbg from "../../images/mobiledevelopement.gif"
function AuthUi({ children }) {
  const { pathname } = useLocation();
  // console.log(location);
  return (
    // <section className="register-page">
    <div className="bg-lightpeach">
      <div
        className="d-flex align-items-center position-relative bg-shape"
        style={{ paddingTop: "0", height: "100%" }}
      >
        <div className="col-lg-12 col-xl-12 col-md-12 col-sm-12 col-12 d-lg-flex align-items-center vh-100 p-xl-12 p-lg-6 p-5" style={{ height: "100%" }}>
          <div className="customdesc" style={{ position: "relative" }}>

            <div className="row">
              <div className='screenmob'>

                <div className="row" style={{ margin: "0 auto" }}>
                  <div
                    className="col-md-6 col-lg-6 col-xl-6 col-12"
                    style={{ paddingTop: "30px" }}
                  >
                    {/* <div className='screenmob'> */}
                    <a style={{ width: "60%", display: "block", textAlign: "center" }}>
                      <img src={byo} style={{ marginBottom: "1rem", position: "relative", zIndex: "99", marginLeft: "-5%" }} />
                    </a>
                    {children}

                    {pathname == "/login" ? (
                      <div className="d-flex justify-content-between font-14 font-weight-semi-bold mt-5 bottom-form" style={{ position: "relative", zIndex: "99" }}>
                        <a href="#!">Forgot Password ?</a>
                        <p style={{ color: "#fff" }}>
                          New User? <Link to="/register" style={{ cursor: "pointer", color: "#fff" }}>Signup Now</Link>
                        </p>
                      </div>
                    ) : (
                      <div className="d-flex justify-content-between font-14 font-weight-semi-bold mt-5 bottom-form" style={{ position: "relative", zIndex: "99" }}>
                        {/* <a href="#!">Forgot Password ?</a> */}
                        <p >
                          Existing User? <Link to="/login" style={{ cursor: "pointer" }}>SignIn</Link>
                        </p>
                      </div>
                    )}

                    <div className="screen__background">
                      <span className="screen__background__shape screen__background__shape4" />
                      <span className="screen__background__shape screen__background__shape3" />
                      <span className="screen__background__shape screen__background__shape2" />
                      <span className="screen__background__shape screen__background__shape1" />
                    </div>

                  </div>

                  <div className="col-md-6 col-lg-6 col-xl-6 col-12 d-none d-md-none d-lg-flex">
                    <div className="aos-init aos-animate d-flex align-items-center" data-aos="zoom-in">
                      {/* <img src={loginbg} alt="" className="img-fluid" /> */}
                      <img src={Draw} alt="" className="img-fluid" />
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </div>

  );
}

export default AuthUi;
