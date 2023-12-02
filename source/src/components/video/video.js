import React from 'react';

const AsusVideo = () => {
  return (
    <div>
      <h1>React Video Player</h1>
      <video src="../video/asus.mp4" width="640" height="360" autoPlay controls>
        <source  type="mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default AsusVideo;