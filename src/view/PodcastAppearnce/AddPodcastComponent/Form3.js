import React, { useMemo, useState } from "react";
import TextArea from "../../../Component/RenderComponent/TextArea";
import TextBox from "../../../Component/RenderComponent/TextBox";
import useGetApi from "../../../customHooks/useGetApi";
import SelectDropDown from "../../../Component/RenderComponent/SelectDropDown";
import HttpClient from "../../../utils/HttpClient";
// import SelectDropDown from "../RenderComponent/SelectDropDown";
import DropFile from "../../../Component/RenderComponent/DropFile";
import HttpClientXml from "../../../utils/HttpClientXml";
import { toast } from "react-hot-toast";
function Form3({ date, audio, description, updateFields, duration }) {
  const [progress, setProgress] = useState(0);
  // const [percentage,setPercentage] = useState("")
  // const types = useGetApi("ott/view-ott-types");
  const getDuration = (file) => {
    let vid = document.createElement("audio");
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
      // console.log(this.duration, "lllll");
      // return this.duration;
    };
  };
  const AudioUploadHandle = async (file) => {
    let percentage;

    // const toastId= toast.loading(`${percentage}% uploading`)

    console.log(file, "file");
    let data = new FormData();
    data.append("audio", file);

    toast.promise(HttpClientXml.audioUpload("upload-audio", data), {
      loading: "loading",
      success: (res) => {
        // console.log("promise");
        if (res && res.status) {
          getDuration(file);
          updateFields({ audio: res.image.url });
        }

        return "Successfully uploaded";
      },
      error: (err) => `k`,
    });
     };
  console.log("date", audio);
  return (
    <>
      <TextBox
        title="date"
        id="first_35"
        type="date"
        className="title-dynamic"
        value={date.slice(0, 10)}
        onChange={(val) => {
          console.log("val", val.target.value);
          updateFields({ date: val.target.value });
        }}
      />
      <DropFile
        onChange={(e) => {
          AudioUploadHandle(e.target.files[0]);
          e.target.value = "";
        }}
        accept="audio/*"
        title={`${
          progress > 0 && progress < 100
            ? progress + "%"
            : progress == 100
            ? "File Uploaded Successfully, Please Wait..."
            : "Upload Audio"
        }`}
      />
      {/* <audio src={audio}></audio> */}
   {  audio !="" &&  <audio controls key={audio} >
        <source src={audio} type="audio/mp3" />
      </audio>}
    </>
  );
}

export default Form3;
