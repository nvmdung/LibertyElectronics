import classes from "../css/Product.module.css"
import { useNavigate } from "react-router-dom";
function ProductItem({laptop, addCart, getDetails}){
    const navigate = useNavigate();
    const shortenProductName = (name, maxLength) => {
        if (name.length <= maxLength) {
          return name;
        } else {
          return name.substring(0, maxLength) + '...';
        }
      };

    return(
    <tr>
        <td onClick={()=> {
            getDetails(laptop);
            navigate('/details');
        }}>
          <div className={classes.prodimg}><img src={laptop.image[0]} width="100px"/></div>
        </td>
        <div className={classes.prodimg}><td> {shortenProductName(laptop.name, 10)}</td></div>
        <div className={classes.prodimg}><td>${laptop.price}</td></div>
        <div>
        <td>
            <button onClick={() => addCart(laptop)}>Add to Cart</button>
        </td>
        </div>
    </tr>
    )
}

export default ProductItem;