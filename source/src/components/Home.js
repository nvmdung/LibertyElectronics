import Itemasus from "./Item";
import style from '../css/Home.css';
import CarouselHome from "./Carousel";
import { Link } from "react-router-dom";



function Home({avatarLaptopsAsus,avatarLaptopsLenovo,avatarLaptopsGigabyte,avatarLaptopsMSI,avatarLaptopsHP}){  
    return(
        <>

        <CarouselHome/>
     
        <h1 className="brand2 ">LIBERTY ELECTRONICS</h1>
        <div className='menu'>
          <button className='menubtn'>Menu</button>
          <div className='menu-content'>
        <Link to="/asus">Asus</Link>
        <Link to='dell'>DELL</Link>
        </div>
        </div>
        <table>
        <div className="box-phone">
                <tr className="phone-num">
                    <td><img src="./image/imgcall/call1.png" width="22px"/>0707185xxx</td>
                </tr>
            </div>
            <tbody  className="container"> 
               {
                    avatarLaptopsAsus.map(a => (
                        <Itemasus key={a.id} laptop={a}/>
                    )) 
                }
                 {
                    avatarLaptopsLenovo.map(a => (
                        <Itemasus key={a.id} laptop={a}/>
                    )) 
                }
                 {
                    avatarLaptopsGigabyte.map(a => (
                        <Itemasus key={a.id} laptop={a}/>
                    )) 
                }
                 {
                    avatarLaptopsMSI.map(a => (
                        <Itemasus key={a.id} laptop={a}/>
                    )) 
                }
                 {
                    avatarLaptopsHP.map(a => (
                        <Itemasus key={a.id} laptop={a}/>
                    )) 
                }
            </tbody>
        </table>            
        
       {/* <footer><Footer/></footer> */}
    </>
    )
}export default Home;