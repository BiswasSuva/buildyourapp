import React, { useState, useEffect } from "react";
import Mainmobile from "../Dashboard/Mainmobile";
import DashboardUi from "../../Component/DasboardUi/DashboardUi";
import { useParams } from "react-router-dom";
import { getThemeDetail } from "../../api/appApi";
import Otttheme1 from "../OTT/Theme1/index";
import Otttheme2 from "../OTT/Theme2/index";

import LeftSideUi from "../../Component/LeftSideUi/LeftSideUi";
import $, { data } from "jquery";
// import ElementCard from "./ElementCard";
import ElementCard from "../EstoreAppearnce/ElementCard";
import uuid from "react-uuid";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import RightSidebar from "../../Layout/DashoboardLayout/RightSidebar";
import HttpClient from "../../utils/HttpClient";
import Swal from "sweetalert2";
import { useOttRightSidearContext } from "../../Providers/OttRightSidebar";
import AddOttTypes from "./AddOttTypes";
import OttTypes from "./OttTypes";
import AddOttGenre from "./AddOttGenre";
import OttGenre from "./OttGenre";
import AddOttVideo from "./AddOttVideo";
import ManageVideo from "./ManageVideo";
import AccordianBox from "../../Component/AccordianBox";
import AddOttEpisode from "./AddOttEpisode";
import ManageOttEpisode from "./ManageOttEpisode";
import AddOttBanner from "./AddOttBanner";
import ManageOttBanner from "./ManageOttBanner";
import MobileScreenLoader from "../../Component/Loaders/MobileScreenLoader";
import { useElementList } from "../../Providers/ElemetProvider";


