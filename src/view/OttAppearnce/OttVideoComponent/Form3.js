import React, { useEffect, useMemo, useState } from "react";
import TextArea from "../../../Component/RenderComponent/TextArea";
import TextBox from "../../../Component/RenderComponent/TextBox";
import useGetApi from "../../../customHooks/useGetApi";
import SelectDropDown from "../../../Component/RenderComponent/SelectDropDown";
// import SelectDropDown from "../RenderComponent/SelectDropDown";
import Multiselect from "multiselect-react-dropdown";
import MultipleSelect from "../../../Component/RenderComponent/MultipleSelect";
import DropFile from "../../../Component/RenderComponent/DropFile";
import HttpClient from "../../../utils/HttpClient";
import VideoPreview from "./VideoPreview";

function Form3({ date, updateFields, trailerVideoUrl }) {
  const genre = useGetApi("ott/view-ott-genre");
  const [progress, setProgress] = useState(0);
  const [isLoded, setIsLoaded] = useState(false);

  console.log("cat", genre);
  const onSelect = () => {};
  const onRemove = () => {};
  useEffect(() => {
    if (progress === 100) {
      setTimeout(() => {
        setIsLoaded(true);
      }, 1000);
    }
  }, [progress]);



  async function videoUploadHandle(file) {


    let data = new FormData();
    data.append("video", file);
    let res = await HttpClient.uploadFileRequest(
      "ott/ott-addvideo",
      data,
      setProgress
    );
    if (res && res.status) {
      updateFields({ trailerVideoUrl: res.originalUrl });
      updateFields({ trailerTranscodingUrl: res.transcoderUrl });
    }
  }
  const resetValues = (state) => {
    updateFields({ trailerVideoUrl: "" });
    setProgress(0);
  };
  return (
    <>
      <TextBox
        title="date"
        id="first_35"
        type="date"
        className="title-dynamic"
        value={date}
        onChange={(val) => updateFields({ date: val.target.value })}
      />

      {trailerVideoUrl != "" ? (
        <VideoPreview src={trailerVideoUrl} ChangeFile={resetValues} />
      ) : (
        <DropFile
          onChange={(e) => videoUploadHandle(e.target.files[0])}
          accept="video/*"
          title={`${
            progress > 0 && progress < 100
              ? progress + "%"
              : progress == 100
              ? "File Uploaded Successfully, Please Wait..."
              : "Upload trailer Video"
          }`}
        />
      )}
    </>
  );
}

export default Form3;
