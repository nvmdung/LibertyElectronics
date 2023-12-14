import Item from "./Item";
import '../css/Home.css'
import '../css/Gaminglaptop.css'
import { useState } from "react";
function Gaminglaptop({avatarLaptopsAsus,avatarLaptopsGigabyte,avatarLaptopsHP,avatarLaptopsLenovo,avatarLaptopsMSI,addCart,getDetails}){ 
    const [isOpen, setIsOpen] = useState(false);
    return(
        <div>
    <div className="containergaminglaptop">
      <h1 className="titlegaminglaptop">What is a Gaming Laptop?</h1>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Gaming_laptop.jpg/1200px-Gaming_laptop.jpg"
        className="imagegaminglaptop"
      />
      <p className="description">
        A gaming laptop is a portable computer designed specifically for
        playing video games. Gaming laptops typically have powerful
        graphics cards, high-resolution displays, and fast processors to
        provide a smooth and immersive gaming experience.
      </p>
      <button
        className="buttongaminglaptop"
        onClick={() => setIsOpen(true)}
      >
        Learn more
      </button>
      {isOpen && (
        <div className="infogaminglaptop">
          <h2 className="infoTitlegaminglaptop">Benefits of a gaming laptop</h2>
          <ul className="infoListgaminglaptop">
            <li>Portability</li>
            <li>Convenience</li>
            <li>Performance</li>
            <li>Affordability</li>
          </ul>
          <h2 className="infoTitlegaminglaptop">Types of gaming laptops</h2>
          <ul className="infoListgaminglaptop">
            <li>High-end gaming laptops</li>
            <li>Mid-range gaming laptops</li>
            <li>Entry-level gaming laptops</li>
          </ul>
          <h2 className="infoTitlegaminglaptop">How to choose a gaming laptop</h2>
          <ul className="infoListgaminglaptop">
            <li>Budget</li>
            <li>Needs</li>
            <li>Preferences</li>
          </ul>
        </div>
      )}
    </div>
        
<div className="containerlaptophome">
               {
                    avatarLaptopsAsus.slice(1,2).map(a => (
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