import ProductItem from "../ProductItem";
function HP({HpProduct,addCart,getDetails}){
    return(
        <div className='item-asus'>
        {HpProduct.map((p) => (
             <ProductItem key={p.id} laptop={p} addCart={addCart} getDetails={getDetails}/>
           ))}
           </div>
    );
}
export default HP;