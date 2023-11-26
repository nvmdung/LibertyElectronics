import classes from "../css/Product.module.css"
function ProductItem({laptop, addCart}){

    return(
    <tr>
        <td>
        <img src={laptop.image[0]} className={classes.prodimg}/>
        </td>
        <div><td>{laptop.name}</td></div>
        <div><td>${laptop.price}</td></div>
        <td>
            <button onClick={() => addCart(laptop.id)}>Add to Cart</button>
        </td>
    </tr>
    )
}

export default ProductItem;