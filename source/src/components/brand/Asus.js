import './Asus.css';
import ProductItem from '../ProductItem';
function Asus({asusProduct,addCart,getDetails}){
    return(
        <div className='item-asus'>
     {asusProduct.map((p) => (
          <ProductItem key={p.id} laptop={p} addCart={addCart} getDetails={getDetails}/>
        ))}
        </div>
    );
}
export default Asus;