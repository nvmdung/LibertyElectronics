import classes from "../css/Product.module.css"
import { useNavigate } from "react-router-dom";
function ProductItem({laptop, addCart, getDetails}){
    const navigate = useNavigate();
    return(
    <tr>
        <td onClick={()=> {
            getDetails(laptop);
            navigate('/details');
        }}>
        <img src={laptop.image[0]} className={classes.prodimg}/>
        </td>
        <div><td>{laptop.name}</td></div>
        <div><td>${laptop.price}</td></div>
        <td>
            <button onClick={() => addCart(laptop)}>Add to Cart</button>
            
        </td>
    </tr>
    )
}

export default ProductItem;