import React, { useMemo, useState } from "react";
import TextArea from "../../../../Component/RenderComponent/TextArea";
import TextBox from "../../../../Component/RenderComponent/TextBox";
import useGetApi from "../../../../customHooks/useGetApi";
import SelectDropDown from "../../../../Component/RenderComponent/SelectDropDown";
import DropFile from "../../../../Component/RenderComponent/DropFile";
import HttpClient from "../../../../utils/HttpClient";
// import SelectDropDown from "../RenderComponent/SelectDropDown";

function Form2({ songNumber,songName, updateFields }) {
  const [progress, setProgress] = useState(0);
  const AudioUploadHandle = async (file) => {
    console.log(file, "file");
    let data = new FormData();
    data.append("audio", data);
    // return false
    let res = await HttpClient.fileUplode("upload-audio", "POST", data);

    console.log("res", res);
    // return false
    // if (res & res.status) {
    //   getDuration(file);
    //   // updateFields({ audio: val.target.value })
    // }
  };
  return (
    <>
      <TextBox
        title="Song Number"
        className="title-dynamic"
        type="number"
        value={songNumber}
        onChange={(val) => updateFields({ songNumber: val.target.value })}
      />{" "}
          <TextBox
        title="Song Name"
        className="title-dynamic"
        value={songName}
        onChange={(val) => updateFields({ songName: val.target.value })}
      />{" "}
  
    </>
  );
}

export default Form2;
