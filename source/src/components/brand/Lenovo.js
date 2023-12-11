import ProductItem from "../ProductItem";
function Lenovo({lenovoProduct,addCart,getDetails}){
    return(
        <div className='item-asus'>
        {lenovoProduct.map((p) => (
             <ProductItem key={p.id} laptop={p} addCart={addCart} getDetails={getDetails}/>
           ))}
           </div>
    );
}
export default Lenovo;