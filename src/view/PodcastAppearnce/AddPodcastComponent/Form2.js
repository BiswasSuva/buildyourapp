import React, { useMemo } from "react";
import TextArea from "../../../Component/RenderComponent/TextArea";
import TextBox from "../../../Component/RenderComponent/TextBox";
import useGetApi from "../../../customHooks/useGetApi";
import SelectDropDown from "../../../Component/RenderComponent/SelectDropDown";
// import SelectDropDown from "../RenderComponent/SelectDropDown";
import MultipleSelect from "../../../Component/RenderComponent/MultipleSelect";
function Form2({ genreId, presnter, director, updateFields }) {
  const genre = useGetApi("podcast/get-podcast-genre");

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
        onChange={(val) =>
          updateFields({ genreId: [...genreId, { genId: val }] })
        }
      />
      <TextBox
        title="Presenter"
        className="title-dynamic"
        value={presnter}
        onChange={(val) => updateFields({ presnter: val.target.value })}
      />
    </>
  );
}

export default Form2;
