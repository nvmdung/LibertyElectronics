import classes from '../css/Product.module.css'
import ProductItem from './ProductItem';
import {menu} from '../data/menu';
import { useState } from 'react';

function ProductList({laptops,addCart}){
    const [selectMenu ,setMenu] = useState(null);
    const onClickMenu = (cat_brand) => {
        setMenu(cat_brand);
    };
    // console.log(selectMenu);
    let filterLaptops = [...laptops];
    if (selectMenu != null){
        filterLaptops = laptops.filter( (p) => p.id == selectMenu )
    }

    return(
        <div>
               <div className={classes.header}>
                <h1>Shopping Cart</h1>
            </div>
            <thead>
                <div className={classes.container}>
            <div className={classes.row}>
                <div className={classes.left}>
                    <h2>Menu</h2>
                      {
                    menu.map(cate => <div className={classes.cat} key={cate.id} onClick={() => onClickMenu(cate.id)}>
                        {cate.name}
                       
                    </div>)
                }
                    </div>
            </div>
            </div>
            </thead>
            <tbody className={classes.boxes}>
            {
                    filterLaptops.map(p => (
                        <ProductItem key={p.id} laptop={p}  addCart={addCart}/>
                    ))
                }
            </tbody>

        </div>
    );
}
export default ProductList;