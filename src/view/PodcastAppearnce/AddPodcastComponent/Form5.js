import React, { useMemo, useState } from "react";
import TextArea from "../../../Component/RenderComponent/TextArea";
import TextBox from "../../../Component/RenderComponent/TextBox";
import useGetApi from "../../../customHooks/useGetApi";
import SelectDropDown from "../../../Component/RenderComponent/SelectDropDown";
// import SelectDropDown from "../RenderComponent/SelectDropDown";
import ImagePreview from "../../OttAppearnce/OttVideoComponent/ImagePreview";
import DropFile from "../../../Component/RenderComponent/DropFile";
import HttpClient from "../../../utils/HttpClient";
function Form4({ priority, priceType, suitableForChildren, updateFields }) {
  const [pngValid,setPngValid]=useState("Upload Thumbnail")
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
    let res = await HttpClient.fileUplode("ott/ott-thumb-image", "POST", data);
    if (res && res.status) {
      updateFields({ thumbnail: res.url });
    }
  }
  const opts =[{name:"Yes",value:"yes"},{name:"No",value:"no"}]
  const priceopts =[{name:"Free",value:"free"},{name:"Paid",value:"paid"}]
  return (
    <>
      <TextBox
        title="Priority"
        id="first_35"
        type="number"
        className="title-dynamic"
        value={priority}
        onChange={(val) => updateFields({ date: val.target.value })}
      />
       <SelectDropDown
        title="Suitable For Children"
        data={opts}
        valueKey="value"
        showingKey="name"
        className="title-dynamic"
        onChange={(val) => updateFields({ suitableForChildren: val })}
        value={suitableForChildren}
      /> 
      <SelectDropDown
        title="Price Type"
        data={priceopts}
        valueKey="value"
        showingKey="name"
        className="title-dynamic"
        onChange={(val) => updateFields({ priceType: val })}
        value={priceType}
      />
    </>
  );
}

export default Form4;
