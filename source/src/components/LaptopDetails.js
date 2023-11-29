import '../css/LaptopDetails.css';
function LaptopDetails({laptop,addCart}){
    return(
        <div className="laptopDetails">
            { <div>
                {laptop.image.map( i => (
            <img src={i}width="300px"/>))}
            </div> }
            <div>
                <h1>   {laptop.name}</h1>
                <h2>   {laptop.price}</h2>
                <h3>   {laptop.brand}</h3>
                <h4>   {laptop.itemweight}</h4>
                <h4>   {laptop.memorysize}</h4>
                <h4>   {laptop.cpuchip}</h4>
                <h4>   {laptop.pin}</h4>
                <h4>   {laptop.screensize}</h4>
                <h4>   {laptop.harddisksize}</h4>
                <h4>   {laptop.warranty}</h4>
                <button onClick={()=> addCart(laptop)}>Add to cart</button>
            </div>
        </div>
    )
}
export default LaptopDetails;