import React, { useMemo } from "react";
import TextArea from "../../../../Component/RenderComponent/TextArea";
import TextBox from "../../../../Component/RenderComponent/TextBox";
import useGetApi from "../../../../customHooks/useGetApi";
import SelectDropDown from "../../../../Component/RenderComponent/SelectDropDown";
// import SelectDropDown from "../RenderComponent/SelectDropDown";

function Form1({ podcastID, season, songName,songNumber, updateFields }) {
  const podcasts = useGetApi("podcast/get-podcast");
  const seasons = [
    { name: "Season 1" },
    { name: "Season 2" },
    { name: "Season 3" },
    { name: "Season 4" },
    { name: "Season 5" },
  ];
  return (
    <>
      <SelectDropDown
        title="Podcast"
        data={podcasts}
        valueKey="_id"
        showingKey="name"
        className="title-dynamic"
        onChange={(val) => updateFields({ podcastID: val })}
        value={podcastID}
      />{" "}
      <SelectDropDown
        title="Season"
        data={seasons}
        valueKey="name"
        showingKey="name"
        className="title-dynamic"
        onChange={(val) => updateFields({ season: val })}
        value={season}
      />
  
   
    </>
  );
}

export default Form1;
