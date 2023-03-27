import React, { useEffect, useState } from "react";
import { addOttCategories, editOttCategories, imageUploadOttCategory } from "../../api/appApi";
import { motion } from "framer-motion";
import Heading from "../../Component/RenderComponent/Heading";
import TextBox from "../../Component/RenderComponent/TextBox";
import TextArea from "../../Component/RenderComponent/TextArea";
import SubmitButton from "../../Component/RenderComponent/SubmitButton";
import { useOttRightSidearContext } from "../../Providers/OttRightSidebar";
import SelectDropDown from "../../Component/RenderComponent/SelectDropDown";
import DropFile from "../../Component/RenderComponent/DropFile";
import OttCategories from "./OttCategories";

function AddOttcategories({ setFetch, editEnable = false, editElement = null }) {
  const [name, setName] = useState("");
  const [description, setdescription] = useState("");
  const { setRenderComponent } = useOttRightSidearContext();
  const [image, setImage] = useState("");


  const imageHandle = async (file) => {
    let data = new FormData();
    data.append("image", file);
    let result = await imageUploadOttCategory(data);
    console.log(result);
    if (result && result.status) {
      setImage(result.url);
    } else {
      alert("something error");
    }
  };


  const submit = async (e) => {
    e.preventDefault();

    if (name.trim() != "" && image.trim() !="") {
      let dataSend = {
        name,
        image,
      };
      let result;
      if (!editEnable) {
        result = await addOttCategories(dataSend);
      } else {
        result = await editOttCategories(editElement?._id, dataSend);
      }
      if (result && result.status) {
        setFetch((prev) => !prev);
        setRenderComponent(<OttCategories setFetch={setFetch} />);
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
      <div role="main" className="form-all">
        <Heading heading="Add Ott-categories" />
        <ul
          className="form-section page-section"
          style={{ height: "600px", overflowY: "auto" }}
        >
          <TextBox
            title="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          {/* <TextArea
            title="Description"
            value={description}
            onChange={(e) => setdescription(e.target.value)}
          /> */}
         <DropFile onChange={(e) => imageHandle(e.target.files[0])} />
          {image && (
            <img src={image} style={{ height: "100px", width: "100px" }} />
          )}

          <SubmitButton
            title={editEnable ? "Update" : "Submit"}
            onClick={submit}
          />
        </ul>
      </div>
    </motion.div>
  );
}

export default AddOttcategories;
