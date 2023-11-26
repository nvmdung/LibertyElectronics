
import classes from '../css/Product.module.css'
import ProductItem from './ProductItem';

function ProductList({laptops,addCart}){

    return(
        <div>
               <div className={classes.header}>
                <h1>Shopping Cart</h1>
            </div>
            <thead>
          
            </thead>
            <tbody className={classes.boxes}>
            {
                    laptops.map(p => (
                        <ProductItem key={p.id} laptop={p}  addCart={addCart}/>
                    ))
                }
            </tbody>

        </div>
    );
}
export default ProductList;