function Appearnce() {
  const { id, moduleID } = useParams();
  // const [elementList, setElementList] = useState([]);
  const [deletedElement, setDeletedElement] = useState([]);
  const [fetch, setFetch] = useState(false);
  const { component, setRenderComponent } = useOttRightSidearContext();
  const [loading, setLoading] = useState(false);
  const {elementList,setElementList} = useElementList()

  useEffect(() => {
    fetchTheme();
  }, [id]);
  const fetchTheme = async () => {
    setLoading(true);
    let result = await getThemeDetail(id);
    // return false
    console.log("themeDetail", result);
    if (result && result.status) {
      let list = result.data.elementListe.map((item) => {
        // checking new elementsField is avialable or not
        if (item.elementsField) {
          // if avialable change value with new value
          return {
            ...item,
            elementTypeName: {
              ...item.elementTypeName,
              field: item.elementTypeName.field.map((feildItem) => {
                return {
                  ...feildItem,
                  value: item.elementsField?.fieldsList.find(
                    (it) => it.key == feildItem.key
                  )?.value,
                };
              }),
            },
          };
        }
        return {
          ...item,
        };
      });

      console.log("updatedlist", list);

      // here we checking if user updeted value in feild list if user update value list elementsField becomes new key value pair

      setElementList(
        list
          ?.filter((item) => !item.isDeleted)
          .sort((a, b) => a.position - b.position)
      );
      setDeletedElement(list.filter((item) => item.isDeleted));
    }
    setLoading(false);
  };
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
  const cloneThisElement = (item) => {
    console.log("clone", item);
    setElementList((prev) => [...prev, { ...item, _id: uuid() }]);
  };
  const deleteThisElement = (id, data) => {
    setElementList((prev) => prev.filter((item) => item._id !== id));

    setDeletedElement((prev) => {
      if (prev.find((item) => item.elementID === data.elementID)) {
        return [...prev];
      } else {
        return [...prev, data];
      }
    });
  };
  const reloadElement = (id, data) => {
    setDeletedElement((prev) => prev.filter((item) => item._id !== id));
    setElementList((prev) => [...prev, data]);
  };

  const elementListArrange = async () => {
    console.log(elementList);
    let newElementList = elementList.map((item, index) => {
      return { elementID: item.elementID, position: index + 1 };
    });

    let data = {
      moduleID: moduleID,
      elementList: newElementList,
    };
    console.log(data);
    let result = await HttpClient.requestData(
      `update-theme-by-appowner/${id}`,
      "PUT",
      data
    );
    // console.log("doen",result);
    if (result && result.status) {
      Swal.fire({
        title: "Elements Updted Successfully ! ",
        icon: "success",
      });
    }
  };

  return (
    <>
      <DashboardUi>
        <div className="col-lg-4 col-xl-4 col-md-4 col-12">
          {/* <Elements /> */}
          <LeftSideUi>
            <div className="accordion-section">
              <div className="each-accordionbox">
                <h3 className="each-title">Elements</h3>

                <div className="swipebox">
                  <div className="swipeplus">+</div>
                </div>

                <div className="each-text">
                  <h3 className="each-title">Selected Element</h3>
                  <DragDropContext onDragEnd={onDragEnd}>
                    <Droppable droppableId="droppable1">
                      {(provided, snapshot) => (
                        <div
                          {...provided.droppableProps}
                          ref={provided.innerRef}
                        >
                          {elementList.map((item, index) => (
                            <Draggable
                              key={item._id}
                              draggableId={item._id}
                              index={index}
                            >
                              {(provided, snapshot) => (
                                <ElementCard
                                  name={item.elementTypeName.title}
                                  provided={provided}
                                  onClone={() => cloneThisElement(item)}
                                  onDelete={() =>
                                    deleteThisElement(item._id, item)
                                  }
                                  onClick={() => {
                                    // setFeildList(item);
                                    // setfeildElementindex(index);
                                    setRenderComponent(
                                      <RightSidebar
                                        globalindex={index}
                                        elementList={elementList}
                                        setElementList={setElementList}
                                        feilds={item}
                                      />
                                    );
                                  }}
                                />
                              )}
                            </Draggable>
                          ))}
                          {provided.placeholder}
                        </div>
                      )}
                    </Droppable>
                  </DragDropContext>

                  <h3 className="each-title">Deleted Element</h3>

                  {deletedElement.map((item) => {
                    return (
                      <ElementCard
                        key={item._id}
                        name={item.elementTypeName.title}
                        deleted={true}
                        onReload={() => reloadElement(item._id, item)}
                      />
                    );
                  })}
                </div>
              </div>
              <AccordianBox title="Ott-Genre">
                <li
                  onClick={() =>
                    setRenderComponent(
                      <AddOttGenre setFetch={setFetch} close={() => {}} />
                    )
                  }
                >
                  Add Ott-Genre
                </li>
                <li
                  onClick={() =>
                    setRenderComponent(<OttGenre setFetch={setFetch} />)
                  }
                >
                  Manage Ott-Genre
                </li>
              </AccordianBox>
              <AccordianBox title="Ott Types">
                <li
                  onClick={() =>
                    setRenderComponent(<AddOttTypes setFetch={setFetch} />)
                  }
                >
                  Add Ott-Types
                </li>
                <li
                  onClick={() =>
                    setRenderComponent(<OttTypes setFetch={setFetch} />)
                  }
                >
                  Manage Ott-Types
                </li>
              </AccordianBox>

           
              <AccordianBox title="Ott Video">
                <li
                  onClick={() =>
                    setRenderComponent(
                      <AddOttVideo setFetch={setFetch} close={() => {}} />
                    )
                  }
                >
                  Add video
                </li>
                <li
                  onClick={() =>
                    setRenderComponent(<ManageVideo setFetch={setFetch} />)
                  }
                >
                  Manage Videos
                </li>
              </AccordianBox>
              <AccordianBox title="Episodes">
                <li
                  onClick={() =>
                    setRenderComponent(
                      <AddOttEpisode setFetch={setFetch} close={() => {}} />
                    )
                  }
                >
                  Add Episodes
                </li>
                <li
                  onClick={() =>
                    setRenderComponent(
                      <ManageOttEpisode setFetch={setFetch} close={() => {}} />
                    )
                  }
                >
                  Manage Episodes
                </li>
              </AccordianBox>
              <AccordianBox title="Ott Banner">
                <li
                  onClick={() =>
                    setRenderComponent(
                      <AddOttBanner setFetch={setFetch} close={() => {}} />
                    )
                  }
                >
                  Add Banner
                </li>
                <li
                  onClick={() =>
                    setRenderComponent(
                      <ManageOttBanner setFetch={setFetch} close={() => {}} />
                    )
                  }
                >
                  Manage Banners
                </li>
              </AccordianBox>
            </div>
            <button
              className="btn btn-customaccordian"
              onClick={elementListArrange}
            >
              Save Changes
            </button>
          </LeftSideUi>
        </div>
        <div className="col-lg-8 col-xl-8 col-md-8 col-12">
          {/* <Mobilescreen /> */}
          <Mainmobile>
            {loading && <MobileScreenLoader />}
          
            {/* <Ecommerceproductdetails /> */}

            {/* <EcommerceTheme1 elementList={elementList} /> */}

            {/*----Start New Themes----*/}
            {/* <Learning1 />  */}

            {/* <Learning2 /> */}

            {/* <Podcasttheme1/> */}

            {/* <Otttheme1 /> */}

            {!loading &&
              (id == "64269a662e8c8f8facfdc5c6" ? (
                <Otttheme1 elementList={elementList} />
              ) : (
                <Otttheme2 />
              ))}
          </Mainmobile>
        </div>
      </DashboardUi>

      {/* RightSidebar Component RenderingHere code by shivam */}
      {component}
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
