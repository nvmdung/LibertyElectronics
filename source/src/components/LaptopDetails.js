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
                <h2>   ${laptop.price}</h2>
                <h3>   Brand: {laptop.brand}</h3>
                <h4>   Weight: {laptop.itemweight}</h4>
                <h4>   Memory Size: {laptop.memorysize}</h4>
                <h4>   CPU: {laptop.cpuchip}</h4>
                <h4>   Battery: {laptop.pin}</h4>
                <h4>   Screen Size: {laptop.screensize}</h4>
                <h4>   Hard Disk: {laptop.harddisksize}</h4>
                <h4>   Warranty: {laptop.warranty}</h4>
                <button onClick={()=> addCart(laptop)}>Add to cart</button>
            </div>
        </div>
    )
}
export default LaptopDetails;