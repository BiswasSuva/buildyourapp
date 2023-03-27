import React, { useMemo } from "react";

function MultipleSelect({
  title = "Title",
  data = [],
  valueKey = "",
  showingKey = "",
  onChange,
  value = [],
  className = "form-line",
}) {
  const values = useMemo(() => {
    const results = data.filter(({ _id: id1 }) =>
      value.some(({ genId: id2 }) => id2 === id1)
    );
    return results;
  }, [value]);

  console.log("match", values);
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
          {values.map((item) => (
            <span style={{ color: "red", border: "2px solid white" }}>
              {item[showingKey]}
            </span>
          ))}{" "}
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

export default MultipleSelect;
