import React from "react";

const ImagePreview = ({ src, change }) => {
  return (
    <>
    <div style={{textAlign:"center"}}>
    <img style={{ height: 100, width: 100,objectFit:"cover" }} src={src} />
      
      </div> 
      <br/>
      <button onClick={() => change("")} className="btn btn-info">
        {" "}
        Change
      </button>
    </>
  );
};

export default ImagePreview;
