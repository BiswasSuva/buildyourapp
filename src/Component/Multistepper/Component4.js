import React from "react";
import DropFile from "../RenderComponent/DropFile";
import { uploadImage } from "../../api/appApi";
function Component4({ image, updateFields }) {
  const imageHandle = async (files) => {
    // console.log(file);
    for (const file of files) {
      let data = new FormData();
      data.append("image", file);
      let result = await uploadImage(data);
      if (result && result.status) {
        updateFields({ image: [...image, result.image.url] });
      }
    }

    // console.log(result);
  };
  return (
    <>
      <DropFile
        className="title-dynamic"
        onChange={(e) => imageHandle(e.target.files)}
      />
      {image?.map((item) => {
        return (
          <img src={item} style={{ margin: "5 px" }} height={100} width={100} />
        );
      })}
    </>
  );
}

export default Component4;
