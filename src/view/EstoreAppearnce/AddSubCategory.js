import React, { useState, useEffect } from "react";
import { ecomAddSubCat, ecomEditSubCat, uploadImage } from "../../api/appApi";
import useEcomCategory from "../../customHooks/useEcomCategory";
import { motion } from "framer-motion";
import Heading from "../../Component/RenderComponent/Heading";
import TextBox from "../../Component/RenderComponent/TextBox";
import TextArea from "../../Component/RenderComponent/TextArea";
import DropFile from "../../Component/RenderComponent/DropFile";
import SubmitButton from "../../Component/RenderComponent/SubmitButton";
import SelectDropDown from "../../Component/RenderComponent/SelectDropDown";
import { useEstoreRightSidearContext } from "../../Providers/EcomRightSidebar";
import ManageSubcategory from "./ManageSubcategory";

function AddSubCategory({ close, editEnable = false, editElement = null }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [description, setdescription] = useState("");
  const [categoryID, setcategoryID] = useState("");
  const category = useEcomCategory();
  const { setRenderComponent } = useEstoreRightSidearContext();

  const imageHandle = async (file) => {
    let data = new FormData();
    data.append("image", file);
    let result = await uploadImage(data);
    console.log(result);
    if (result && result.status) {
      setImage(result.image.url);
    } else {
      alert("server error");
    }
  };

  const submit = async (e) => {
    e.preventDefault();
    if (
      name.trim() != "" &&
      // description.trim() != "" &&
      image.trim != "" &&
      categoryID != ""
    ) {
      let dataSend = {
        name,
        // description,
        image,
        categoryID,
      };
      let result;
      if (!editEnable) {
        result = await ecomAddSubCat(dataSend);
      } else {
        result = await ecomEditSubCat(editElement._id, dataSend);
        console.log();
      }
      if (result && result.status) {
        setRenderComponent(<ManageSubcategory />);
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
      setcategoryID(editElement?.categoryID);
    }
  }, [editElement]);
  return (
    <motion.div
      animate={{ x: [400, -5, 0] }}
      transition={{ ease: "easeOut", duration: 1 }}
      id="right-sidebar hide-scrollbar"
      className="right-sidebar"
      style={{ paddingBottom: "50px" }}
    >
      <div role="main" className="form-all">
        <Heading heading={editEnable?"Update Sub-Categories": "Add Sub-Categories" }/>
        <ul
          className="form-section page-section"
          style={{ height: "600px", overflowY: "auto" }}
        >
          <SelectDropDown
            title="Select Category"
            data={category}
            showingKey="name"
            valueKey="_id"
            value={categoryID}
            onChange={(val) => {
              setcategoryID(val);
            }}
          />
          <TextBox
            title="Sub-Category Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <DropFile onChange={(e) => imageHandle(e.target.files[0])} />
          {image && (
            <img src={image} style={{ height: "100px", width: "100px" }} />
          )}

          {/* <TextArea
            title="Sub-Category Description"
            value={description}
            onChange={(e) => setdescription(e.target.value)}
          /> */}

          <SubmitButton
            title={editEnable ? "Update" : "Submit"}
            onClick={submit}
          />
        </ul>
      </div>
    </motion.div>
  );
}

export default AddSubCategory;
