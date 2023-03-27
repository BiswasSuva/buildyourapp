import React from "react";
import uploadimg from "../../images/icon/uploadimg.png";

function DropFile({
  accept = "image/*",
  onChange,
  className = "form-line",
  title = "Drop Your Files",
  
}) {
  return (
    <li className={className} data-type="control_textarea" id="id_27">
      <label className="formlabel">
        <img
          src={uploadimg}
          style={{ maxWidth: "50px" }}
          className="img-fluid"
        />
        <input
          type="file"
          className="form-control"
          id="uploadFile"
          accept={accept}
          onChange={onChange}
        />
        <div></div>
        {title}
      </label>
    </li>
  );
}

export default DropFile;
