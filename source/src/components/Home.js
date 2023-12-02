import Itemasus from "./Item";
import style from '../css/Home.css';
import CarouselHome from "./Carousel";
function Home({avatarLaptopsAsus,avatarLaptopsLenovo,avatarLaptopsGigabyte,avatarLaptopsMSI,avatarLaptopsHP}){  
    return(
        <>

        <CarouselHome/>
     
        <h1 className="brand">LIBERTY ELECTRONICS</h1>
        
        
        <div className="box-phone">
                <tr className="phone-num">
                    <td><img src="./image/imgcall/call1.png" width="22px"/>0707185xxx</td>
                </tr>
            </div>
        <table>
            <tbody  className="container"> 
               {
                    avatarLaptopsAsus.map(a => (
                        <div className="box-image"><Itemasus key={a.id} laptop={a}/></div>
                    )) 
                }
                 {
                    avatarLaptopsLenovo.map(a => (
                        <div className="box-image"><Itemasus key={a.id} laptop={a}/></div>
                    )) 
                }
                 {
                    avatarLaptopsGigabyte.map(a => (
                        <div className="box-image"><Itemasus key={a.id} laptop={a}/></div>
                    )) 
                }
                 {
                    avatarLaptopsMSI.map(a => (
                        <div className="box-image"><Itemasus key={a.id} laptop={a}/></div>
                    )) 
                }
                 {
                    avatarLaptopsHP.map(a => (
                        <div className="box-image"><Itemasus key={a.id} laptop={a}/></div>
                    )) 
                }
            </tbody>
        </table>            
        
       {/* <footer><Footer/></footer> */}
    </>
    )
}export default Home;