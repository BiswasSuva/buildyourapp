import React, { useEffect, useState } from "react";
import { ecomAddCat, ecomEditCat, uploadImage } from "../../api/appApi";
import { motion } from "framer-motion";
import Heading from "../../Component/RenderComponent/Heading";
import TextBox from "../../Component/RenderComponent/TextBox";
import TextArea from "../../Component/RenderComponent/TextArea";
import DropFile from "../../Component/RenderComponent/DropFile";
import SubmitButton from "../../Component/RenderComponent/SubmitButton";
import { useEstoreRightSidearContext } from "../../Providers/EcomRightSidebar";
import ManageCategory from "./ManageCategory";

function CategoryAddModal({
  setFetch,
  editEnable = false,
  editElement = null,
}) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [description, setdescription] = useState("");
  const { setRenderComponent } = useEstoreRightSidearContext();

  const imageHandle = async (file) => {
    let data = new FormData();
    data.append("image", file);
    let result = await uploadImage(data);
    console.log(result);
    if (result && result.status) {
      setImage(result.image.url);
    } else {
      alert("something error");
    }
  };

  const submit = async (e) => {
    e.preventDefault();

    if (name.trim() != "" && description.trim() != "" && image.trim != "") {
      let dataSend = {
        name,
        description,
        image,
      };
      let result;
      if (!editEnable) {
        result = await ecomAddCat(dataSend);
      } else {
        result = await ecomEditCat(editElement?._id, dataSend);
      }
      if (result && result.status) {
        setFetch((prev) => !prev);
        setRenderComponent(<ManageCategory setFetch={setFetch} />);
      } else {
        alert("server error");
      }
    } else {
      alert("All feilds are required");
    }
  };
  useEffect(() => {
    if (editEnable) {
      setName(editElement?.name);
      setdescription(editElement?.description);
      setImage(editElement?.image);
    }
  }, [editElement]);
  return (
    <motion.div
      animate={{ x: [400, -5, 0] }}
      transition={{ ease: "easeOut", duration: 1 }}
      // initial={false}

      id="right-sidebar hide-scrollbar"
      className="right-sidebar"
      style={{ paddingBottom: "50px" }}
    >
      {/*------------Product---------------*/}

      {/* <div role="main" className="form-all">

          <ul>
            <li id="cid_18" className="form-input-wide" data-type="control_head">
              <div className="form-header-group  header-large">
                <div className="header-text httal htvam">
                  <h1 id="header_18" className="form-header" data-component="header">
                    Add Product
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
                Product Name
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
            <li className="form-line" data-type="control_email" id="id_16">
              <label
                className="form-label form-label-top form-label-auto"
                id="label_10"
                htmlFor="input_16"
              >
                Price
              </label>
              <div id="cid_16" className="form-input-wide">

                <input
                  type="email"
                  id="input_10"
                  name="q16_yourEmail16"
                  className="form-textbox"

                  placeholder=" "
                  data-component="email"
                  aria-labelledby="label_10"
                />
              </div>
            </li>
            <li className="form-line" data-type="control_email" id="id_16">
              <label
                className="form-label form-label-top form-label-auto"
                id="label_11"
                htmlFor="input_16"
              >
                Sell  Price
              </label>
              <div id="cid_16" className="form-input-wide">

                <input
                  type="text"
                  id="input_11"
                  name="q16_yourEmail16"
                  className="form-textbox"

                  placeholder=" "
                  data-component="email"
                  aria-labelledby="label_11"
                />
              </div>
            </li>

            <li className="form-line" data-type="control_email" id="id_16">
              <label
                className="form-label form-label-top form-label-auto"
                id="label_16"
                htmlFor="input_16"
              >
                Discount
              </label>
              <div id="cid_16" className="form-input-wide">

                <input
                  type="email"
                  id="input_16"
                  name="q16_yourEmail16"
                  className="form-textbox validate[Email]"
                  data-defaultvalue=""
                  size={32}
                  defaultValue=""
                  placeholder=" "
                  data-component="email"
                  aria-labelledby="label_16"
                />
              </div>
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

            <li className="form-line" data-type="control_textarea" id="id_27">
              <label className="formlabel">
                <img src={uploadimg} style={{ maxWidth: "50px" }} className="img-fluid" />
                <input type="file" className="form-control" id="uploadFile" accept="image/*" />
                <div>

                </div>

                Drop Your Files
              </label>

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

      {/*--------------Categories---------------*/}

      <div role="main" className="form-all">
        <Heading heading="Add Categories" />
        <ul
          className="form-section page-section"
          style={{ height: "600px", overflowY: "auto" }}
        >
          <TextBox
            title="Category Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <DropFile onChange={(e) => imageHandle(e.target.files[0])} />
          {image && (
            <img src={image} style={{ height: "100px", width: "100px" }} />
          )}

          <TextArea
            title="Category Description"
            value={description}
            onChange={(e) => setdescription(e.target.value)}
          />

          <SubmitButton
            title={editEnable ? "Update" : "Submit"}
            onClick={submit}
          />
        </ul>
      </div>

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
    </motion.div>
  );
}

export default CategoryAddModal;
