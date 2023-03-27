import React, { useMemo, useState } from "react";
import TextArea from "../../../../Component/RenderComponent/TextArea";

import useGetApi from "../../../../customHooks/useGetApi";

import SelectDropDown from "../../../../Component/RenderComponent/SelectDropDown";
import ImagePreview from "../../../OttAppearnce/OttVideoComponent/ImagePreview";
import DropFile from "../../../../Component/RenderComponent/DropFile";
import HttpClient from "../../../../utils/HttpClient";

function Form1({ audio, title, updateFields }) {
  const types = useGetApi("podcast/get-podcast");
  const [pngValid,setPngValid]=useState()
  console.log("types", types);
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
  const resThumb = (data) => {
    updateFields({ image: data });
  };
  return (
    <>
      <SelectDropDown
        title="Podcast Name"
        data={types}
        valueKey="_id"
        showingKey="name"
        className="title-dynamic"
        onChange={(val) => updateFields({ audio: val })}
        value={audio}
      />
      <TextArea
        title="Title"
        className="title-dynamic"
        value={title}
        onChange={(val) => updateFields({ title: val.target.value })}
      />
       
    </>
  );
}

export default Form1;
