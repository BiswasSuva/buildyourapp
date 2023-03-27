import React from "react";

const VideoPreview = ({ src, ChangeFile }) => {
  return (
    <>
      <video controls autoPlay={true} height="170px" width="300px" src={src} />
      <button onClick={()=>ChangeFile(false)} className="btn btn-info">
        Change
      </button>
    </>
  );
};

export default VideoPreview;
