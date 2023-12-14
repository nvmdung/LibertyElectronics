import Item from "./Item";
import '../css/Thinalightlaptop.css';
function ThinAndLightLaptops({avatarLaptopsAsus,avatarLaptopsGigabyte,avatarLaptopsHP,avatarLaptopsLenovo,avatarLaptopsMSI,addCart,getDetails}) {
    return(
    <div className="thin-and-light-laptops">
        <div className="container-thinlaptop">
      <h1>Thin and Light Laptops</h1>
      <p>
        Thin and light laptops are a type of laptop that is designed to be thin and
        lightweight, typically weighing less than 1.5 kg. They are often designed
        for people who frequently travel, such as office workers, students, or
        freelancers.
      </p>
  
      <div className="advantages">
        <h2>Advantages</h2>
        <ul>
          <li>Thin and lightweight design: Easy to carry around.</li>
          <li>Long battery life: Use all day without plugging in.</li>
          <li>Good performance: Meets basic needs like office work and study.</li>
        </ul>
      </div>
  
      <div className="disadvantages">
        <h2>Disadvantages</h2>
        <ul>
          <li>Higher price: Uses higher-end components.</li>
          <li>Poorer heat dissipation: Can overheat with extended use.</li>
        </ul>
      </div>
  
      <p className="conclusion">
        Thin and light laptops are good for frequent travelers, offering portability,
        battery life, and performance. However, they are more expensive and have
        worse heat dissipation.
      </p>
  
      <div className="tips">
        <h2>Tips for buying a thin and light laptop</h2>
        <ul>
          <li>Consider screen size (typically 13-15 inches).</li>
          <li>Choose configuration based on your needs.</li>
          <li>Balance price with your needs and budget.</li>
        </ul>
      </div>
      </div>
  
      <div className="recommended-laptops">
        <h2>Recommended thin and light laptops</h2>
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
        </div>
</div>
    )
} export default ThinAndLightLaptops;