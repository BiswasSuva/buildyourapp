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
import { usePodcastRightSidebarContext } from "../../Providers/PodcastRightSidebar";
import AddOttGenre from "../OttAppearnce/AddOttGenre";
import OttGenre from "../OttAppearnce/OttGenre";
import ManageVideo from "../OttAppearnce/ManageVideo";
import OttTypes from "../OttAppearnce/OttTypes";
import AddOttVideo from "../OttAppearnce/AddOttVideo";
import AddPodcast from "./AddPodcast";
import AddPodcastTypes from "./PodcastTypes";
import ManagePodcastType from "./ManagePodcastType";
import AddPodCast from "./AddPodcast";
import AddPodcastGenre from "./AddPodcastGenre";
import PodcastGenre from "./PodcastGenre";
import ManagePodcast from "./ManagePodcast";
import AddBaner from "./PodcastBanner/AddBanner";
import ManageBanner from "./PodcastBanner/ManageBanner";
import AddPodcastAlbum from "./PodcastAlbum/AddPodcastAlbum";
import { useElementList } from "../../Providers/ElemetProvider";
import MobileScreenLoader from "../../Component/Loaders/MobileScreenLoader";
import Podcasttheme1 from "../Podcast/Theme1/index"
import Podcasttheme2 from "../Podcast/Theme2/index"


function Appearnce() {
  const { id, moduleID } = useParams();
  // const [elementList, setElementList] = useState([]);
  const [deletedElement, setDeletedElement] = useState([]);
  const [fetch, setFetch] = useState(false);
  const { component, setRenderComponent } = usePodcastRightSidebarContext();
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
      let list = result.data.elementListe.map((item)=>{
// checking new elementsField is avialable or not
        if(item.elementsField){
          // if avialable change value with new value
          return{
            ...item,
            elementTypeName:{
              
              ...item.elementTypeName,
              field:item.elementTypeName.field.map((feildItem)=>{
                return {
                  ...feildItem,
                  value:item.elementsField?.fieldsList.find((it)=>it.key==feildItem.key)?.value

                }
              })


            
            }

          }
        }
        return {
          ...item
        }
       
      })

      console.log("updatedlist",list);

      // here we checking if user updeted value in feild list if user update value list elementsField becomes new key value pair


      setElementList(
        list
          ?.filter((item) => !item.isDeleted)
          .sort((a, b) => a.position - b.position)
      );
      setDeletedElement(
        list.filter((item) => item.isDeleted)
      );
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
              <div className="each-accordionbox">
                <h3 className="each-title">Podcast Types</h3>
                <div className="swipebox">
                  <div className="swipeplus">+</div>
                </div>
                <ul className="each-text custom-list">
                  <li
                    onClick={() =>
                      setRenderComponent(
                        <AddPodcastTypes setFetch={setFetch} close={() => {}} />
                      )
                    }
                  >
                    Add Podcast Type
                  </li>{" "}
                  <li
                    onClick={() =>
                      setRenderComponent(
                        <ManagePodcastType
                          setFetch={setFetch}
                          close={() => {}}
                        />
                      )
                    }
                  >
                    Manage Podcast Type
                  </li>
                </ul>
              </div>{" "}
              <div className="each-accordionbox">
                <h3 className="each-title">Podcast Genre</h3>
                <div className="swipebox">
                  <div className="swipeplus">+</div>
                </div>
                <ul className="each-text custom-list">
                  <li
                    onClick={() =>
                      setRenderComponent(
                        <AddPodcastGenre setFetch={setFetch} close={() => {}} />
                      )
                    }
                  >
                    Add Podcast Genre
                  </li>{" "}
                  <li
                    onClick={() =>
                      setRenderComponent(
                        <PodcastGenre setFetch={setFetch} close={() => {}} />
                      )
                    }
                  >
                    Manage Podcast Genre
                  </li>
                </ul>
              </div>
              <div className="each-accordionbox">
                <h3 className="each-title">Podcast</h3>
                <div className="swipebox">
                  <div className="swipeplus">+</div>
                </div>
                <ul className="each-text custom-list">
                  <li
                    onClick={() =>
                      setRenderComponent(
                        <AddPodCast setFetch={setFetch} close={() => {}} />
                      )
                    }
                  >
                    Add Podcast
                  </li>{" "}
                  <li
                    onClick={() =>
                      setRenderComponent(
                        <ManagePodcast setFetch={setFetch} close={() => {}} />
                      )
                    }
                  >
                    Manage Podcast
                  </li>
                </ul>
              </div>
              <div className="each-accordionbox">
                <h3 className="each-title">Podcast Album</h3>
                <div className="swipebox">
                  <div className="swipeplus">+</div>
                </div>
                <ul className="each-text custom-list">
                  <li
                    onClick={() =>
                      setRenderComponent(
                        <AddPodcastAlbum setFetch={setFetch} close={() => {}} />
                      )
                    }
                  >
                    Add Podcast Album
                  </li>{" "}
                  <li
                    onClick={() =>
                      setRenderComponent(
                        <ManageBanner setFetch={setFetch} close={() => {}} />
                      )
                    }
                  >
                    Manage Podcast Album
                  </li>
                </ul>
              </div>{" "}
              <div className="each-accordionbox">
                <h3 className="each-title">Banner</h3>
                <div className="swipebox">
                  <div className="swipeplus">+</div>
                </div>
                <ul className="each-text custom-list">
                  <li
                    onClick={() =>
                      setRenderComponent(
                        <AddBaner setFetch={setFetch} close={() => {}} />
                      )
                    }
                  >
                    Add Banner
                  </li>{" "}
                  <li
                    onClick={() =>
                      setRenderComponent(
                        <ManageBanner setFetch={setFetch} close={() => {}} />
                      )
                    }
                  >
                    Manage Banner
                  </li>
                </ul>
              </div>
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
            {!loading && (
              <>
                {id == "6426c2b52e8c8f8facfdc8ee" && (
                  <Podcasttheme1 fetch={fetch} elementList={elementList} />
                )}
                {id == "6426c5e02e8c8f8facfdc927" && (
                  <Podcasttheme2 fetch={fetch} elementList={elementList} />
                )}
              </>
            )}
            {/* <Ecommerceproductdetails /> */}

            {/* <EcommerceTheme1 elementList={elementList} /> */}

            {/*----Start New Themes----*/}
            {/* <Learning1 />  */}

            {/* <Learning2 /> */}


            {/* <Podcasttheme2 /> */}
            {/* <Otttheme1 /> */}
            {/* <Otttheme2 /> */}
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
