import { formatCurrency } from "../components/Currency";

import '../css/Cart.css'

function CartItem({ product, deleteCart, decreaseQty, increaseQty }) {

    return (
     <div>    
            <tbody>
                <tr>
                    <td className="cartlistid"><div>{product.id}</div></td>
                    <th className="cartlistproduct"><img src={product.image[0]} alt="image" width="140px" /></th>
                    <td className="cartlistname"><div>{product.name}</div></td>
                    <th className="cartlistprice"><div>${product.discount ? (product.price - (product.price * (product.discount / 100))) : product.price}</div></th>
                    <th className="cartlistquantity">
                        <div className="buttonminus" onClick={() => decreaseQty(product)}>-</div>
                        {product.quantity}
                        <div className="buttonminus" onClick={() => increaseQty(product)}>+</div>
                    </th>
                    <th className="cartlisttotal">{formatCurrency((product.quantity * (product.discount ? (product.price - (product.price * (product.discount / 100))) : product.price)))}</th>
                    <th className="cartlistaction">
                    <div class=" delete-button-box" onClick={() => deleteCart(product)}>                 
                            <button class=" delete-button" >Delete</button>
                    </div>
                    </th>
                </tr>
            </tbody>
           
            </div>
    );
}   

export default CartItem;