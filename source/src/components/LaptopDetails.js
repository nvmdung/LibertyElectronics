import '../css/LaptopDetails.css';
function LaptopDetails({laptop,addCart}){
    return(
        <div className="laptopDetails">
            { <div>
                {laptop.image.map( i => (
            <img src={i}width="300px"/>))}
            </div> }
            <div>
            <div class="row">
          <div class="col-xs-8">
            <h3>Specifications</h3>
            <div class="panel-info">
              <h3>Basic parameters</h3>
              <div class="row">
                <div class="col-xs-4">Screensize:
               <span>{laptop.screensize}</span></div>
              </div>
              <div class="row">
                <div class="col-xs-4">Weight:
                <span class="col-xs-8">{laptop.itemweight}</span></div>
              </div>
              <div class="row">
                <div class="col-xs-4">Camera sau:	
                <span class="col-xs-8">20 MP</span></div>
              </div>
              <div class="row">
                <div class="col-xs-4">CPU:
                <span class="col-xs-8">{laptop.cpuchip}t</span></div>
              </div>
              <div class="row">
                <div class="col-xs-4">RAM:
                <span class="col-xs-8">{laptop.memorysize}</span></div>
              </div>
              <div class="row">
                <div class="col-xs-4">Hard Disk:
                <span class="col-xs-8">{laptop.harddisksize}</span></div>
              </div>
              <div class="row">
                <div class="col-xs-4">Battery:
                <span class="col-xs-8">{laptop.pin}</span></div>
              </div>
              <div class="row">
                <div class="col-xs-4">Warranty:
                <span class="col-xs-8">{laptop.warranty}</span></div>
              </div>
            </div>
        </div>
        </div>
                <button onClick={()=> addCart(laptop)}>Add to cart</button>
                <a href="www.google.com" download="laptop_detail">Download</a>       
            </div>
        </div>
    )
}
export default LaptopDetails;