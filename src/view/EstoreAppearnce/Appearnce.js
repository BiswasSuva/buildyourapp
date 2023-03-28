import React, { useState, useEffect } from "react";
import Mainmobile from "../Dashboard/Mainmobile";
import DashboardUi from "../../Component/DasboardUi/DashboardUi";
import { useParams } from "react-router-dom";
import { getThemeDetail } from "../../api/appApi";
import EcommerceTheme1 from "../Ecommerce/Theme1/index";
import Ecommerceproductdetails from "../Ecommerce/EcommerceProductdetailstheme1/index";
import Ecommerceproductdetails2 from "../Ecommerce/EcommerceProductdetailstheme2/index";
import EcommerceTheme2 from "../Ecommerce/Theme2/index";
import Learning1 from "../Learningtheme/Theme1/index";
import Learning2 from "../Learningtheme/Theme2/index";
import Learningthemedetails2 from "../Learningtheme/Learningthemedetails2/index";
import Learningthemedetails1 from "../Learningtheme/Learningthemedetails1/index";
import Podcasttheme1 from "../Podcast/Theme1/index";
import Podcastthemedetails1 from "../Podcast/Podcastthemedetails1/index";
import Podcastthemedetails2 from "../Podcast/Podcastthemedetails2/index";
import Podcasttheme2 from "../Podcast/Theme2/index";
import Otttheme1 from "../OTT/Theme1/index";
import Otttheme2 from "../OTT/Theme2/index";
import LeftSideUi from "../../Component/LeftSideUi/LeftSideUi";
import $, { data } from "jquery";
import ElementCard from "./ElementCard";
import uuid from "react-uuid";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import CategoryAddModal from "./CategoryAddModal";
import ManageCategory from "./ManageCategory";
import AddSubCategory from "./AddSubCategory";
import ManageSubcategory from "./ManageSubcategory";
import AddProduct from "./AddProduct";
import ManageProduct from "./ManageProduct";
import RightSidebar from "../../Layout/DashoboardLayout/RightSidebar";
import EstoreAddBanner from "./EstoreAddBanner";
import ManageBanner from "./ManageBanner";
import HttpClient from "../../utils/HttpClient";
import Swal from "sweetalert2";
import { useEstoreRightSidearContext } from "../../Providers/EcomRightSidebar";
import MobileScreenLoader from "../../Component/Loaders/MobileScreenLoader";
import { useElementList } from "../../Providers/ElemetProvider";

function Appearnce() {
  const { id, moduleID } = useParams();
  // const [elementList, setElementList] = useState([]);
  const [deletedElement, setDeletedElement] = useState([]);
  const [fetch, setFetch] = useState(false);
  const { component, setRenderComponent } = useEstoreRightSidearContext();
  const [loading, setLoading] = useState(false);
  const {elementList,setElementList} = useElementList()
  // console.log("my elemenmt");

  useEffect(() => {
    fetchTheme();
  }, [id]);
  const fetchTheme = async () => {
    setLoading(true);
    let result = await getThemeDetail(id);
    // return false
    console.log("themeDetail", result);
    if (result && result.status) {
      setElementList(
        result.data.elementListe
          ?.filter((item) => !item.isDeleted)
          .sort((a, b) => a.position - b.position)
      );
      setDeletedElement(
        result.data.elementListe.filter((item) => item.isDeleted)
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
                                        // elementList={elementList}
                                        // setElementList={setElementList}
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
                <h3 className="each-title">categories</h3>
                <div className="swipebox">
                  <div className="swipeplus">+</div>
                </div>
                <ul className="each-text custom-list">
                  <li
                    onClick={() =>
                      setRenderComponent(
                        <CategoryAddModal setFetch={setFetch} />
                      )
                    }
                  >
                    Add categories
                  </li>
                  <li
                    onClick={() =>
                      setRenderComponent(<ManageCategory setFetch={setFetch} />)
                    }
                  >
                    Manage categories
                  </li>
                </ul>
              </div>
              <div className="each-accordionbox">
                <h3 className="each-title">Sub Category</h3>
                <div className="swipebox">
                  <div className="swipeplus">+</div>
                </div>
                <ul className="each-text custom-list">
                  <li
                    onClick={() =>
                      setRenderComponent(<AddSubCategory close={() => {}} />)
                    }
                  >
                    Add Sub-Category
                  </li>
                  <li
                    onClick={() =>
                      setRenderComponent(
                        <ManageSubcategory setFetch={setFetch} />
                      )
                    }
                  >
                    Manage Sub-Category
                  </li>
                </ul>
              </div>
              <div className="each-accordionbox">
                <h3 className="each-title">Products</h3>
                <div className="swipebox">
                  <div className="swipeplus">+</div>
                </div>
                <ul className="each-text custom-list">
                  <li
                    onClick={() =>
                      setRenderComponent(
                        <AddProduct setFetch={setFetch} close={() => {}} />
                      )
                    }
                  >
                    Add Products
                  </li>
                  <li
                    onClick={() =>
                      setRenderComponent(<ManageProduct setFetch={setFetch} />)
                    }
                  >
                    Manage Products
                  </li>
                </ul>
              </div>
              <div className="each-accordionbox">
                <h3 className="each-title">Banners</h3>
                <div className="swipebox">
                  <div className="swipeplus">+</div>
                </div>
                <ul className="each-text custom-list">
                  <li
                    onClick={() =>
                      setRenderComponent(
                        <EstoreAddBanner setFetch={setFetch} close={() => {}} />
                      )
                    }
                  >
                    Add Banner
                  </li>
                  <li
                    onClick={() =>
                      setRenderComponent(<ManageBanner setFetch={setFetch} />)
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
                {id == "63f714eb2329e60244665cb9" && (
                  <EcommerceTheme1 fetch={fetch} elementList={elementList} />
                )}
                {id == "63f738162329e60244665f79" && (
                  <EcommerceTheme2 fetch={fetch} elementList={elementList} />
                )}
              </>
            )}

            {/* <Ecommerceproductdetails /> */}
            {/* <Ecommerceproductdetails2 /> */}

            {/* <EcommerceTheme1 elementList={elementList} /> */}

            {/*----Start New Themes----*/}
            {/* <Learning1 />  */}
            {/* <Learningthemedetails1 /> */}

            {/* <Learning2 /> */}

            {/* <Learningthemedetails2 /> */}

            {/* <Podcasttheme1/> */}

            {/* <Podcastthemedetails1 /> */}

            {/* <Podcastthemedetails2 /> */}

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
