import React, { useState, useEffect } from "react";
import Mainmobile from "../Dashboard/Mainmobile";
import DashboardUi from "../../Component/DasboardUi/DashboardUi";

import LeftSideUi from "../../Component/LeftSideUi/LeftSideUi";
import $, { data } from "jquery";
// import ElementCard from "./ElementCard";
import ElementCard from "../EstoreAppearnce/ElementCard";
import uuid from "react-uuid";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import RightSidebar from "../../Layout/DashoboardLayout/RightSidebar";
import HttpClient from "../../utils/HttpClient";
import Swal from "sweetalert2";
import AccordianBox from "../../Component/AccordianBox";
import MobileScreenLoader from "../../Component/Loaders/MobileScreenLoader";
import Registercustomer from "../../view/Registercustomer/Index"
import Logincustomer from "../../view/Logincustomer/Index"
import Generalinfo from "../Registercustomer/Generalinfo";
import Chooseimage from "../Registercustomer/Choooseanimage";
import Chooseinterest from "../Registercustomer/Chooseinterest";

function Appearnce() {
  //   const { id, moduleID } = useParams();
  const [elementList, setElementList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    $(".each-accordionbox:first-child")
      .addClass("active")
      .children(".each-text")
      .slideDown();

    $(".each-accordionbox:not(:first)").children(".each-text").hide();

    $(".swipebox").on("click", function () {
      if ($(this).parent().hasClass("active")) {
        $(this).next().slideUp();
        $(this).parent().removeClass("active");
      } else {
        $(".each-text").slideUp();
        $(".each-accordionbox").removeClass("active");
        $(this).parent().addClass("active");
        $(this).next().slideDown();
      }
    });
  }, []);

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    const reorderedItems = reorder(
      elementList,
      result.source.index,
      result.destination.index
    );

    setElementList(reorderedItems);
  };

  return (
    <>
      <DashboardUi>
        <div className="col-lg-4 col-xl-4 col-md-4 col-12">
          {/* <Elements /> */}
          <LeftSideUi>
            <div className="accordion-section">
              <AccordianBox title="Login Screen ">
                {/* <div className="app-modules-recomanded-short-box">
                  <div className="app-modules-recomanded-short-img-content">
                    <i className="fa-solid fa-store">
                      <span className="e-text"> Enter Your Email</span>
                    </i>
                  </div>
                  <div className="app-modules-recomanded-short-img-content">
                    <span
                      style={{ marginRight: 5, cursor: "pointer", color: "rgb(62, 78, 92)" }}
                    >
                      <i className="fa fa-clone" aria-hidden="clone" />
                    </span>
                    <span style={{ color: "rgb(62, 78, 92)" }}>
                      <i className="fa fa-trash" aria-hidden="true" />
                    </span>
                  </div>
                </div>
                <div className="app-modules-recomanded-short-box">
                  <div className="app-modules-recomanded-short-img-content">
                    <i className="fa-solid fa-store">
                      <span className="e-text">Enter Your Password</span>
                    </i>
                  </div>
                  <div className="app-modules-recomanded-short-img-content">
                    <span
                      style={{ marginRight: 5, cursor: "pointer", color: "rgb(62, 78, 92)" }}
                    >
                      <i className="fa fa-clone" aria-hidden="clone" />
                    </span>
                    <span style={{ color: "rgb(62, 78, 92)" }}>
                      <i className="fa fa-trash" aria-hidden="true" />
                    </span>
                  </div>
                </div> */}
              </AccordianBox>
              <AccordianBox title="Register Screen " >
                <ul className="each-title">First Screen</ul>
                <div className="app-modules-recomanded-short-box">
                  <div className="app-modules-recomanded-short-img-content">
                    <i className="fa-solid fa-store">
                      <span className="e-text"> First Name</span>
                    </i>
                  </div>
                  <div className="app-modules-recomanded-short-img-content">
                   
                    <span style={{ color: "rgb(62, 78, 92)" }}>
                      <i className="fa fa-trash" aria-hidden="true" />
                    </span>
                  </div>
                </div>

                <div className="app-modules-recomanded-short-box">
                  <div className="app-modules-recomanded-short-img-content">
                    <i className="fa-solid fa-store">
                      <span className="e-text"> Last Name</span>
                    </i>
                  </div>
                  <div className="app-modules-recomanded-short-img-content">
                    
                    <span style={{ color: "rgb(62, 78, 92)" }}>
                      <i className="fa fa-trash" aria-hidden="true" />
                    </span>
                  </div>
                </div>

                <div className="app-modules-recomanded-short-box">
                  <div className="app-modules-recomanded-short-img-content">
                    <i className="fa-solid fa-store">
                      <span className="e-text"> Email</span>
                    </i>
                  </div>
                  <div className="app-modules-recomanded-short-img-content">
                    
                    <span style={{ color: "rgb(62, 78, 92)" }}>
                      <i className="fa fa-trash" aria-hidden="true" />
                    </span>
                  </div>
                </div>

                <div className="app-modules-recomanded-short-box">
                  <div className="app-modules-recomanded-short-img-content">
                    <i className="fa-solid fa-store">
                      <span className="e-text"> Referral Code</span>
                    </i>
                  </div>
                  <div className="app-modules-recomanded-short-img-content">
                    
                    <span style={{ color: "rgb(62, 78, 92)" }}>
                      <i className="fa fa-trash" aria-hidden="true" />
                    </span>
                  </div>
                </div>

                <div className="app-modules-recomanded-short-box">
                  <div className="app-modules-recomanded-short-img-content">
                    <i className="fa-solid fa-store">
                      <span className="e-text"> Password</span>
                    </i>
                  </div>
                  <div className="app-modules-recomanded-short-img-content">
                    
                    <span style={{ color: "rgb(62, 78, 92)" }}>
                      <i className="fa fa-trash" aria-hidden="true" />
                    </span>
                  </div>
                </div>


                <ul className="each-title">Second Screen</ul>
                <div className="app-modules-recomanded-short-box">
                  <div className="app-modules-recomanded-short-img-content">
                    <i className="fa-solid fa-store">
                      <span className="e-text">Confirm Password</span>
                    </i>
                  </div>
                  <div className="app-modules-recomanded-short-img-content">
                    
                    <span style={{ color: "rgb(62, 78, 92)" }}>
                      <i className="fa fa-trash" aria-hidden="true" />
                    </span>
                  </div>
                </div>

                <div className="app-modules-recomanded-short-box">
                  <div className="app-modules-recomanded-short-img-content">
                    <i className="fa-solid fa-store">
                      <span className="e-text">Contact Number</span>
                    </i>
                  </div>
                  <div className="app-modules-recomanded-short-img-content">
                    
                    <span style={{ color: "rgb(62, 78, 92)" }}>
                      <i className="fa fa-trash" aria-hidden="true" />
                    </span>
                  </div>
                </div>

                <div className="app-modules-recomanded-short-box">
                  <div className="app-modules-recomanded-short-img-content">
                    <i className="fa-solid fa-store">
                      <span className="e-text">Country</span>
                    </i>
                  </div>
                  <div className="app-modules-recomanded-short-img-content">
                    
                    <span style={{ color: "rgb(62, 78, 92)" }}>
                      <i className="fa fa-trash" aria-hidden="true" />
                    </span>
                  </div>
                </div>

                <div className="app-modules-recomanded-short-box">
                  <div className="app-modules-recomanded-short-img-content">
                    <i className="fa-solid fa-store">
                      <span className="e-text">City</span>
                    </i>
                  </div>
                  <div className="app-modules-recomanded-short-img-content">
                    
                    <span style={{ color: "rgb(62, 78, 92)" }}>
                      <i className="fa fa-trash" aria-hidden="true" />
                    </span>
                  </div>
                </div>

                <div className="app-modules-recomanded-short-box">
                  <div className="app-modules-recomanded-short-img-content">
                    <i className="fa-solid fa-store">
                      <span className="e-text">About</span>
                    </i>
                  </div>
                  <div className="app-modules-recomanded-short-img-content">
                    
                    <span style={{ color: "rgb(62, 78, 92)" }}>
                      <i className="fa fa-trash" aria-hidden="true" />
                    </span>
                  </div>
                </div>

                <ul className="each-title">Third Screen</ul>
                <div className="app-modules-recomanded-short-box">
                  <div className="app-modules-recomanded-short-img-content">
                    <i className="fa-solid fa-store">
                      <span className="e-text">Choose an image</span>
                    </i>
                  </div>
                  <div className="app-modules-recomanded-short-img-content">
                    
                    <span style={{ color: "rgb(62, 78, 92)" }}>
                      <i className="fa fa-trash" aria-hidden="true" />
                    </span>
                  </div>
                </div>




              </AccordianBox>

              <AccordianBox title="Interest Screen">
                {/* <ul className="each-title">Final Screen</ul> */}
                <div className="app-modules-recomanded-short-box">
                  <div className="app-modules-recomanded-short-img-content">
                    <i className="fa-solid fa-store">
                      <span className="e-text">Networking</span>
                    </i>
                  </div>
                  <div className="app-modules-recomanded-short-img-content">
                   
                    <span style={{ color: "rgb(62, 78, 92)" }}>
                      <i className="fa fa-trash" aria-hidden="true" />
                    </span>
                  </div>
                </div>
                <div className="app-modules-recomanded-short-box">
                  <div className="app-modules-recomanded-short-img-content">
                    <i className="fa-solid fa-store">
                      <span className="e-text">Events</span>
                    </i>
                  </div>
                  <div className="app-modules-recomanded-short-img-content">
                   
                    <span style={{ color: "rgb(62, 78, 92)" }}>
                      <i className="fa fa-trash" aria-hidden="true" />
                    </span>
                  </div>
                </div>
                <div className="app-modules-recomanded-short-box">
                  <div className="app-modules-recomanded-short-img-content">
                    <i className="fa-solid fa-store">
                      <span className="e-text">Design</span>
                    </i>
                  </div>
                  <div className="app-modules-recomanded-short-img-content">
                   
                    <span style={{ color: "rgb(62, 78, 92)" }}>
                      <i className="fa fa-trash" aria-hidden="true" />
                    </span>
                  </div>
                </div>
                <div className="app-modules-recomanded-short-box">
                  <div className="app-modules-recomanded-short-img-content">
                    <i className="fa-solid fa-store">
                      <span className="e-text">Legal</span>
                    </i>
                  </div>
                  <div className="app-modules-recomanded-short-img-content">
                   
                    <span style={{ color: "rgb(62, 78, 92)" }}>
                      <i className="fa fa-trash" aria-hidden="true" />
                    </span>
                  </div>
                </div>
                <div className="app-modules-recomanded-short-box">
                  <div className="app-modules-recomanded-short-img-content">
                    <i className="fa-solid fa-store">
                      <span className="e-text">Content</span>
                    </i>
                  </div>
                  <div className="app-modules-recomanded-short-img-content">
                   
                    <span style={{ color: "rgb(62, 78, 92)" }}>
                      <i className="fa fa-trash" aria-hidden="true" />
                    </span>
                  </div>
                </div>
                <div className="app-modules-recomanded-short-box">
                  <div className="app-modules-recomanded-short-img-content">
                    <i className="fa-solid fa-store">
                      <span className="e-text">Marketing</span>
                    </i>
                  </div>
                  <div className="app-modules-recomanded-short-img-content">
                   
                    <span style={{ color: "rgb(62, 78, 92)" }}>
                      <i className="fa fa-trash" aria-hidden="true" />
                    </span>
                  </div>
                </div>
                <div className="app-modules-recomanded-short-box">
                  <div className="app-modules-recomanded-short-img-content">
                    <i className="fa-solid fa-store">
                      <span className="e-text">Leadership</span>
                    </i>
                  </div>
                  <div className="app-modules-recomanded-short-img-content">
                   
                    <span style={{ color: "rgb(62, 78, 92)" }}>
                      <i className="fa fa-trash" aria-hidden="true" />
                    </span>
                  </div>
                </div>
                <div className="app-modules-recomanded-short-box">
                  <div className="app-modules-recomanded-short-img-content">
                    <i className="fa-solid fa-store">
                      <span className="e-text">Culture</span>
                    </i>
                  </div>
                  <div className="app-modules-recomanded-short-img-content">
                   
                    <span style={{ color: "rgb(62, 78, 92)" }}>
                      <i className="fa fa-trash" aria-hidden="true" />
                    </span>
                  </div>
                </div>
              </AccordianBox>
            </div>
            <button className="btn btn-customaccordian">Save Changes</button>
          </LeftSideUi>
        </div>
        <div className="col-lg-8 col-xl-8 col-md-8 col-12">
          <div className="row">
            <div className="col-4 text-center">
              <p className="screentitle">First Screen</p>
              <div className="mainMobile2">
                <div className="iphone2">
                  {/* <Registercustomer /> */}
                  {/* <Logincustomer /> */}
                  <Chooseinterest />
                  <button className="confirmbtn">Confirm & Next</button>
                </div>
              </div>

            </div>
            <div className="col-4 text-center">
              <p className="screentitle">Second Screen</p>
              <div className="mainMobile2">
                <div className="iphone2">
                  <Generalinfo />
                  <button className="confirmbtn">Confirm & Next</button>
                </div>
              </div>
            </div>
            <div className="col-4 text-center">
            <p className="screentitle">Third Screen</p>
              <div className="mainMobile2">
                <div className="iphone2">
                  <Chooseimage />
                  <button className="confirmbtn">Confirm</button>
                </div>
              </div>

            </div>
          </div>

        </div>
      </DashboardUi>
    </>
  );
}

export default Appearnce;

const reorder = (list, startIndex, endIndex) => {
  console.log(list, startIndex, endIndex);
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};
