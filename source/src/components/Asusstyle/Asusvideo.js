import './Asusvideo.css'
function AsusVideo(){
  return(
      <div className='video-asus'>
             <video src="../video/asus.mp4" width="1200" height="700" autoPlay controls>
      <source  type="mp4" />
      Your browser does not support the video tag.
    </video>
    </div>
  );
}
export default AsusVideo;