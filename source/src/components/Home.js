
import CarouselHome from "./Carousel";
import Images from "./Fourboxhome";
import { Link } from "react-router-dom";
import Item from "./Item";
import '../css/Home.css'
import '../css/Homeinfomore.css'
import BrandLogos from "./Brandlogo";
function Home({avatarLaptopsAsus,avatarLaptopsGigabyte,avatarLaptopsHP,avatarLaptopsLenovo,avatarLaptopsMSI,addCart,getDetails}){
  
    return(
        <>
     <CarouselHome/>
    <BrandLogos/>
    
     <div className="Brandhome">Best seller Laptop</div>
      
           
      <div className="containerlaptophome">
       
           {
              avatarLaptopsLenovo.slice(1,2).map(a => (
                  <div className="boxlaptophome"><Item key={a.id} addCart={addCart} laptop={a} getDetails={getDetails}/></div>
              )) 
          }
           {
              avatarLaptopsGigabyte.slice(1,2).map(a => (
                  <div className="boxlaptophome"><Item key={a.id} addCart={addCart} laptop={a} getDetails={getDetails}/></div>
              )) 
          }
           {
              avatarLaptopsMSI.slice(1,2).map(a => (
                  <div className="boxlaptophome"><Item key={a.id} addCart={addCart} laptop={a} getDetails={getDetails}/></div>
              )) 
          }
           {
              avatarLaptopsHP.slice(3,4).map(a => (
                  <div className="boxlaptophome"><Item key={a.id} addCart={addCart} laptop={a} getDetails={getDetails}/></div>
              )) 
          }
          </div>
          <div className="Brandhome">Sale up to 50%</div>
      
           <div className="paddinghome">
      <div className="containerlaptophome">
       
           {
              avatarLaptopsAsus.slice(1,2).map(a => (
                  <div className="boxlaptophome"><Item key={a.id} addCart={addCart} laptop={a} getDetails={getDetails}/></div>
              )) 
          }
           {
              avatarLaptopsAsus.slice(0,1).map(a => (
                  <div className="boxlaptophome"><Item key={a.id} addCart={addCart} laptop={a} getDetails={getDetails}/></div>
              )) 
          }
           {
              avatarLaptopsAsus.slice(2,3).map(a => (
                  <div className="boxlaptophome"><Item key={a.id} addCart={addCart} laptop={a} getDetails={getDetails}/></div>
              )) 
          }
           {
              avatarLaptopsLenovo.slice(3,4).map(a => (
                  <div className="boxlaptophome"><Item key={a.id} addCart={addCart} laptop={a} getDetails={getDetails}/></div>
              )) 
          }
          </div>
          </div>
          <div className="containerMicro">    
         
      <div class="containerhomeinfomore">
      <div className="Whatnew">What News ?</div> 
<section class="home-cards">
  <div>
    <img src="./image/banner/ASUShome.jpeg" alt="ASUShome"/>
    <h3>New ASUS GAMING 2023</h3>
    <p>
    Powerful performance along with improved cooling system gives you a better experience
    </p>
    <a href="https://www.asus.com/laptops/for-gaming/tuf-gaming/asus-tuf-gaming-a15-2023?gad_source=1&gclid=Cj0KCQiA7OqrBhD9ARIsAK3UXh0tZBugG5NsYhoR6-JAKoTVjoB7H_9FY2SZIVshaXYXZFNz30pihCMaAiMjEALw_wcB">Learn More <i class="fas fa-chevron-right"></i></a>
  </div>
  <div>
    <img src="./image/banner/saleoff.png" alt="" />
    <h3>Save up to 50% </h3>
    <p>
    During this Christmas, we offer a promotion code of up to 25%
    </p>
    <a href="/product">Buy now <i class="fas fa-chevron-right"></i></a>
  </div>
  <div>
    <img src="./image/banner/WHY.png" alt="" />
    <h3>Why you choose my shop?</h3>
    <p>
    We are the most reasonable provider of services and prices.  
    </p>
    <a href="/contact">Learn More <i class="fas fa-chevron-right"></i></a>
  </div>
  <div>
    <img src="./image/asus/asus14xoled/0.png" alt="" />
    <h3>Thin and light laptop </h3>
    <p>
    With its thin, light and convenient nature, it will help you have a better experience when you carry it
    </p>
    <a href="/thinandlightlaptop">Learn More <i class="fas fa-chevron-right"></i></a>
  </div>
</section>




 
  <section class="follow">
    <p>Follow us from</p>
    <a href="https://facebook.com">
      <img src="https://i.ibb.co/LrVMXNR/social-fb.png" alt="Facebook"/>
    </a>
    <a href="https://twitter.com">
      <img src="https://i.ibb.co/vJvbLwm/social-twitter.png" alt="Twitter"/>
    </a>
    <a href="https://linkedin.com">
      <img src="https://i.ibb.co/b30HMhR/social-linkedin.png" alt="Linkedin"/>
    </a>
  </section>
</div>
</div>
     

    
            
                
                    
    </>
    )
}export default Home;