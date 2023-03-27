import React, { useEffect, useMemo, useState } from "react";
import TextBox from "../../../Component/RenderComponent/TextBox";

import SelectDropDown from "../../../Component/RenderComponent/SelectDropDown";

function Form5({ updateFields, priority, priceType }) {
  const opts = [{ name: "Free" }, { name: "Paid" }];
  return (
    <>
      <TextBox
        title="Priority"
        type="number"
        className="title-dynamic"
        value={priority}
        onChange={(val) => updateFields({ priority: val.target.value })}
      />
   
    </>
  );
}

export default Form5;
