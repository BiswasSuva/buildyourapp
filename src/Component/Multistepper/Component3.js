import React from "react";
import TextBox from "../RenderComponent/TextBox";

function Component3({ sellPrice, discount, purchasePrice, updateFields }) {
  return (
    <>
      <TextBox
        type="number"
        title="Selling Price"
        className="title-dynamic"
        value={sellPrice}
        onChange={(e) =>
          updateFields({
            sellPrice: e.target.value,
          })
        }
      />{" "}
      <TextBox
        type="number"
        title="Purchase Price"
        className="title-dynamic"
        value={purchasePrice}
        onChange={(e) => updateFields({ purchasePrice: e.target.value })}
      />
    </>
  );
}

export default Component3;
