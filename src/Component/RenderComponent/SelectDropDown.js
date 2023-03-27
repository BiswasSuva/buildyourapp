import React from "react";

function SelectDropDown({
  title = "Title",
  data = [],
  valueKey = "",
  showingKey = "",
  onChange,
  value = "",
  className="form-line"
}) {
  console.log('value', value)
  console.log('data', data)
  return (
    <li className={className} id="id_150">
      <label
        className="form-label form-label-top form-label-auto"
        id="label_15"
        htmlFor="first_1"
      >
        {title}
      </label>
      <div className="menu_container">
        <button className="list_btn">
          {data.find((item) => item[valueKey] == value)
            ? data.find((item) => item[valueKey] == value)[showingKey]
            : "Select an option"}{" "}
        </button>
        <span className="button_arrow" />
        <div className="option_container">
          {data.map((item) => {
            return (
              <label
                className="option_field"
                onClick={() => onChange(item[valueKey])}
              >
                <input
                  className="list_option"
                  type="radio"
                  name="list"
                  title="Option 1"
                />
                {item[showingKey]}
                <span className="checkmark" />
              </label>
            );
          })}
        </div>
      </div>
    </li>
  );
}

export default SelectDropDown;
