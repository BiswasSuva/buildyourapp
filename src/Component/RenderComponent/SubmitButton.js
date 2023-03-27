import React from 'react'

function SubmitButton({title="Submit",onClick}) {
  return (
    <button
    id="input_14"
    type="submit"
    className="form-submit-button submit-button jf-form-buttons jsTest-submitField conditionallyDisabled"
    data-component="button"
    data-content=""
    disabled=""
    onClick={onClick}
  >
    {title}
  </button>  )
}

export default SubmitButton