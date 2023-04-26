import React, { useMemo, useState } from "react";
import TextArea from "../../../Component/RenderComponent/TextArea";
import TextBox from "../../../Component/RenderComponent/TextBox";
import useGetApi from "../../../customHooks/useGetApi";
import SelectDropDown from "../../../Component/RenderComponent/SelectDropDown";
// import SelectDropDown from "../RenderComponent/SelectDropDown";
import ImagePreview from "../../OttAppearnce/OttVideoComponent/ImagePreview";
import DropFile from "../../../Component/RenderComponent/DropFile";
import HttpClient from "../../../utils/HttpClient";
function Form4({ priority, thumbline, updateFields }) {
  const [pngValid, setPngValid] = useState("Upload Thumbnail");
  const types = useGetApi("ott/view-ott-types");
  const resThumb = (data) => {
    updateFields({ thumbline: data });
  };
  async function thumbnailUpload(file) {
    if (file.type != "image/png") {
      setPngValid("Please Upload Png file");
    }
    let data = new FormData();
    data.append("image", file);
    let res = await HttpClient.fileUplode("podcast/podcast-thumb-image", "POST", data);
    console.log(res)
    if (res && res.status) {
      updateFields({ thumbline: res.url });
    }
  }
 
  return (
    <>
      {thumbline != "" ? (
        <ImagePreview change={resThumb} src={thumbline} />
      ) : (
        <DropFile
          onChange={(e) => {
            setPngValid("Upload Thumbnail");
            thumbnailUpload(e.target.files[0]);
          }}
          accept="image/*"
          title={pngValid}
        />
      )}
    </>
  );
}

export default Form4;
