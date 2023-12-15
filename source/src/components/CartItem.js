import { formatCurrency } from "../components/Currency";
function CartItem({product, deleteCart, decreaseQty, increaseQty}){
    return(
        <tr>
            <td>{product.name}</td>
            <td><img src={product.image[0]} alt="image" width="150px"/></td>
            <td>$ {product.price}</td>
            <td>
                <button onClick={() => decreaseQty(product)}>-</button>
                {product.quantity}
                <button onClick={() => increaseQty(product)}>+</button>

               
            </td>
            <td>{formatCurrency(product.quantity * product.price)}</td>
            <td><button onClick={() => deleteCart(product)}>Delete</button></td>
        </tr>
    )
}
export default CartItem;