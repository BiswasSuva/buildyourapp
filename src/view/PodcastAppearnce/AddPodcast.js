import React, { useState, useEffect } from "react";
import { AddPodcast, editOttVideo, EditPodcast } from "../../api/appApi";

import { motion } from "framer-motion";
import { useMultistepForm } from "../../customHooks/useMultiStepForm";

// import { useEstoreRightSidearContext } from "../../Providers/EcomRightSidebar";
import { usePodcastRightSidebarContext } from "../../Providers/PodcastRightSidebar";

import useGetApi from "../../customHooks/useGetApi";
import Form1 from "./AddPodcastComponent/Form1";
import Form2 from "./AddPodcastComponent/Form2";
import Form3 from "./AddPodcastComponent/Form3";
import Form4 from "./AddPodcastComponent/Form4";
import Form5 from "./AddPodcastComponent/Form5";
// import ManageProduct from "./ManageProduct";

const INITIAL_DATA = {
  type: "",
  name: "",
  description: "",
  director: "",
  presnter: "",
  genreId: [],
  date: "",
  audio: "",
  duration: "",
  thumbline: "",
  priority: 1,
  priceType: "",
  suitableForChildren: "",
};

function AddPodCast({
  setFetch,
  close,
  editEnable = false,
  editElement = null,
}) {
  const [data, setData] = useState(INITIAL_DATA);
  const { setRenderComponent } = usePodcastRightSidebarContext();

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
      type: data.type,
      name: data.name,
      description: data.description,
      director: data.director,
      presnter: data.presnter,
      trailer: data.trailer,
      genreId: data.genreId,
      date: data.date,
      audio: data.audio,
      duration: data.duration,
      thumbline: data.thumbline,
      priority: data.priority,
      priceType: data.priceType,
      suitableForChildren: data.suitableForChildren,
    };
console.log('dataSend', dataSend)
// return
    let val = Object.values(dataSend);
    let chk = val.filter(
      (it) => it === "" || (Array.isArray(it) && it.length == 0) || !it
    );
    console.log("chk", chk);
    if (chk.length === 0) {
      let result;

      if (editEnable) {
        result = await EditPodcast(editElement?._id, dataSend);
      } else {
        console.log("first");
        result = await AddPodcast(dataSend);
        console.log("result", result);
      }

      if (result && result.status) {
        alert("Video Added Successfully");
        setData(INITIAL_DATA);
        // setRenderComponent(<ManageProduct setFetch={setFetch}/>)
      }
    } else {
      alert("All feilds are required");
    }
  };
  useEffect(() => {
    setData({
      ...data,
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
        type: editElement.type,
      name: editElement.name,
      description: editElement.description,
      director: editElement.director,
      presnter: editElement.presnter,
      trailer: editElement.trailer,
      genreId: editElement.genreId,
      date: editElement.date,
      audio: data.audio,
      duration: editElement.duration,
      thumbline: editElement.thumbline,
      priority: editElement.priority,
      priceType: editElement.priceType,
      suitableForChildren: editElement.suitableForChildren,
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

export default AddPodCast;
