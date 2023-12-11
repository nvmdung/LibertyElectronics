import './Asus.css';
import ProductItem from '../ProductItem';
function Msi({msiProduct,addCart,getDetails}){
    return(
        <div className='item-asus'>
        {msiProduct.map((p) => (
             <ProductItem key={p.id} laptop={p} addCart={addCart} getDetails={getDetails}/>
           ))}
           </div>
    );
}
export default Msi;