import React, { useMemo } from "react";
import TextArea from "../../../Component/RenderComponent/TextArea";
import TextBox from "../../../Component/RenderComponent/TextBox";
import useGetApi from "../../../customHooks/useGetApi";
import SelectDropDown from "../../../Component/RenderComponent/SelectDropDown";
// import SelectDropDown from "../RenderComponent/SelectDropDown";

function Form1({ typeId, name, description, updateFields }) {
  const types = useGetApi("ott/view-ott-types");

  return (
    <>
      <SelectDropDown
        title="Type"
        data={types}
        valueKey="_id"
        showingKey="name"
        className="title-dynamic"
        onChange={(val) => updateFields({ typeId: val })}
        value={typeId}
      />
      <TextBox
        title="Name"
        className="title-dynamic"
        value={name}
        onChange={(val) => updateFields({ name: val.target.value })}
      />
      <TextArea
        title="Description"
        className="title-dynamic"
        value={description}
        onChange={(val) => updateFields({ description: val.target.value })}
      />
    </>
  );
}

export default Form1;
