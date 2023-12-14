
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
    <>
      <div class="Blog_container">
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
              <p> "City, Taiwan. It designs, develops and provides computerhardware, related products and services, including laptops,desktops, motherboards, graphics cards, all-in-one PCs, servers,industrial computers, PC peripherals, car infotainment products, among other products. </p>
          
   
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
                Asus was founded in Taipei in 1989[14] by T.H. Tung, Ted Hsu,
                Wayne Hsieh and M.T. Liao, all four having previously worked at
                Acer as hardware engineers. At this time, Taiwan had yet to
                establish a leading position in the computer hardware business.
                
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
      </div>

      {/* {/* <div className="text-container">
                <div >
                    <div className="text-info" onClick={handleToggleContentMSI}>
                        <img className="img" src="./img/MSI.png" alt="laptop1" width="400px" height="300px" />
                        <div className="text-content"  >
                            <h5>MSI</h5>
                           
                                <h6>Micro-Star International Co., Ltd.  is a Taiwanese multinational information technology corporation headquartered in New Taipei City, Taiwan. It designs, develops and provides computer hardware, related products and services, including laptops, desktops, motherboards, graphics cards, all-in-one PCs, servers, industrial computers, PC peripherals, car infotainment products, among other products.

                                The company has a primary listing on the Taiwan Stock Exchange and was established on August 4, 1986 by 5 founders – Hsu Xiang (a.k.a. Joseph Hsu), Huang Jinqing (a.k.a. Jeans Huang), Lin Wentong (a.k.a. Frank Lin), Yu Xian'nengyu (a.k.a. Kenny Yu), and Lu Qilong (a.k.a. Henry Lu).[citation needed] First starting its business in New Taipei City, Taiwan, MSI later expanded into China, setting up its Bao'an plant in Shenzhen in 2000 and establishing research and development facilities in Kunshan in 2001. It also provides global warranty service in North America, Central/South America, Asia, Australia and Europe. For example in Iran Matrix works with them. 
                                
                                The company has been a sponsor for a number of e-sports teams and is also the host of the international gaming event MSI Masters Gaming Arena (formerly known as MSI Beat IT). The earliest Beat IT tournament can be traced back to 2010, featuring Evil Geniuses winning the championship.</h6>
                            
                        </div>
                    </div>
                </div>

                <div >
                    <div className="text-info">
                        <img className="img" src="../img/GIGABYTE.png" alt="laptop2" width="400px" height="300px" />
                        <div className="text-content" onClick={handleToggleContentGIGABYTE}>
                            <h5>GIGABYTE</h5>
                          
                                <h6>Gigabyte Technology was established in 1986 by Pei-Cheng Yeh.

                                One of Gigabyte's key advertised features on its motherboards is its "Ultra Durable" construction, advertised with "all solid capacitors". On 8 August 2006 Gigabyte announced a joint venture with Asus. Gigabyte developed the world's first software-controlled power supply in July 2007.
                                
                                An innovative method to charge the iPad and iPhone on the computer was introduced by Gigabyte in April 2010. Gigabyte launched the world's first Z68 motherboard on 31 May 2011, with an on-board mSATA connection for Intel SSD and Smart Response Technology. On 2 April 2012, Gigabyte released the world's first motherboard with 60A ICs from International Rectifier.
                                
                                In 2023, researchers at firmware-focused cybersecurity company Eclypsium said 271 models of Gigabyte motherboards are affected by backdoor vulnerabilities. Whenever a computer with the affected Gigabyte motherboard restarts, code within the motherboard's firmware initiates an updater program that downloads and executes another piece of software. Gigabyte has said it plans to fix the issues.</h6>
                            
                        </div>
                    </div>
                </div> */}
      {/* <div onClick={handleToggleContent}>
                    <div className="text-info">
                        <img className="img" src="./img/LENOVO.png" alt="laptop3" width="400px" height="300px" />
                        <div className="text-content">
                            <h5>LENOVO</h5>
                            {showContent && (
                                <h6>Lenovo Group Limited, often shortened to Lenovo, is a Chinese multinational technology company specializing in designing, manufacturing, and marketing consumer electronics, personal computers, software, business solutions, and related services. Products manufactured by the company include desktop computers, laptops, tablet computers, smartphones, workstations, servers, supercomputers, data storage devices, IT management software, and smart televisions. Its best-known brands include its ThinkPad business line of laptop computers (acquired from IBM), the IdeaPad, Yoga, and Legion consumer lines of laptop computers, and the IdeaCentre and ThinkCentre lines of desktop computers. As of 2021, Lenovo is the world's largest personal computer vendor by unit sales.

                                Lenovo has operations in over 60 countries and sells its products in around 180+ countries. It was incorporated in Hong Kong, with global headquarters in Beijing, and Morrisville, North Carolina, United States. It has research centres in Beijing, Chengdu, Yamato (Kanagawa Prefecture, Japan), Singapore, Shanghai, Shenzhen, and Morrisville, and also has Lenovo NEC Holdings, a joint venture with NEC that produces personal computers for the Japanese market.</h6>
                            )}
                        </div>
                    </div>
                </div>
                <div onClick={handleToggleContent}>
                    <div className="text-info">
                    <img className="img" src="./img/ASUS.png" alt="laptop3" width="400px" height="300px" />
                        <div className="text-content">

                            <h5>ASUS</h5>

                            {showContent && (
                                <h6>Asus was founded in Taipei in 1989[14] by T.H. Tung, Ted Hsu, Wayne Hsieh and M.T. Liao, all four having previously worked at Acer as hardware engineers. At this time, Taiwan had yet to establish a leading position in the computer hardware business.
                                Intel Corporation would supply any new processors to more established companies like IBM first, and Taiwanese companies would have to wait for approximately six months after IBM received their engineering prototypes. According to company history, Asus created a motherboard prototype for using an Intel 486, but it had to do so without access to the actual processor. When Asus approached Intel to request a processor to test it, Intel itself had a problem with its own 486 motherboard. Asus solved Intel's problem and it turned out that Asus' motherboard worked correctly without the need for further modification. Since then, Asus was receiving Intel engineering samples ahead of its competitors.
                               Asus is the world's 5th-largest PC vendor by unit sales as of January 2023. Asus appears in BusinessWeek's "InfoTech 100" and "Asia's Top 10 IT Companies" rankings, and it ranked first in the IT Hardware category of the 2008 Taiwan Top 10 Global Brands survey with a total brand value of US$1.3 billion. </h6>
                            )}
                        </div>
                    </div>
                </div>
                <div onClick={handleToggleContent}>
                    <div className="text-info">
                    <img className="img" src="./img/HP.png" alt="laptop3" width="400px" height="300px" />
                        <div className="text-content">

                            <h5>HP</h5>

                            {showContent && (
                                <h6>When the Hewlett-Packard Company (HP) was founded in 1939, the world was a very different place. There were no fully electronic computers. The only printers were industrial-sized printing presses. Palo Alto, California was composed mostly of fruit orchards. The internet was decades away from fruition.
                                The storied history of HP coincides with the development of home computing and the rise of Silicon Valley. HP’s innovations were instrumental in making home computers and printers more affordable for the average consumer, and their success inspired a wave of electronics companies to start-up in Santa Clara County, California. Everyone wanted to hang out in HP’s neck of the woods.
                                HP celebrates its 80th birthday this year! There’s no better time to explore the history of HP, from its earliest inventions to its most modern technological advancements. Take a tech-tastic trip through time in the infographic below. </h6>
                            )}
                        </div>
                    </div>
                </div>
                <div onClick={handleToggleContent}>
                    <div className="text-info">
                    <img className="img" src="./img/DELL.png" alt="laptop3" width="400px" height="300px" />
                        <div className="text-content">

                            <h5>DELL</h5>

                            {showContent && (
                                <h6>Dell Inc., global company that designs, develops, and manufactures personal computers (PCs) and a variety of computer-related products. The company is one of the world’s leading computer brands and suppliers of PCs. Dell is headquartered in Round Rock, Texas.
                                The company, first named PC’s Limited, was founded in 1984 by American Michael Dell, who was then a student at the University of Texas in Austin. Initially running the business from a dormitory room, Dell started out providing customized upgrades for PCs. The venture proved profitable, and Dell dropped out of college that same year to begin building PCs. In 1985 the company released the Turbo PC, the first computer featuring Dell’s own design. Founded on the premise of creating and selling custom-built PCs directly to consumers, the company initially sold its products through advertisements and mail-order catalogs. By avoiding the costs associated with traditional retail markets, Dell was able to offer high-quality PCs at competitive prices. Dell emphasized customer support, sending technicians to service PCs and implementing a policy of risk-free returns. This business model proved successful, and the company quickly grew, expanding into international markets. The company, renamed Dell Computer Corporation, went public in 1988. </h6>
                            )}
                        </div>
                    </div>
                </div> */}
    </>
  );
}

export default Blog;
