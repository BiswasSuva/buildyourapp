import React, { useMemo, useState, useEffect } from "react";
import { addOttEpisodes, addOttVideo, editOttEpisodes, editOttVideo } from "../../api/appApi";

import { motion } from "framer-motion";
import { useMultistepForm } from "../../customHooks/useMultiStepForm";
import { useOttRightSidearContext } from "../../Providers/OttRightSidebar";
import Form1 from "./OttEpisodeForms/Form1";
import Form2 from "./OttEpisodeForms/Form2";
import useGetApi from "../../customHooks/useGetApi";
import Form3 from "./OttEpisodeForms/Form3";
import ManageOttEpisode from "./ManageOttEpisode";
// import ManageProduct from "./ManageProduct";

const INITIAL_DATA = {
  videoID: "",
  season: "",
  episodeName: "",
  episodeNumber: "",
  transcodeURL: "",
  videoURL: "",
  thumbnail: "",
};

function AddOttEpisode({
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
    let dataSend = data;

    let val = Object.values(dataSend);
    let chk = val.filter(
      (it) => it === "" || (Array.isArray(it) && it.length == 0) || !it
    );
    console.log("chk", chk);
    if (chk.length === 0) {
      let result;
      console.log("first");
      if (editEnable) {
        result = await editOttEpisodes(editElement?._id, dataSend);
      } else {
        console.log("first");
        result = await addOttEpisodes(dataSend);
        console.log("result", result);
      }

      if (result && result.status) {
        // alert(" Added Successfully");
        setData(INITIAL_DATA);
        setRenderComponent(<ManageOttEpisode setFetch={setFetch}/>)
      }
    } else {
      alert("All feilds are required");
    }
  };
  // useEffect(() => {
  //   setData({
  //     ...data,
  //     typeId: types?.filter((it) => it?._id == editElement?.typeId)[0]?._id,
  //   });
  // }, [types]);

  useEffect(() => {
    if (editEnable) {
     
      setData({

        videoID: editElement?.videoID,
        season: editElement?.season,
        episodeName: editElement?.episodeName,
        episodeNumber: editElement?.episodeNumber,
        transcodeURL: editElement?.transcodeURL,
        videoURL:editElement?.videoURL,
        thumbnail: editElement?.thumbnail,

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

export default AddOttEpisode;
