import Item from "./Item";
import '../css/Home.css'
function Gaminglaptop({avatarLaptopsAsus,avatarLaptopsGigabyte,avatarLaptopsHP,avatarLaptopsLenovo,avatarLaptopsMSI,addCart,getDetails}){ 
    return(
        <div>
<div className="containerlaptophome">
               {
                    avatarLaptopsAsus.slice(2,3).map(a => (
                        <div className="boxlaptophome"><Item key={a.id} addCart={addCart} laptop={a} getDetails={getDetails}/></div>
                    )) 
                }
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
                    avatarLaptopsHP.slice(2,3).map(a => (
                        <div className="boxlaptophome"><Item key={a.id} addCart={addCart} laptop={a} getDetails={getDetails}/></div>
                    )) 
                }
                 {
                    avatarLaptopsHP.slice(3,4).map(a => (
                        <div className="boxlaptophome"><Item key={a.id} addCart={addCart} laptop={a} getDetails={getDetails}/></div>
                    )) 
                }
                </div>
            



        </div>
    )
}export default Gaminglaptop;