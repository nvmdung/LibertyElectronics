import ProductItem from "../ProductItem";
function GIGABYTE({gigabyteProduct,addCart,getDetails}){
    return(
        <div className='item-asus'>
        {gigabyteProduct.map((p) => (
             <ProductItem key={p.id} laptop={p} addCart={addCart} getDetails={getDetails}/>
           ))}
           </div>
    );
}
export default GIGABYTE;