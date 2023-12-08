import React, { useState } from "react";
import '../css/Twobox.css';

function Twobox(){
  return (
    <div class="containertwobox">
  <div class="twobox">
    <img src="./image/banner/twobox.jpg" alt="Image 1" class="imagetwobox" />
    <div class="contenttwobox">Content for Image 1</div>
  </div>
  <div class="twobox">
    <img src="./image/banner/twobox.jpg" alt="Image 2" class="imagetwobox" />
    <div class="contenttwobox">Content for Image 2</div>
  </div>
</div>
  );
};

export default Twobox;