import React, { useState, useEffect } from "react";

import $ from "jquery";
import bitbucket from "../../images/bitbucket.svg";
import bitbucketnew from "../../images/bitbucketnew.svg";
import uploadicon from "../../images/uploadicon.png";
import DataTable from 'react-data-table-component';
import data from "../../data.json"
function Elements() {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };

  const [modalmanage, setModalmanage] = useState(false);
  const toggleModalmanage = () => {
    setModalmanage(!modal);
  };
  useEffect(() => {
    // window.$(".each-accordionbox:first-child").addClass("active").children(".each-text").slideDown();
    // window.$(".each-title").on("click",function(){
    //     if( window.$(this).parent().hasClass("active") ){
    //         window.$(this).next().slideUp();
    //         window.$(this).parent().removeClass("active");
    //       }
    //       else{
    //     window.$(".each-text").slideUp();
    //     window.$(".each-accordionbox").removeClass("active");
    //     window.$(this).parent().addClass("active");
    //     window.$(this).next().slideDown();
    //   }
    // });

    $(".each-accordionbox:first-child")
      .addClass("active")
      .removeClass("showLess")
      .children(".each-text")
      .slideDown();
    $(".each-title").on("click", function () {
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


  const columns = [
    {
      name: 'Id',
      selector: 'name',
      sortable: true,
    },
    {
      name: 'Image',
      selector: 'phone',
      sortable: true,
    },
    {
      name: 'Category Name',
      selector: 'email',
      sortable: true,
    },
    {
      name: 'Action',
      selector: 'dob',
    },
  ];


  return (
    <>
      <section id="elements-section">
        <div className="container">
          <div className="accordion_inner">
            <div className="accordion-section">
              <div className="each-accordionbox showLess">
                <h3 className="each-title">Element</h3>
                {/* <p className="each-text">
                  Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type and
                  scrambled it to make a type specimen book.
                </p> */}
                <div className="each-text">
                  <h3 className="each-title">Selected Element</h3>
                  <div className="app-modules-recommanded-top-box ">
                    <div className="app-modules-recomanded-short-box">
                      <div className="app-modules-recomanded-short-img-content">
                        <i className="fa-solid fa-store">
                          <span className="e-text"> Social</span>
                        </i>
                      </div>
                      <div className="app-modules-recomanded-short-img-content">
                        <span>
                          <input
                            type="checkbox"
                            id="E-Store-1"
                            name="E-Store-1"
                            defaultChecked=""
                          />
                        </span>
                        <span>
                          <i className="fa fa-home" aria-hidden="true" />
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="app-modules-recommanded-top-box ">
                    <div className="app-modules-recomanded-short-box">
                      <div className="app-modules-recomanded-short-img-content">
                        <i className="fa-solid fa-store">
                          <span className="e-text"> Social</span>
                        </i>
                      </div>
                      <div className="app-modules-recomanded-short-img-content">
                        <span>
                          <input
                            type="checkbox"
                            id="E-Store-1"
                            name="E-Store-1"
                            defaultChecked=""
                          />
                        </span>
                        <span>
                          <i className="fa fa-home" aria-hidden="true" />
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="app-modules-recommanded-top-box ">
                    <div className="app-modules-recomanded-short-box">
                      <div className="app-modules-recomanded-short-img-content">
                        <i className="fa-solid fa-store">
                          <span className="e-text"> Social</span>
                        </i>
                      </div>
                      <div className="app-modules-recomanded-short-img-content">
                        <span>
                          <input
                            type="checkbox"
                            id="E-Store-1"
                            name="E-Store-1"
                            defaultChecked=""
                          />
                        </span>
                        <span>
                          <i className="fa fa-home" aria-hidden="true" />
                        </span>
                      </div>
                    </div>
                  </div>

                  <h3 className="each-title">Deleted Element</h3>
                  <div className="app-modules-recommanded-top-box ">
                    <div className="app-modules-recomanded-short-box">
                      <div className="app-modules-recomanded-short-img-content">
                        <i className="fa-solid fa-store">
                          <span className="e-text"> Social</span>
                        </i>
                      </div>
                      <div className="app-modules-recomanded-short-img-content">
                        <span>
                          <input
                            type="checkbox"
                            id="E-Store-1"
                            name="E-Store-1"
                            defaultChecked=""
                          />
                        </span>
                        <span>
                          <i className="fa fa-home" aria-hidden="true" />
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="app-modules-recommanded-top-box ">
                    <div className="app-modules-recomanded-short-box">
                      <div className="app-modules-recomanded-short-img-content">
                        <i className="fa-solid fa-store">
                          <span className="e-text"> Social</span>
                        </i>
                      </div>
                      <div className="app-modules-recomanded-short-img-content">
                        <span>
                          <input
                            type="checkbox"
                            id="E-Store-1"
                            name="E-Store-1"
                            defaultChecked=""
                          />
                        </span>
                        <span>
                          <i className="fa fa-home" aria-hidden="true" />
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="app-modules-recommanded-top-box ">
                    <div className="app-modules-recomanded-short-box">
                      <div className="app-modules-recomanded-short-img-content">
                        <i className="fa-solid fa-store">
                          <span className="e-text"> Social</span>
                        </i>
                      </div>
                      <div className="app-modules-recomanded-short-img-content">
                        <span>
                          <input
                            type="checkbox"
                            id="E-Store-1"
                            name="E-Store-1"
                            defaultChecked=""
                          />
                        </span>
                        <span>
                          <i className="fa fa-home" aria-hidden="true" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="each-accordionbox showLess">
                <h3 className="each-title">Element</h3>
                {/* <p className="each-text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book.
              </p> */}
                <ul className="each-text custom-list">
                  <li onClick={toggleModal}>Add Category</li>
                  <li onClick={toggleModalmanage}>Manage Category</li>
                </ul>
              </div>
              <div className="each-accordionbox showLess">
                <h3 className="each-title">Product</h3>
                <p className="each-text">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {modal && (
        <div className="mainModal">
          <button className="closeIcon" onClick={toggleModal}>
            Close
          </button>

          <div className="mainModalWrapper">
            <div className="imageleft">
              <img src={bitbucket} className="img-fluid" alt="icon" />
            </div>
            <div className="imageright">
              <img src={bitbucketnew} className="img-fluid" alt="icon" />
            </div>
            <div className="background">
              <div className="shape" />
              <div className="shape" />
            </div>
            <form>
              <label htmlFor="name">Product Name</label>
              <input type="text" placeholder="Product Name" id="name" />
              {/* <label htmlFor="fileupload">Upload Image</label>
              <input type="file" id="fileupload" /> */}
              <label className="form_label">
                <img src={uploadicon} alt="" />
                <input type="file" className="form-control" id="uploadFile" />
                Drop Your Files
              </label>

              <label htmlFor="selectDrop">Select Option</label>
              <select id="selectDrop">
                <option>test1</option>
                <option>test1</option>
                <option>test1</option>
              </select>
              <label htmlFor="descText">Description</label>
              <textarea id="descText" name="descText" rows={4} cols={50} />

              <button>Submit</button>
            </form>
          </div>
        </div>
      )}

      {modalmanage && (
        <div className="mainModal" >
          <button className="closeIcon" onClick={toggleModalmanage}>
            Close
          </button>

          <  div className="mainModalWrapper" style={{ maxWidth: "60%" }}>
            <div className="imageleft">
              <img src={bitbucket} className="img-fluid" alt="icon" />
            </div>
            <div className="imageright">
              <img src={bitbucketnew} className="img-fluid" alt="icon" />
            </div>
            <div className="background">
              <div className="shape" />
              <div className="shape" />
            </div>

            <DataTable
              title="Employees"
              columns={columns}
              data={data}
              pagination
              highlightOnHover
            />
          </div>

        </div>
      )}


    </>
  );
}

export default Elements;
