import React from "react";

function TextBox({ type="text", title = "title", value = "", onChange ,className="form-line",}) {
  return (
    <li className={className} data-type="control_fullname" id="id_15">
      <label
        className="form-label form-label-top form-label-auto"
        id="label_15"
        htmlFor="first_35"
      >
        {title}
      </label>
      <div id="cid_15" className="form-input-wide">
        <div data-wrapper-react="true">
          <span
            className="form-sub-label-container"
            style={{ verticalAlign: "top" }}
            data-input-type="first"
          >
            <input
              value={value}
              type={type}
              id="first_35"
              name="q15_yourName[first]"
              className="form-textbox"
              data-defaultvalue=""
              autoComplete="section-input_15 given-name"
              size={10}
              data-component="first"
              aria-labelledby="label_15 sublabel_15_first"
              onChange={onChange}
            />
          </span>
        </div>
      </div>
    </li>
  );
}

export default TextBox;
