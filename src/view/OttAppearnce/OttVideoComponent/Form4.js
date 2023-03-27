import React, { useEffect, useMemo, useRef, useState } from "react";
import TextArea from "../../../Component/RenderComponent/TextArea";
import TextBox from "../../../Component/RenderComponent/TextBox";
import useGetApi from "../../../customHooks/useGetApi";
import SelectDropDown from "../../../Component/RenderComponent/SelectDropDown";
// import SelectDropDown from "../RenderComponent/SelectDropDown";
import Multiselect from "multiselect-react-dropdown";
import MultipleSelect from "../../../Component/RenderComponent/MultipleSelect";
import DropFile from "../../../Component/RenderComponent/DropFile";
import HttpClient from "../../../utils/HttpClient";
import ImagePreview from "./ImagePreview";
import VideoPreview from "./VideoPreview";
function Form4({ thumbnail, videoUrl, updateFields,duration }) {
  const genre = useGetApi("ott/view-ott-genre");

  const onSelect = () => {};
  const onRemove = () => {};
  const [pngValid, setPngValid] = useState("Upload Thumbnail");

  const [progress, setProgress] = useState(0);
  async function videoUploadHandle(file) {
    let vid = document.createElement("video");
    let fileURL = URL.createObjectURL(file);
    vid.src = fileURL;
    // wait for duration to change from NaN to the actual duration
    vid.ondurationchange = function () {
      let sec = this.duration;
      updateFields({
        duration: `${
          sec > 60
            ? (sec / 60).toFixed(0) + "min" + (sec % 60).toFixed(0) + "sec"
            : sec.toFixed(0) + "sec"
        }`,
      });
     
 
    };
    let data = new FormData();
    data.append("video", file);
    let res = await HttpClient.uploadFileRequest(
      "ott/ott-addvideo",
      data,
      setProgress
    );
    console.log("res", res);
    if (res && res.status) {
      updateFields({ videoUrl: res.originalUrl });
      updateFields({ videoTranscodingUrl: res.originalUrl });
    }
  }
  async function thumbnailUpload(file) {
    if (file.type != "image/png") {
      setPngValid("Please Upload Png file");
    }
    let data = new FormData();
    data.append("image", file);
    let res = await HttpClient.fileUplode("ott/ott-thumb-image", "POST", data);
    if (res && res.status) {
      updateFields({ thumbnail: res.url });
    }
  }
  const resetValues = (payload) => {
    if (!payload) {
      updateFields({ videoUrl: "" });
      setProgress(0);
    }
  };
  const resThumb = (data) => {
    updateFields({ thumbnail: data });
  };
  return (
    <>
      {thumbnail != "" ? (
        <ImagePreview change={resThumb} src={thumbnail} />
      ) : (
        <DropFile
          onChange={(e) => {
            setPngValid("Upload Thumbnail");
            thumbnailUpload(e.target.files[0]);
          }}
          accept="png/*"
          title={pngValid}
        />
      )}
      {videoUrl != "" ? (
        <VideoPreview src={videoUrl} ChangeFile={resetValues} />
      ) : (
        <DropFile
          onChange={(e) => videoUploadHandle(e.target.files[0])}
          accept="video/*"
          title={`${
            progress > 0 && progress < 100
              ? progress + "%"
              : progress == 100
              ? "File Uploaded Successfully , Please Wait a Moment..."
              : "Upload trailer Video"
          }`}
        />
      )}
    </>
  );
}

export default Form4;
