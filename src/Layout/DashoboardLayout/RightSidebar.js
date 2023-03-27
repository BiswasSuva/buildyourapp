import React, { useEffect, useState } from "react";
import Icon from "../../AllIcons/Icon";
import { Allicons } from "../../AllIcons/Allicons";
import Addproduct from "../../Component/Multistepper/Addproduct";
import SelectIcons from "../../Component/SelectIcon/SelectIcons";
import SearchableDropDown from "../../Component/CustomComponent/SearchableDropDown";
import { motion, AnimatePresence } from "framer-motion";
import Multisteps from "../../Component/Multistepper/Multisteps"
import Datatable from "../../Component/Datatable/Datatable";
const arr = [
  {
    id: "c408c71f-f1a5-7bcf-7bab-a7b4f74b5ff6",
    key: "Placeholder",
    value: "",
    elementFieldType: {
      _id: "63c928be289859e0479cea84",
      haveOption: false,
      isDeleted: false,
      modifiedOn: "2023-01-19T11:20:58.474Z",
      elementFieldType: "Text",
      createdOn: "2023-01-19T11:25:50.575Z",
      __v: 0,
    },
    option: [
      {
        label: "",
        value: "",
      },
    ],
    condition: false,
    validation: [
      {
        feildId: "",
        chooseOption: "",
      },
    ],
  },
  {
    id: "ba0c31b6-61c7-a40c-d969-024a110fa2da",
    key: "Left Icon Show",
    elementFieldType: {
      _id: "63c928e6289859e0479cea9f",
      haveOption: true,
      isDeleted: false,
      modifiedOn: "2023-01-19T11:20:58.474Z",
      elementFieldType: "radio",
      createdOn: "2023-01-19T11:26:30.404Z",
      __v: 0,
    },
    value: "",
    optionHas: false,
    option: [
      {
        label: "Yes",
        value: "yes",
      },
      {
        label: "No",
        value: "no",
      },
    ],
    validation: [
      {
        feildId: "",
        chooseOption: "",
      },
    ],
  },
  {
    id: "56db5401-a282-efe7-8758-fb1ea3f153bd",
    key: "Select Search Icon",
    elementFieldType: {
      _id: "63ca2df3289859e0479ced27",
      haveOption: false,
      isDeleted: false,
      modifiedOn: "2023-01-19T11:20:58.474Z",
      elementFieldType: "Icons",
      createdOn: "2023-01-20T06:00:19.408Z",
      __v: 0,
    },
    value: "",
    optionHas: false,
    option: [
      {
        label: "",
        value: "",
      },
    ],
    validation: [
      {
        feildId: "ba0c31b6-61c7-a40c-d969-024a110fa2da",
        chooseOption: "yes",
      },
    ],
    condition: true,
  },
];

