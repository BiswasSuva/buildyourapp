import React from 'react'

function TextArea({title="title",value="",onChange,className="form-line"}) {
  return (
    <li className={className} data-type="control_textarea" id="id_17">
    <label
      className="form-label form-label-top form-label-auto"
      id="label_17"
      htmlFor="input_37"
    >
      {title}
    </label>
    <div id="cid_17" className="form-input-wide">
      <textarea
      value={value}
        id="input_37"
        className="form-textarea"
        name="q17_yourMessage"
        cols={60}
        rows={9}
        data-component="textarea"
        aria-labelledby="label_17"
        onChange={onChange}
      />{" "}
    </div>
  </li>
)
}

export default TextArea