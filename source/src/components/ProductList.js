

import classes from '../css/Product.module.css'
import ProductItem from './ProductItem';

function ProductList({laptops,addCart,getDetails}){

    return(
        <div>
               <div className={classes.header}>
                <h1>Laptop List</h1>
            </div>
            <thead>
          
            </thead>
            <tbody>
                <div className={classes.boxes}>
            {
                    laptops.map(p => (
                        <ProductItem key={p.id} laptop={p}  addCart={addCart} getDetails={getDetails}/>
                    ))
                }
                </div>
              
            </tbody>


        </div>
    );
}
export default ProductList;