import React, { useEffect, useState } from "react";
import { ecomAddCat, ecomEditCat, uploadImage } from "../../api/appApi";
import { motion } from "framer-motion";
import Heading from "../../Component/RenderComponent/Heading";
import TextBox from "../../Component/RenderComponent/TextBox";
import TextArea from "../../Component/RenderComponent/TextArea";
import DropFile from "../../Component/RenderComponent/DropFile";
import SubmitButton from "../../Component/RenderComponent/SubmitButton";
import { useEstoreRightSidearContext } from "../../Providers/EcomRightSidebar";
import { useElementList } from "../../Providers/ElemetProvider";
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
  const { rerender, setRender } = useElementList();

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

    if (name.trim() != "" && image.trim != "") {
      let dataSend = {
        name,
        // description,
        image,
      };
      let result;
      if (!editEnable) {
        result = await ecomAddCat(dataSend);
      } else {
        result = await ecomEditCat(editElement?._id, dataSend);
      }
      if (result && result.status) {
        // setFetch((prev) => !prev);
        setRender((prev) => !prev);
        setRenderComponent(<ManageCategory setFetch={setFetch} />);
      } else {
        alert("server error");
      }
    } else {
      alert("All feilds are required");
    }
  };
  useEffect(() => {
    console.log(editElement);
    if (editEnable) {
      setName(editElement?.name);
      // setdescription(editElement?.description);
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

      {/*--------------Categories---------------*/}

      <div role="main" className="form-all">
        <Heading
          heading={editEnable ? "Update Categories" : "Add Categories"}
        />
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

          {/* <TextArea
            title="Category Description"
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

export default CategoryAddModal;
