import classes from "../css/Product.module.css";
import { useNavigate } from "react-router-dom";

function ProductItem({ laptop, addCart, getDetails }) {
  const navigate = useNavigate();
  const shortenProductName = (name, maxLength) => {
    if (name.length <= maxLength) {
      return name;
    } else {
      return name.substring(0, maxLength) + '...';
    }
  };

  return (
    <tr>
    <div className={`${classes.productItem}`} onClick={() => {
      getDetails(laptop);
      navigate('/details');
    }}>
      <img src={laptop.image[0]} alt={laptop.name} width="220px" className={classes.productImage} />
      </div>
      <div className={classes.productName}>{shortenProductName(laptop.name, 10)}</div>
      <div className={classes.productPrice}>${laptop.price}</div>
      <button className={classes.addToCart} onClick={() => addCart(laptop)}>Add to Cart</button>
    
    </tr>
  );
}

export default ProductItem;