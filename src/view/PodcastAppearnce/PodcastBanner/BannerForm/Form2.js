import React, { useMemo, useState } from "react";
import TextArea from "../../../../Component/RenderComponent/TextArea";

import useGetApi from "../../../../customHooks/useGetApi";

import SelectDropDown from "../../../../Component/RenderComponent/SelectDropDown";
import ImagePreview from "../../../OttAppearnce/OttVideoComponent/ImagePreview";
import DropFile from "../../../../Component/RenderComponent/DropFile";
import HttpClient from "../../../../utils/HttpClient";

function Form2({updateFields,image }) {
  const types = useGetApi("podcast/get-podcast");
  const [pngValid,setPngValid]=useState("Upload Banner Image")
  console.log("types", types);
  async function thumbnailUpload(file) {
  
    let data = new FormData();
    data.append("image", file);
    let res = await HttpClient.fileUplode("podcast/podcast-thumb-image", "POST", data);
    if (res && res.status) {
      updateFields({ image: res.url });
    }
  }
  const resThumb = (data) => {
    updateFields({ image: data });
  };
  return (
    <>
       {image != "" ? (
        <ImagePreview change={resThumb} src={image} />
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
    </>
  );
}

export default Form2;
