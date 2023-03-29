import React, { useMemo, useState, useEffect } from "react";
import {
  ecomAddProduct,
  ecomAddSubCat,
  ecomEditProduct,
  uploadImage,
} from "../../api/appApi";

import { motion } from "framer-motion";
import { useMultistepForm } from "../../customHooks/useMultiStepForm";
import Component1 from "../../Component/Multistepper/Component1";
import Component2 from "../../Component/Multistepper/Component2";
import Component3 from "../../Component/Multistepper/Component3";
import Component4 from "../../Component/Multistepper/Component4";
import { useEstoreRightSidearContext } from "../../Providers/EcomRightSidebar";
import ManageProduct from "./ManageProduct";
import { useElementList } from "../../Providers/ElemetProvider";

const INITIAL_DATA = {
  name: "",
  image: [],
  description: "",
  categoryID: "",
  subCategoryID: "",
  sellPrice: "",
  purchasePrice: "",
  // discount:"",
  externalProduct: false,
};

function AddProduct({
  setFetch,
  close,
  editEnable = false,
  editElement = null,
}) {
  const [data, setData] = useState(INITIAL_DATA);
  const { setRenderComponent } = useEstoreRightSidearContext();
  const {rerender,setRender} = useElementList()


  function updateFields(fields) {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  }
  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultistepForm([
      <Component1 {...data} updateFields={updateFields} />,
      <Component2 {...data} updateFields={updateFields} />,
      <Component3 {...data} updateFields={updateFields} />,
      <Component4 {...data} updateFields={updateFields} />,
    ]);

  function onSubmit(e) {
    // e.preventDefault();
    if (!isLastStep) return next();
    submit();
    // alert("Successful Account Creation");
  }

  const submit = async (e) => {
    // e.preventDefault();
    let checking = Object.entries(data).filter((item) => item[1] === "");
    console.log(checking);
    // return false

    if (
      checking.length == 0 // editEnable
    ) {
      let dataSend = {
        externalProduct: data.externalProduct,
        productName: data.name,
        description: data.description,
        image: data.image,
        categoryID: data.categoryID,
        subCategoryID: data.subCategoryID,
        sellPrice: data.sellPrice,
        purchasePrice: data.purchasePrice,
      };
      console.log(dataSend);

      // return false
      let result;
      if (editEnable) {
        result = await ecomEditProduct(editElement?._id, dataSend);
      } else {
        result = await ecomAddProduct(dataSend);
      }
      if (result && result.status) {
        setRender((prev) => !prev);
        setRenderComponent(<ManageProduct setFetch={setFetch} />);
      }
    } else {
      alert("All feilds are required");
    }
  };

  useEffect(() => {
    if (editEnable) {
      setData({
        name: editElement?.productName,
        image: editElement?.image,
        description: editElement?.description,
        categoryID: editElement?.categoryID,
        subCategoryID: editElement?.subCategoryID,
        sellPrice: editElement?.sellPrice,
        purchasePrice: editElement?.purchasePrice,
        discount: "",
        externalProduct: editElement?.externalProduct,
      });
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
      {/* <Multisteps/> */}
      <div className="parent-div">
        <div className="arrow-container">
          <div className="arrow-div">
            <div
              className={currentStepIndex + 1 === 1 ? "active" : "completed"}
            >
              <p>1</p>
            </div>
          </div>
          <div className="arrow-div">
            <div
              className={
                currentStepIndex + 1 === 2
                  ? "active"
                  : currentStepIndex + 1 < 2
                  ? "inactive"
                  : "completed"
              }
            >
              <p>2</p>
            </div>
          </div>
          <div className="arrow-div">
            <div
              className={
                currentStepIndex + 1 === 3
                  ? "active"
                  : currentStepIndex + 1 < 3
                  ? "inactive"
                  : "completed"
              }
            >
              <p>3</p>
            </div>
          </div>
          <div className="arrow-div">
            <div className={currentStepIndex + 1 === 4 ? "active" : "inactive"}>
              <p>4</p>
            </div>
          </div>
        </div>

        <div className="component-div">
          <div className="display title-dynamic">{step}</div>

          <div className="mutlibtns">
            {!isFirstStep && (
              <button type="button" onClick={back} className="btns">
                Back
              </button>
            )}
            <button onClick={onSubmit}>{isLastStep ? "Finish" : "Next"}</button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default AddProduct;
