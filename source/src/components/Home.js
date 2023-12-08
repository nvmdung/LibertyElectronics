
import CarouselHome from "./Carousel";
import Images from "./Fourboxhome";
import { Link } from "react-router-dom";
import BrandLogos from "./BrandLogo";
import Twobox from "./Twoboxhome";
import Itemasus from "./Item";
function Home(avatarLaptopsAsus ,addCart){
    return(
        <>
     <CarouselHome/>
      <Images/>
      <Link to="/product"><div className="showproduct">Show all Products</div></Link>
      <BrandLogos/>
      <Twobox/>
      
    </>
    )
}export default Home;