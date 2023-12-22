
import { useNavigate } from 'react-router-dom';

import "../css/blog.css";

function Blog() {
    const navigate = useNavigate();
  

  
    const handleToggleContentMSI = () => {
        navigate('/blogs/msi');
      };
    
      const handleToggleContentGIGABYTE = () => {
        navigate('/blogs/gigabyte');
      };
    const handleToggleContentLENOVO = () => {
        navigate('/blogs/lenovo');
      };
      const handleToggleContentHP = () => {
        navigate('/blogs/hp');
      };
      const handleToggleContentDELL = () => {
        navigate('/blogs/dell');
      };
      const handleToggleContentASUS = () => {
        navigate('/blogs/asus');
      };

  return (
    <div className='blogall'>
      <div class="Blog_container">
      <img className="image" src="./img/4K.png" alt="laptop1" width="1500px" height="500px"></img>
        <div class="section_head">
          <h1 class="sub_title">Our Blog</h1>
        </div>
      </div>
      <div class="peach_content">
        <div class="blog_item" onClick={handleToggleContentMSI}>
          <img className="img" src="./img/MSI.png" alt="laptop1"/>
          <div class="peach_overlay">
            <div class="blog_text">
              <h4>MSI</h4>
              <p> City, Taiwan. It designs, develops and provides computerhardware, related products and services, including laptops,desktops, motherboards, graphics cards, all-in-one PCs, servers,industrial computers, PC peripherals, car infotainment products, among other products. </p>
          
   
            </div>
          </div>
        </div>
        <div class="blog_item" onClick={handleToggleContentGIGABYTE}>
          <img className="img" src="../img/GIGABYTE.png" alt="laptop2" />
          <div class="peach_overlay">
            <div class="blog_text">
              <h4>GIGABYTE</h4>
              <p>
                Gigabyte Technology was established in 1986 by Pei-Cheng Yeh.
                One of Gigabyte's key advertised features on its motherboards is
                its "Ultra Durable" construction, advertised with "all solid
                capacitors". 
              </p>
            </div>
          </div>
        </div>
        <div class="blog_item" onClick={handleToggleContentLENOVO}>
          <img className="img" src="./img/LENOVO.png" alt="laptop3" />
          <div class="peach_overlay">
            <div class="blog_text">
              <h4>LENOVO</h4>
              <p>
                Lenovo Group Limited, often shortened to Lenovo, is a Chinese
                multinational technology company specializing in designing,
                manufacturing, and marketing consumer electronics, personal
                computers, software, business solutions, and related services.
                
              </p>
            </div>
          </div>
        </div>
        <div class="blog_item" onClick={handleToggleContentASUS}>
          <img className="img" src="./img/ASUS.png" alt="laptop4" />
          <div class="peach_overlay">
            <div class="blog_text">
              <h4>ASUS</h4>
              <p>
                Asus was founded in Taipei in 1989 by T.H. Tung, Ted Hsu,
                Wayne Hsieh and M.T. Liao, all four having previously worked at
                Acer as hardware engineers. At this time, Taiwan had yet to
                establish a leading position in the computer hardware business.
                
              </p>
            </div>
          </div>
        </div>
        <div class="blog_item" onClick={handleToggleContentDELL}>
          <img className="img" src="./img/DELL.png" alt="laptop6" />
          <div class="peach_overlay">
            <div class="blog_text">
              <h4>DELL</h4>
              <p>
                Dell Inc., global company that designs, develops, and
                manufactures personal computers (PCs) and a variety of
                computer-related products. The company is one of the world’s
                leading computer brands and suppliers of PCs.
              </p>
            </div>
          </div>
        </div>
        <div class="blog_item" onClick={handleToggleContentHP}>
          <img className="img" src="./img/HP.png" alt="laptop5" />
          <div class="peach_overlay">
            <div class="blog_text">
              <h4>HP</h4>
              <p>
                When the Hewlett-Packard Company (HP) was founded in 1939, the
                world was a very different place. There were no fully electronic
                computers. The only printers were industrial-sized printing
                presses. Palo Alto, California was composed mostly of fruit
                orchards. 
              </p>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Blog;
