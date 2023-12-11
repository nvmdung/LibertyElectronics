import ProductItem from "../ProductItem";
function DELL({dellProduct,addCart,getDetails}){
    return(
        <div className='item-asus'>
        {dellProduct.map((p) => (
             <ProductItem key={p.id} laptop={p} addCart={addCart} getDetails={getDetails}/>
           ))}
           </div>
    );
}
export default DELL;