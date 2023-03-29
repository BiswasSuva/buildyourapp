import React, { useMemo } from "react";
import SelectDropDown from "../RenderComponent/SelectDropDown";
import useEcomCategory from "../../customHooks/useEcomCategory";
import useEcomSubCategory from "../../customHooks/useEcomSubCategory";

function Component1({
  externalProduct,
  categoryID,
  subCategoryID,
  updateFields,
}) {
  const categories = useEcomCategory();
  const subcategory = useEcomSubCategory();

  const filterSubCate = useMemo(() => {
    return subcategory.filter((item) => item.categoryID == categoryID);
  }, [categoryID, subcategory]);

  return (
    <>
      <SelectDropDown
        title="External Product"
        data={[
          { label: "Yes", value: true },
          { label: "No", value: false },
        ]}
        valueKey="value"
        showingKey="label"
        className="title-dynamic"
        onChange={(val) => updateFields({ externalProduct: val })}
        value={externalProduct}
      />
      <SelectDropDown
        title="Select Category"
        data={categories}
        valueKey="_id"
        showingKey="name"
        className=""
        value={categoryID}
        onChange={(val) => updateFields({ categoryID: val })}
      />
      <SelectDropDown
        title="Select Sub-Category"
        data={filterSubCate}
        valueKey="_id"
        showingKey="name"
        className="title-dynamic"
        value={subCategoryID}
        onChange={(val) => updateFields({ subCategoryID: val })}
      />

      {/* <li className="title-dynamic" data-type="control_fullname" id="id_15">
        <label
          className="form-label form-label-top form-label-auto"
          id="label_15"
          htmlFor="first_15"
        >
          Product Name
        </label>
        <div id="cid_15" className="form-input-wide">
          <div data-wrapper-react="true">
            <span
              className="form-sub-label-container"
              style={{ verticalAlign: "top" }}
              data-input-type="first"
            >
              <input
                type="text"
                id="first_15"
                name="q15_yourName[first]"
                className="form-textbox"
                data-defaultvalue=""
                autoComplete="section-input_15 given-name"
                size={10}
                defaultValue=""
                data-component="first"
                aria-labelledby="label_15 sublabel_15_first"
              />
            </span>
          </div>
        </div>
      </li> */}
    </>
  );
}

export default Component1;
