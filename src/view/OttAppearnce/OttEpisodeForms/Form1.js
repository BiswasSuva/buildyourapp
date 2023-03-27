import React, { useMemo } from "react";
import TextArea from "../../../Component/RenderComponent/TextArea";
import TextBox from "../../../Component/RenderComponent/TextBox";
import useGetApi from "../../../customHooks/useGetApi";
import SelectDropDown from "../../../Component/RenderComponent/SelectDropDown";
// import SelectDropDown from "../RenderComponent/SelectDropDown";

function Form1({ videoID, season, episodeName, updateFields }) {
  const Videos = useGetApi("ott/view-ott-video");

  return (
    <>
      <SelectDropDown
        title="Select Ott-Video"
        data={Videos}
        valueKey="_id"
        showingKey="name"
        className="title-dynamic"
        onChange={(val) => updateFields({ videoID: val })}
        value={videoID}
      />
      <TextBox
        title="season"
        className="title-dynamic"
        value={season}
        onChange={(val) => updateFields({ season: val.target.value })}
      />
      <TextBox
        title="episodeName"
        className="title-dynamic"
        value={episodeName}
        onChange={(val) => updateFields({ episodeName: val.target.value })}
      />
    </>
  );
}

export default Form1;
