import React, { useMemo, useState, useEffect } from "react";
import uploadicon from "../../images/uploadicon.png";
import bitbucketnew from "../../images/bitbucketnew.svg";
import bitbucket from "../../images/bitbucket.svg";
import {
  addEcomBanner,
  ecomAddProduct,
  ecomAddSubCat,
  ecomEditProduct,
  editEcomBanner,
  uploadImage,
} from "../../api/appApi";
import useEcomCategory from "../../customHooks/useEcomCategory";
import useEcomSubCategory from "../../customHooks/useEcomSubCategory";
import useEcomProduct from "../../customHooks/useEcomProduct";
import { motion } from "framer-motion";
import style from "../../Component/Modals/Formmodal.module.css";
import Heading from "../../Component/RenderComponent/Heading";
import TextBox from "../../Component/RenderComponent/TextBox";
import TextArea from "../../Component/RenderComponent/TextArea";
import DropFile from "../../Component/RenderComponent/DropFile";
import SubmitButton from "../../Component/RenderComponent/SubmitButton";
import SelectDropDown from "../../Component/RenderComponent/SelectDropDown";
import { useEstoreRightSidearContext } from "../../Providers/EcomRightSidebar";
import ManageProduct from "./ManageProduct";
import ManageBanner from "./ManageBanner";

function EstoreAddBanner({
  setFetch,
  close,
  editEnable = false,
  editElement = null,
}) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const category = useEcomCategory();
  const subcategory = useEcomSubCategory({ refetch: false });
  const product = useEcomProduct({ refetch: false });
  const { setRenderComponent } = useEstoreRightSidearContext();

  const [bannerAction, setBannerAction] = useState([
    "Category",
    "Subcategory",
    "Product",
  ]);
  const [fetchItem, setfetchItem] = useState("");
  const [fetchItemID, setfetchItemID] = useState("");
  const [actionList, setActionList] = useState([]);

  const imageHandle = async (files) => {
    // console.log(file);
    for (const file of files) {
      let data = new FormData();
      data.append("image", file);
      let result = await uploadImage(data);
      if (result && result.status) {
        setImage(result.image.url);
      }
    }

    // console.log(result);
  };

  const submit = async (e) => {
    e.preventDefault();
    if (name.trim() != "" && image.trim() != "") {
      let dataSend = {
        title: name,
        image,
        fetchItem: fetchItem == "" ? null : fetchItem,
        fetchItemID: fetchItemID == "" ? null : fetchItemID,
      };
      console.log(dataSend);

      // return false
      let result;
      if (editEnable) {
        result = await editEcomBanner(editElement?._id, dataSend);
      } else {
        result = await addEcomBanner(dataSend);
      }
      if (result && result.status) {
        setFetch((prev) => !prev);

        setRenderComponent(<ManageBanner setFetch={setFetch} />);
      }
    } else {
      alert("All feilds are required");
    }
  };

  useEffect(() => {
    console.log(editElement);
    if (editEnable) {
      setName(editElement?.title);
      setImage(editElement?.image);
    }
  }, [editElement]);

  const handleChange = (val) => {
    if (val == "Category") {
      setActionList(category);
    }
    if (val == "Subcategory") {
      console.log(subcategory);
      setActionList(subcategory);
    }
    if (val == "Product") {
      setActionList(product);
    }
    setfetchItem(val);
  };
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
        <Heading heading={editEnable?"Update Banner":"Add Banner"} />
        <ul
          className="form-section page-section"
          style={{ height: "600px", overflowY: "auto" }}
        >
          <TextBox
            title="Banner Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <DropFile onChange={(e) => imageHandle(e.target.files)} />

          {image !="" &&  <img src={image}  style={{ height: "100px", width: "100px" }} />}

          <SubmitButton
            title={editEnable ? "Update" : "Submit"}
            onClick={submit}
          />
        </ul>
      </div>
    </motion.div>
  );
}

export default EstoreAddBanner;
