
import CarouselHome from "./Carousel";
import Images from "./Fourboxhome";
import { Link } from "react-router-dom";
import BrandLogos from "./BrandLogo";
import Twobox from "./Twoboxhome";
import Item from "./Item";
function Home(avatarLaptopsAsus){
    return(
        <>
     <CarouselHome/>
      <Images/>
      <Link to="/product"><div className="showproduct">Show all Products</div></Link>
      <BrandLogos/>
      <Twobox/>
      <div>
        {avatarLaptopsAsus.slice(1,2).map(a => (
            <div><Item key={a.id}  laptop={a}/></div>
        ))}</div>
    </>
    )
}export default Home;