import React, { useState, useEffect } from "react";
// import { AddPodcast, editOttVideo, EditPodcast } from "../../api/appApi";

import { motion } from "framer-motion";
import { useMultistepForm } from "../../../customHooks/useMultiStepForm";

// import { useEstoreRightSidearContext } from "../../Providers/EcomRightSidebar";
import { usePodcastRightSidebarContext } from "../../../Providers/PodcastRightSidebar";

import useGetApi from "../../../customHooks/useGetApi";
import Form1 from "./PodcastAlbumForm/Form1";
import Form2 from "./PodcastAlbumForm/Form2";
import Form3 from "./PodcastAlbumForm/Form3";


// import ManageProduct from "./ManageProduct";

const INITIAL_DATA = {
  podcastID: "",
  season: "",
  songName: "",
  songNumber: "",
  audio: "",
  thumbnail: "",
};

function AddPodcastAlbum({
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
        podcastID: data.podcastID,
        season: data.season,
        songName: data.songName,
        songNumber: data.songNumber,
        audio: data.audio,
        thumbnail: data.thumbnail,
    };

    let val = Object.values(dataSend);
    let chk = val.filter(
      (it) => it === "" || (Array.isArray(it) && it.length == 0) || !it
    );
    console.log("chk", chk);
    if (chk.length === 0) {
      let result;

      if (editEnable) {
        // result = await EditPodcast(editElement?._id, dataSend);
      } else {
        console.log("first");
        // result = await AddPodcast(dataSend);
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
        podcastID: editElement.podcastID,
        season: editElement.season,
        songName: editElement.songName,
        songNumber: editElement.songNumber,
        audio: editElement.audio,
        thumbnail: editElement.thumbnail,
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

export default AddPodcastAlbum;
