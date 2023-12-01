import React from 'react';

const VideoPlayer = () => {
  return (
    <div>
      <h1>React Video Player</h1>
      <video width="640" height="360" controls>
        <source src="blob:https://youtu.be/x1pjhHiNEqI?si=jRvGQy1U_Re4RaW-" type="asus/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;