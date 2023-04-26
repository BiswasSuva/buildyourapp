import React, { useMemo, useState, useEffect } from "react";
import {
  addOttVideo,
  ecomAddProduct,
  ecomAddSubCat,
  ecomEditProduct,
  editOttVideo,
  uploadImage,
  uploadOttVideo,
} from "../../api/appApi";

import { motion } from "framer-motion";
import { useMultistepForm } from "../../customHooks/useMultiStepForm";
import Component1 from "../../Component/Multistepper/Component1";
import Component2 from "../../Component/Multistepper/Component2";
import Component3 from "../../Component/Multistepper/Component3";
import Component4 from "../../Component/Multistepper/Component4";
// import { useEstoreRightSidearContext } from "../../Providers/EcomRightSidebar";
import { useOttRightSidearContext } from "../../Providers/OttRightSidebar";
import Form1 from "./OttVideoComponent/Form1";
import Form2 from "./OttVideoComponent/Form2";
import Form3 from "./OttVideoComponent/Form3";
import Form4 from "./OttVideoComponent/Form4";
import Form5 from "./OttVideoComponent/Form5";
import useGetApi from "../../customHooks/useGetApi";
import { toast } from "react-hot-toast";
import ManageVideo from "./ManageVideo";
// import ManageProduct from "./ManageProduct";

const INITIAL_DATA = {
  typeId: "",
  name: "",
  description: "",
  director: "",
  categoryId: "",
  genreId: [],
  cast: "",
  date: "",
  trailer: "",
  duration: "",
  thumbnail: "",
  priority: 1,
  priceType: "",
  trailerVideoUrl:"",
  videoUrl:""
};

function AddProduct({
  setFetch,
  close,
  editEnable = false,
  editElement = null,
}) {
  const [data, setData] = useState(INITIAL_DATA);
  const { setRenderComponent } = useOttRightSidearContext();

  console.log("editElement", editElement);
  console.log("data", data);
  function updateFields(fields) {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  }
  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultistepForm([
      <Form1 {...data} updateFields={updateFields} />,
      <Form2 {...data} updateFields={updateFields} />,
      <Form3 {...data} updateFields={updateFields} />,
      <Form4 {...data} updateFields={updateFields} />,
      <Form5 {...data} updateFields={updateFields} />,
    ]);
  const types = useGetApi("ott/view-ott-types");
  function onSub(e) {
    e.preventDefault();
    if (!isLastStep) return next();
    submit(e);
    // alert("Successful Account Creation");
  }

  const submit = async (e) => {
    e.preventDefault();
    let dataSend = {
      typeId: data.typeId,
      name: data.name,
      cast: data.cast,
      date: data.date,
      genreId: data.genreId,
      duration: data.duration,
      director: data.director,
      description: data.description,
      thumbnail: data.thumbnail,
      trailerVideoUrl: data.trailerVideoUrl,
      trailerTranscodingUrl: data.trailerTranscodingUrl,
      videoUrl: data.videoUrl,
      videoTranscodingUrl: data.videoTranscodingUrl,
      priority: data.priority,
    };

    let val = Object.values(dataSend);
    let chk = val.filter(
      (it) => it === "" || (Array.isArray(it) && it.length == 0) || !it
    );
    // console.log("chk", chk);
    if (chk.length === 0) {
      let result;
      console.log("first");
      if (editEnable) {
        result = await editOttVideo(editElement?._id, dataSend);
      } else {
        console.log("first");
        result = await addOttVideo(dataSend);
        console.log("result", result);
      }

      if (result && result.status) {
        toast.success("Video Added Successfully");
        setData(INITIAL_DATA)
        setRenderComponent(<ManageVideo setFetch={setFetch}/>)
      }
    } else {
      toast.error("All feilds are required");
    }
  };
  useEffect(() => {
    setData({...data,
      typeId: types?.filter((it) => it?._id == editElement?.typeId)[0]?._id,
    });

  }, [types]);

  useEffect(() => {
    if (editEnable) {
      console.log(
        "cccc",
        types?.filter((it) => it.typeId == editElement.typeId)
      );
      setData({
        name: editElement?.name,
        // typeId: types?.filter((it) => it._id == editElement.typeId),
        cast: editElement.cast,
        date: editElement.date,
        genreId: editElement.genreId,
        duration: editElement.duration,
        director: editElement.director,
        description: editElement.description,
        thumbnail: editElement.thumbnail,
        trailerVideoUrl: editElement.trailerVideoUrl,
        trailerTranscodingUrl: editElement.trailerTranscodingUrl,
        videoUrl: editElement.videoUrl,
        videoTranscodingUrl: editElement.videoTranscodingUrl,
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
          </div>{" "}
          <div className="arrow-div">
            <div className={currentStepIndex + 1 === 5 ? "active" : "inactive"}>
              <p>5</p>
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
            <button onClick={onSub}>{isLastStep ? "Finish" : "Next"}</button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default AddProduct;
