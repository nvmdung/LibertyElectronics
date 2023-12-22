import './Asusvideo.css'
function AsusVideo(){
  return(
      <div className='video-asus'>
             <video src="../video/asus.mp4" width="80%" height="auto" autoPlay controls>
      <source  type="mp4" />
      Your browser does not support the video tag.
    </video>
    </div>
  );
}
export default AsusVideo;