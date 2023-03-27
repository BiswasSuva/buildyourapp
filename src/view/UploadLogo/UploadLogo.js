import React from 'react'

function UploadLogo({onChange}) {
  return (
    <div className="wrapper">
    <label className="form_label" style={{ position: "relative" }}>
     
      <i className="fas fa-cloud-upload-alt" />
      Browse or click to upload
      <input type="file" className="form-control" id="uploadFile" accept="image/*" onChange={onChange} />
    </label>
  </div>  )
}

export default UploadLogo