import React, { useMemo, useState } from "react";
import TextArea from "../../../../Component/RenderComponent/TextArea";
import TextBox from "../../../../Component/RenderComponent/TextBox";
import useGetApi from "../../../../customHooks/useGetApi";
import SelectDropDown from "../../../../Component/RenderComponent/SelectDropDown";
import DropFile from "../../../../Component/RenderComponent/DropFile";
import HttpClient from "../../../../utils/HttpClient";
import ImagePreview from "../../../OttAppearnce/OttVideoComponent/ImagePreview";
// import SelectDropDown from "../RenderComponent/SelectDropDown";

function Form3({ audio, thumbnail, updateFields }) {
  const [progress, setProgress] = useState(0);
  const [pngValid, setPngValid] = useState("Upload Thumbnail");
  const AudioUploadHandle = async (file) => {
    console.log(file, "file");
    let data = new FormData();
    data.append("audio", data);
    // return false
    let res = await HttpClient.fileUplode("upload-audio", "POST", data);

    console.log("res", res);

    if (res & res.status) {
      updateFields({ audio: res.image.url });
    }
  };

  async function thumbnailUpload(file) {
    if (file.type != "image/png") {
      setPngValid("Please Upload Png file");
      return
    }
    let data = new FormData();
    data.append("image", file);
    let res = await HttpClient.fileUplode(
      "podcast/podcast-thumb-image",
      "POST",
      data
    );
    console.log(res);
    if (res && res.status) {
      updateFields({ thumbnail: res.url });
    }
  }
  const resThumb = (data) => {
    updateFields({ thumbnail: data });
  };
  return (
    <>
      <DropFile
        onChange={(e) => AudioUploadHandle(e.target.files[0])}
        accept="audio/*"
        title={`${
          progress > 0 && progress < 100
            ? progress + "%"
            : progress == 100
            ? "File Uploaded Successfully, Please Wait..."
            : "Upload Audio"
        }`}
      />
      {thumbnail != "" ? (
        <ImagePreview change={resThumb} src={thumbnail} />
      ) : (
        <DropFile
          onChange={(e) => {
            thumbnailUpload(e.target.files[0]);
          }}
          accept="png/*"
          title={pngValid}
        />
      )}
    </>
  );
}

export default Form3;
