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
import VideoPreview from "../OttVideoComponent/VideoPreview";

function Form3({
    thumbnail,
  updateFields,
}) {
  const [progress, setProgress] = useState(0);
  const [isLoded, setIsLoaded] = useState(false);

  
  useEffect(() => {
    if (progress === 100) {
      setTimeout(() => {
        setIsLoaded(true);
      }, 1000);
    }
  }, [progress]);

  async function imageUploadHandle(file) {
    let data = new FormData();
    data.append("image", file);
    let res = await HttpClient.fileUplode(
      "ott/ott-thumb-image",
      "POST",
      data
    );
    if (res && res.status) {
      updateFields({ thumbnail: res.url });
     
    }
  }
  const resetValues = (state) => {
    updateFields({ videoURL: "" });
    setProgress(0);
  };
  return (
    <>
    

      <DropFile
        onChange={(e) => imageUploadHandle(e.target.files[0])}
        accept="image/*"
        title="Upload video thumbnail image"
      />
      {thumbnail !=''&&<img src={thumbnail} style={{height:"100px",width:"100px"}} />}
    </>
  );
}

export default Form3;
