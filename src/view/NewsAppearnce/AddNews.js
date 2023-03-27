import React, { useEffect, useState } from "react";
import { addNews, editNews, imageUploadOttCategory, newsImageUpload } from "../../api/appApi";
import { motion } from "framer-motion";
import Heading from "../../Component/RenderComponent/Heading";
import TextBox from "../../Component/RenderComponent/TextBox";
import TextArea from "../../Component/RenderComponent/TextArea";
import SubmitButton from "../../Component/RenderComponent/SubmitButton";
import { useNewsRightSidearContext } from "../../Providers/NewsRightSidebar";
import SelectDropDown from "../../Component/RenderComponent/SelectDropDown";
import DropFile from "../../Component/RenderComponent/DropFile";
import useGetApi from "../../customHooks/useGetApi";
import ManageNews from "./ManageNews";
// import OttCategories from "./OttCategories";

function AddNews({ setFetch, editEnable = false, editElement = null }) {
  const [name, setName] = useState("");
  const [description, setdescription] = useState("");
  const { setRenderComponent } = useNewsRightSidearContext();
  const [image, setImage] = useState("");
  const [newscatID,setNewscatID] = useState("")

  const newsCategories = useGetApi("news-category") 

  const imageHandle = async (file) => {
 
    let result = await newsImageUpload(file);
    console.log(result);
    if (result && result.status) {
      setImage(result.url);
    } else {
      alert("something error");
    }
  };

  const submit = async (e) => {
    e.preventDefault();

    if (name.trim() != "" && description.trim() != "" && image.trim() != "") {
      let dataSend = {
        title:name,
        image,
        description,
        newscatID
      };
      console.log(dataSend);

      let result;
      if (!editEnable) {
        result = await addNews(dataSend);
      } else {
        result = await editNews(editElement?._id, dataSend);
      }
      if (result && result.status) {
        setFetch((prev) => !prev);
        setRenderComponent(<ManageNews setFetch={setFetch} />);
      } else {
        alert("server error");
      }
    } else {
      alert("All feilds are required");
    }
  };
  useEffect(() => {
    if (editEnable) {
      setName(editElement?.title);
      setdescription(editElement?.description);
      setImage(editElement?.image);
      setNewscatID(editElement?.newscatID)
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
        <Heading heading="Add News" />
        <ul
          className="form-section page-section"
          style={{ height: "600px", overflowY: "auto" }}
        >
          <SelectDropDown
            title="Select News Category"
            data={newsCategories}
            valueKey="_id"
            showingKey="name"
           
            onChange={(val) => setNewscatID(val)}
            value={newscatID}
          />
          <TextBox
            title="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <TextArea
            title="Description"
            value={description}
            onChange={(e) => setdescription(e.target.value)}
          />
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

export default AddNews;
