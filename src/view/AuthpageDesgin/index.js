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
              <AccordianBox title="Login page ">
                <li>Name</li>
                <li>Email</li>
              </AccordianBox>
              <AccordianBox title="Register page ">
                <li>Name</li>
                <li>Email</li>
              </AccordianBox>
            </div>
            <button className="btn btn-customaccordian">Save Changes</button>
          </LeftSideUi>
        </div>
        <div className="col-lg-8 col-xl-8 col-md-8 col-12">
          {/* <Mobilescreen /> */}
          <Mainmobile>
            {/* <Ecommerceproductdetails /> */}

            {/* <EcommerceTheme1 elementList={elementList} /> */}

            {/*----Start New Themes----*/}
            {/* <Learning1 />  */}

            {/* <Learning2 /> */}

            {/* <Podcasttheme1/> */}

            {/* <Otttheme1 /> */}
          </Mainmobile>
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
