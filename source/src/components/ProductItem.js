// ... (your existing imports)
import classes from '../css/Product.module.css'
import { useNavigate } from 'react-router-dom';

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
    <div className={classes.containerboxes}>
      <div className={classes.productItem} onClick={() => {
        getDetails(laptop);
        navigate('/details');
      }}>
        <img src={laptop.image[0]} width="250px" alt={laptop.name} className={classes.productImage} />
        <div className={classes.productInfo}>
          <div className={classes.productName}>{shortenProductName(laptop.name, 50)}</div>
          <div className={classes.productPrice}>${laptop.price}</div>
          <button className={classes.addToCart} onClick={() => addCart(laptop)}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;