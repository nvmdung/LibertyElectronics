import Itemasus from "./Item";
import '../css/Home.css';
import CarouselHome from "./Carousel";
import { useState } from "react";
import MenuHome from "./MenuHome";
function Home({
    avatarLaptopsAsus,
    avatarLaptopsLenovo,
    avatarLaptopsGigabyte,
    avatarLaptopsMSI,
    avatarLaptopsHP,
    addCart
})
{    const [showAd, setShowAd] = useState(true);
    const handleCloseAd = () => {
        setShowAd(false);
    };
    return(
        <>
        <div>
        {showAd && (
                <div className="Ads"> 
                    <div className="Ads-content"><img src="./image/banner/Asus.png" width="auto" height="500px"/></div>
                    <button  className="Ads-button" onClick={handleCloseAd}><img src="./image/banner/X.png"width="10px"height="auto"/></button> {/* Nút đóng */}
                </div>
            )}
            </div>
            <MenuHome/>
            <div className="CarouselHome" >
            <CarouselHome/>
            </div>     
        <div className="box-phone">
                <tr className="phone-num">
                    <td><img src="./image/imgcall/call1.png" width="22px"/>0707185xxx</td>
                </tr>
            </div>
        <table>
            <tbody> 
            <div className="bestoffer">BEST OFFER IN CHRISTMAS</div>
            <div className="container">
               {
                    avatarLaptopsAsus.slice(1,2).map(a => (
                        <div className="box-image"><Itemasus key={a.id} addCart={addCart} laptop={a}/></div>
                    )) 
                }
                 {
                    avatarLaptopsLenovo.slice(1,2).map(a => (
                        <div className="box-image"><Itemasus key={a.id} addCart={addCart} laptop={a}/></div>
                    )) 
                }
                 {
                    avatarLaptopsGigabyte.slice(1,2).map(a => (
                        <div className="box-image"><Itemasus key={a.id} addCart={addCart} laptop={a}/></div>
                    )) 
                }
                 {
                    avatarLaptopsMSI.slice(1,2).map(a => (
                        <div className="box-image"><Itemasus key={a.id} addCart={addCart} laptop={a}/></div>
                    )) 
                }
                 {
                    avatarLaptopsHP.slice(2,3).map(a => (
                        <div className="box-image"><Itemasus key={a.id} addCart={addCart} laptop={a}/></div>
                    )) 
                }
                </div>
                <div className="bestoffer">Powerful GAMING LAPTOP</div>
            <div className="container">
               {
                    avatarLaptopsAsus.slice(1,2).map(a => (
                        <div className="box-image"><Itemasus key={a.id} addCart={addCart} laptop={a}/></div>
                    )) 
                }
                 {
                    avatarLaptopsAsus.slice(0,1 ).map(a => (
                        <div className="box-image"><Itemasus key={a.id} addCart={addCart} laptop={a}/></div>
                    )) 
                }
                 {
                    avatarLaptopsGigabyte.slice(1,2).map(a => (
                        <div className="box-image"><Itemasus key={a.id} addCart={addCart} laptop={a}/></div>
                    )) 
                }
                 {
                    avatarLaptopsMSI.slice(1,2).map(a => (
                        <div className="box-image"><Itemasus key={a.id} addCart={addCart} laptop={a}/></div>
                    )) 
                }
                 {
                    avatarLaptopsMSI.slice(0,1).map(a => (
                        <div className="box-image"><Itemasus key={a.id} addCart={addCart}  laptop={a}/></div>
                    )) 
                }
                </div>
            </tbody>
        </table>            
        
       <footer></footer>
       
    </>
    )
}export default Home;