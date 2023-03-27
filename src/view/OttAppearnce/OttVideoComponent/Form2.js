import React, { useEffect, useMemo } from "react";
import TextArea from "../../../Component/RenderComponent/TextArea";
import TextBox from "../../../Component/RenderComponent/TextBox";
import useGetApi from "../../../customHooks/useGetApi";
import SelectDropDown from "../../../Component/RenderComponent/SelectDropDown";
// import SelectDropDown from "../RenderComponent/SelectDropDown";
import MultipleSelect from "../../../Component/RenderComponent/MultipleSelect";

function Form2({ director, genreId,cast, updateFields }) {
  const genre = useGetApi("ott/view-ott-genre");
  console.log("cat", genre);
  
  const onSelect = () => {};
  const onRemove = () => {};

  
  return (
    <>

      <TextBox
        title="Director"
        className="title-dynamic"
        value={director}
        onChange={(val) => updateFields({ director: val.target.value })}
      />
      <MultipleSelect
       className="title-dynamic"
       title="Select Genre"
       data={genre}
       value={genreId}
       valueKey="_id"
       showingKey="name"
       onChange={(val)=>updateFields({ genreId:[...genreId,{genId:val}]})}
       />
         <TextBox
        title="Cast"
        className="title-dynamic"
        value={cast}
        onChange={(val) => updateFields({ cast: val.target.value })}
      />

    </>
  );
}

export default Form2;
