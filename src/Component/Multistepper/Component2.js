import React from "react";
import TextArea from "../RenderComponent/TextArea";
import TextBox from "../RenderComponent/TextBox";

function Component2({ name, description, purchasePrice, updateFields }) {
    return (
        <>
            <TextBox
                title="Product Name"
                className="title-dynamic"
                value={name}
                onChange={(e) => updateFields({ name: e.target.value })}
            />
            <TextArea
                title="Product Description"
                className="title-dynamic"
                value={description}
                onChange={(e) => updateFields({ description: e.target.value })}
            />


        </>
    );
}

export default Component2;
