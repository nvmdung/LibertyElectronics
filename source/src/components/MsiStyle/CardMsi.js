
import './Msistyle.css'


function MsiCard () {
  return (
    <div className='body'>
      <div className='card'>
      <div className='content'>
      <h2>Main</h2>
      <p>        
      Every aspect of ProArt Series <br/>
      motherboards is designed to  <br/>
      remove barriers and deliver <br/>
      optimal performance for <br/>
      content creators <br/>
      working on modeling and  <br/>
      rendering tasks <br/>

      </p>
      <a href='#'>Read More</a>
      </div>
      <img src='../imagestyle/asus.webp'  alt='image1'/>
      </div>
      <div className='card'>
        <div className='content'>
      <h2>Card</h2>
      <p>        
      Leveraging advanced <br/>
      thermal technology <br/>
      derived from top-quality graphics cards <br/>
      , the ASUS Dual series<br/>
      delivers the most modern <br/>
      experiences in its original <br/>
      form factor...<br/>

      </p>
      <a href='#'>Read More</a>
      </div>
      <img src='../imagestyle/msi.png' alt='image1'/>
      </div>
      
    </div>
  );
};

export default MsiCard;