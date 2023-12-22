
function LenovoVideo(){
  return(
      <div className='video-asus'>
             <video src="../video/lenovo.mp4" width="80%" height="auto" autoPlay controls>
      <source  type="mp4" />
      Your browser does not support the video tag.
    </video>
    </div>
  );
}
export default LenovoVideo;