function RightSidebar({ globalindex, feilds, elementList, setElementList }) {
  console.log("selected", feilds);


  const [feildList, setFeildList] = useState([]);
  useEffect(() => {
    setFeildList(feilds?.elementTypeName?.field ?? []);
  }, [feilds,globalindex]);

  function validationChecking(validateArray) {
    console.log(validateArray);
    let arr = [];
    for (const element of validateArray) {
      let find = feildList.find(
        (item) =>
          item.id == element.feildId && item.value === element.chooseOption
      );
      if (find) {
        arr.push(find);
      }
    }
    if (validateArray.length == arr.length) {
      // console.log();
      return true;
    } else {
      // alert("kjk")
      return false;
    }
  }





  const listItems = document.getElementsByClassName('list_option');
  for (let i = 0; i < listItems.length; ++i) {
    listItems[i].addEventListener('click', function () {
      document.getElementsByClassName('list_btn')[0].innerHTML = this.title;
    });
  }
  return (
    <>
      <motion.div
        key={globalindex}
        animate={{ x: [400, -5, 0] }}
        transition={{ ease: "easeOut", duration: 1 }}
        // initial={false}

        id="right-sidebar hide-scrollbar"
        className="right-sidebar"
        style={{ paddingBottom: "50px" }}
      >
        {feilds?.elementTypeName.field?.map((item, index) => {
          let validate = true;
          if (item.condition) {
            validate = validationChecking(item.validation);
          }
          if (validate) {
            return (
              <div className="title-dynamic" key={item.id}>
                <motion.label
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  {item.key}
                </motion.label>

                {(!item.elementFieldType.haveOption &&
                  item.elementFieldType.elementFieldType?.toLowerCase() ==
                  "text") ||
                  item.elementFieldType.elementFieldType?.toLowerCase() ==
                  "number" ? (
                  <input
                    type={item.elementFieldType.elementFieldType?.toLowerCase()}
                    className="form-control"
                    placeholder="Set Text Here..."
                    value={item.value}
                    onChange={(val) => {
                      let updated = [...elementList];
                      console.log(updated[globalindex]);
                      updated[globalindex].elementTypeName.field[index].value =
                        val.target.value;
                      setElementList(updated);
                    }}
                  />
                ) : item.elementFieldType.elementFieldType?.toLowerCase() ==
                  "radio" ? (
                  <>
                    {item.option.map((optionItem, opi) => {
                      return (
                        <div className="custom-control custom-radio" key={opi}>
                          <input
                            name={item.key.trim()}
                            className="custom-control-input"
                            value={optionItem.value}
                            id={`defaultChecked2${index + opi}`}
                            // name={`defaultChecked2${opi}`}
                            type="radio"
                            onChange={(val) => {
                              let updated = [...elementList];
                              updated[globalindex].elementTypeName.field[
                                index
                              ].value = val.target.value;
                              setElementList(updated);
                            }}
                          />
                          <label
                            className="custom-control-label"
                            htmlFor={`defaultChecked2${index + opi}`}
                          >
                            {optionItem.label}
                          </label>
                        </div>
                      );
                    })}
                  </>
                ) : item.elementFieldType.elementFieldType?.toLowerCase() ==
                  "dropdown" ? (
                  <div>
                    <div className="drop"></div>
                    <select
                      value={item.value}
                      onChange={(val) => {
                        let updated = [...elementList];
                        updated[globalindex].elementTypeName.field[index].value =
                          val.target.value;
                        setElementList(updated);
                      }}
                    >
                      <option disabled>Select option</option>
                      {item.option.map((optionItem, i) => {
                        return (
                          <option value={optionItem.value} key={i}>
                            {optionItem.label}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                ) : item.elementFieldType.elementFieldType?.toLowerCase() ===
                  "icons" ? (
                  <SelectIcons
                    value={item.value == "none" ? "" : item.value?.name}
                    onClick={(val) => {
                      let updated = [...elementList];
                      console.log(
                        updated[globalindex].elementTypeName.field[index].value
                      );
                      updated[globalindex].elementTypeName.field[index].value =
                        val;
                      setElementList(updated);
                    }}
                  />
                ) : item.elementFieldType.elementFieldType?.toLowerCase() ===
                  "font-family" ? (
                  <SearchableDropDown
                    value={item.value}
                    onClick={(val) => {
                      let updated = [...elementList];
                      console.log(
                        updated[globalindex].elementTypeName.field[index].value
                      );
                      updated[globalindex].elementTypeName.field[index].value =
                        val;
                      setElementList(updated);
                    }}
                  />
                ) : item.elementFieldType.elementFieldType?.toLowerCase() ===
                  "color" ? (
                  <input
                    type={item.elementFieldType.elementFieldType?.toLowerCase()}
                    className="form-control"
                    placeholder="Set Text Here..."
                    value={item.value}
                    onChange={(val) => {
                      let updated = [...elementList];
                      console.log(updated[globalindex]);
                      updated[globalindex].elementTypeName.field[index].value =
                        val.target.value;
                      setElementList(updated);
                    }}
                  />
                ) : (
                  ""
                )}
              </div>
            );
          }
        })}
        {/* <SearchableDropDown /> */}

        {/* <div className="title-dynamic">
          <label>Set From Variable</label>
          <input
            type="text"
            className="form-control"
            placeholder="Set Text Here..."
          />
        </div>

        <div className="title-dynamic">
          <label>Test</label>
          <select>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </select>
        </div>

        <div className="title-dynamic">
          <label>Test</label>
          <div className="custom-control custom-radio">
            <input
              type="radio"
              className="custom-control-input"
              id="defaultChecked2"
              name="defaultExample2"
              defaultChecked=""
            />
            <label className="custom-control-label" htmlFor="defaultChecked2">
              Male
            </label>
          </div>

          <div className="custom-control custom-radio">
            <input
              type="radio"
              className="custom-control-input"
              id="defaultChecked3"
              name="defaultExample2"
            />
            <label className="custom-control-label" htmlFor="defaultChecked3">
              Female
            </label>
          </div>

          <label className="mt-4">Test</label>
          <div className="custom-control custom-checkbox pmd-checkbox">
            <input
              className="custom-control-input"
              type="checkbox"
              defaultValue=""
              id="customCheckbox1"
              defaultChecked=""
            />
            <label
              className="custom-control-label pmd-checkbox-ripple-effect"
              htmlFor="customCheckbox1"
              style={{ fontSize: "14px", marginBottom: "0", color: "#fff" }}
            >
              On
            </label>
          </div>
        </div>

        <div className="alignment-visibility">
          <label className="">Alignment</label>
          <div className="d-flex align-items-center justify-content-between">
            <div className="alignmentBox">
              <label style={{ fontSize: "12px" }}>Horizontal Alignment</label>
              <input type="range" min="0" max="100" />
            </div>
            <div className="alignmentBox">
              <input type="text" className="form-control" />
            </div>
          </div>
          <div className="d-flex align-items-center justify-content-between">
            <div className="alignmentBox">
              <label style={{ fontSize: "12px" }}>Horizontal Alignment</label>
              <input type="range" />
            </div>
            <div className="alignmentBox">
              <input type="text" className="form-control" />
            </div>
          </div>
        </div>

        <div className="button-visibility">
          <button
            type="button"
            className="btn main-menu-link btn-big btn-success"
            style={{ color: "rgb(255, 255, 255)", margin: "15px auto" }}
          >
            Submit
          </button>
        </div> */}



        {/*------------Product---------------*/}
        {/* <Addproduct/> */}
        {/* <Multisteps /> */}

        {/*--------------Categories---------------*/}

        {/* <div role="main" className="form-all">

          <ul>
            <li id="cid_18" className="form-input-wide" data-type="control_head">
              <div className="form-header-group  header-large">
                <div className="header-text httal htvam">
                  <h1 id="header_18" className="form-header" data-component="header">
                    Add Categories
                  </h1>

                </div>
              </div>
            </li>
          </ul>
          <ul className="form-section page-section" style={{ height: "600px", overflowY: "auto" }}>


            <li className="form-line" data-type="control_fullname" id="id_15">
              <label
                className="form-label form-label-top form-label-auto"
                id="label_15"
                htmlFor="first_35"
              >
                Category Name
              </label>
              <div id="cid_15" className="form-input-wide">
                <div data-wrapper-react="true">
                  <span
                    className="form-sub-label-container"
                    style={{ verticalAlign: "top" }}
                    data-input-type="first"
                  >
                    <input
                      type="text"
                      id="first_35"
                      name="q15_yourName[first]"
                      className="form-textbox"
                      data-defaultvalue=""
                      autoComplete="section-input_15 given-name"
                      size={10}
                      defaultValue=""
                      data-component="first"
                      aria-labelledby="label_15 sublabel_15_first"
                    />

                  </span>

                </div>
              </div>
            </li>


            <li className="form-line" data-type="control_textarea" id="id_27">
              <label className="formlabel">
                <img src={uploadimg} style={{ maxWidth: "50px" }} className="img-fluid" />
                <input type="file" className="form-control" id="uploadFile" accept="image/*" />
                <div>

                </div>

                Drop Your Files
              </label>

            </li>

            <li className="form-line" data-type="control_textarea" id="id_17">
              <label
                className="form-label form-label-top form-label-auto"
                id="label_17"
                htmlFor="input_37"
              >

                Description
              </label>
              <div id="cid_17" className="form-input-wide">

                <textarea
                  id="input_37"
                  className="form-textarea"
                  name="q17_yourMessage"
                  cols={60}
                  rows={9}
                  data-component="textarea"
                  aria-labelledby="label_17"

                />{" "}
              </div>
            </li>

            <button
              id="input_14"
              type="submit"
              className="form-submit-button submit-button jf-form-buttons jsTest-submitField conditionallyDisabled"
              data-component="button"
              data-content=""
              disabled=""
            >
              Submit
            </button>

          </ul>
        </div> */}


        {/*--------------Sub Categories---------------*/}
        {/* <div role="main" className="form-all">

          <ul>
            <li id="cid_18" className="form-input-wide" data-type="control_head">
              <div className="form-header-group  header-large">
                <div className="header-text httal htvam">
                  <h1 id="header_18" className="form-header" data-component="header">
                    Add Sub-Categories
                  </h1>

                </div>
              </div>
            </li>
          </ul>
          <ul className="form-section page-section" style={{ height: "600px", overflowY: "auto" }}>


            <li className="form-line" id="id_150">

              <label
                className="form-label form-label-top form-label-auto"
                id="label_15"
                htmlFor="first_1"
              >
                Select Category
              </label>
              <div className="menu_container">
                <button className="list_btn">Select an option</button>
                <span className="button_arrow" />
                <div className="option_container">
                  <label className="option_field">
                    <input
                      className="list_option"
                      type="radio"
                      name="list"
                      title="Option 1"
                    />
                    Option 1
                    <span className="checkmark" />
                  </label>
                  <label className="option_field">
                    <input
                      className="list_option"
                      type="radio"
                      name="list"
                      title="Option 2"
                    />
                    Option 2
                    <span className="checkmark" />
                  </label>
                  <label className="option_field">
                    <input
                      className="list_option"
                      type="radio"
                      name="list"
                      title="Option 3"
                    />
                    Option 3
                    <span className="checkmark" />
                  </label>
                  <label className="option_field">
                    <input
                      className="list_option"
                      type="radio"
                      name="list"
                      title="Option 4"
                    />
                    Option 4
                    <span className="checkmark" />
                  </label>
                  <label className="option_field">
                    <input
                      className="list_option"
                      type="radio"
                      name="list"
                      title="Option 5"
                    />
                    Option 5
                    <span className="checkmark" />
                  </label>
                  <label className="option_field">
                    <input
                      className="list_option"
                      type="radio"
                      name="list"
                      title="Option 6"
                    />
                    Option 6
                    <span className="checkmark" />
                  </label>
                </div>
              </div>
            </li>

            <li className="form-line" data-type="control_fullname" id="id_15">
              <label
                className="form-label form-label-top form-label-auto"
                id="label_15"
                htmlFor="first_15"
              >
                Sub Category Name
              </label>
              <div id="cid_15" className="form-input-wide">
                <div data-wrapper-react="true">
                  <span
                    className="form-sub-label-container"
                    style={{ verticalAlign: "top" }}
                    data-input-type="first"
                  >
                    <input
                      type="text"
                      id="first_15"
                      name="q15_yourName[first]"
                      className="form-textbox"
                      data-defaultvalue=""
                      autoComplete="section-input_15 given-name"
                      size={10}
                      defaultValue=""
                      data-component="first"
                      aria-labelledby="label_15 sublabel_15_first"
                    />

                  </span>

                </div>
              </div>
            </li>

            <li className="form-line" data-type="control_textarea" id="id_27">
              <label className="formlabel">
                <img src={uploadimg} style={{ maxWidth: "50px" }} className="img-fluid" />
                <input type="file" className="form-control" id="uploadFile" accept="image/*" />
                <div>

                </div>

                Drop Your Files
              </label>

            </li>


            <li className="form-line" data-type="control_textarea" id="id_17">
              <label
                className="form-label form-label-top form-label-auto"
                id="label_17"
                htmlFor="input_17"
              >

                Description
              </label>
              <div id="cid_17" className="form-input-wide">

                <textarea
                  id="input_17"
                  className="form-textarea"
                  name="q17_yourMessage"
                  cols={60}
                  rows={9}
                  data-component="textarea"
                  aria-labelledby="label_17"

                />{" "}
              </div>
            </li>

            <button
              id="input_14"
              type="submit"
              className="form-submit-button submit-button jf-form-buttons jsTest-submitField conditionallyDisabled"
              data-component="button"
              data-content=""
              disabled=""
            >
              Submit
            </button>

          </ul>
        </div> */}

        {/*---------------Banner------------------*/}
        {/* <div role="main" className="form-all">

          <ul>
            <li id="cid_18" className="form-input-wide" data-type="control_head">
              <div className="form-header-group  header-large">
                <div className="header-text httal htvam">
                  <h1 id="header_18" className="form-header" data-component="header">
                    Add Banner
                  </h1>

                </div>
              </div>
            </li>
          </ul>
          <ul className="form-section page-section" style={{ height: "600px", overflowY: "auto" }}>
            <li className="form-line" data-type="control_fullname" id="id_15">
              <label
                className="form-label form-label-top form-label-auto"
                id="label_15"
                htmlFor="first_15"
                style={{marginTop: "15px"}}
              >
               Banner Title
              </label>
              <div id="cid_15" className="form-input-wide">
                <div data-wrapper-react="true">
                  <span
                    className="form-sub-label-container"
                    style={{ verticalAlign: "top" }}
                    data-input-type="first"
                  >
                    <input
                      type="text"
                      id="first_15"
                      name="q15_yourName[first]"
                      className="form-textbox"
                      data-defaultvalue=""
                      autoComplete="section-input_15 given-name"
                      size={10}
                      defaultValue=""
                      data-component="first"
                      aria-labelledby="label_15 sublabel_15_first"
                    />

                  </span>

                </div>
              </div>
            </li>

            <li className="form-line" data-type="control_textarea" id="id_27">
              <label className="formlabel">
                <img src={uploadimg} style={{ maxWidth: "50px" }} className="img-fluid" />
                <input type="file" className="form-control" id="uploadFile" accept="image/*" />
                <div>

                </div>

                Drop Your Files
              </label>

            </li>
            
            <li className="form-line" id="id_150">
              <label
                className="form-label form-label-top form-label-auto"
                id="label_15"
                htmlFor="first_1"
              >
                Banner Action
              </label>
              <div className="menu_container">
                <button className="list_btn">Banner Action</button>
                <span className="button_arrow" />
                <div className="option_container">
                  <label className="option_field">
                    <input
                      className="list_option"
                      type="radio"
                      name="list"
                      title="Option 1"
                    />
                    Category
                    <span className="checkmark" />
                  </label>
                  <label className="option_field">
                    <input
                      className="list_option"
                      type="radio"
                      name="list"
                      title="Option 2"
                    />
                    Sub Category
                    <span className="checkmark" />
                  </label>
                  <label className="option_field">
                    <input
                      className="list_option"
                      type="radio"
                      name="list"
                      title="Option 3"
                    />
                    Product
                    <span className="checkmark" />
                  </label>
                </div>
              </div>
            </li>
            <li className="form-line" id="id_150">
              <label
                className="form-label form-label-top form-label-auto"
                id="label_15"
                htmlFor="first_1"
              >
                Action List
              </label>
              <div className="menu_container">
                <button className="list_btn">Banner Action</button>
                <span className="button_arrow" />
                <div className="option_container">
                  <label className="option_field">
                    <input
                      className="list_option"
                      type="radio"
                      name="list"
                      title="Option 1"
                    />
                    Category
                    <span className="checkmark" />
                  </label>
                  <label className="option_field">
                    <input
                      className="list_option"
                      type="radio"
                      name="list"
                      title="Option 2"
                    />
                    Sub Category
                    <span className="checkmark" />
                  </label>
                  <label className="option_field">
                    <input
                      className="list_option"
                      type="radio"
                      name="list"
                      title="Option 3"
                    />
                    Product
                    <span className="checkmark" />
                  </label>
                </div>
              </div>
            </li>
         

            <button
              id="input_14"
              type="submit"
              className="form-submit-button submit-button jf-form-buttons jsTest-submitField conditionallyDisabled"
              data-component="button"
              data-content=""
              disabled=""
            >
              Submit
            </button>

          </ul>
        </div>  */}



{/*  Common Datatable      */}

        {/* <Datatable /> */}
        <button
          id="input_14"
          type="submit"
          className="form-submit-button submit-button jf-form-buttons jsTest-submitField conditionallyDisabled"
          data-component="button"
          data-content=""
          disabled=""
        >
          Submit
        </button>

      </motion.div>

    </>

  );
}

export default RightSidebar;
