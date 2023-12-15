import CartItem from "./CartItem";
import { formatCurrency } from "../components/Currency";

function CartList({carts,deleteCart, decreaseQty, increaseQty}){
    
    const totalPrice = carts.reduce((total, product) => {
        return total + (product.price * product.quantity);
    }, 0);
    if (!carts || carts.length === 0) {
        return (
            <div >
                <h3>No products in cart</h3>
            </div>
        );
    }
    return(
        <div>
            <h2>Cart List</h2>
            <table>
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                        {carts.map(product => (
                            <CartItem key={product.id} product={product} deleteCart={deleteCart} increaseQty={increaseQty} decreaseQty={decreaseQty} />
                        ))}
                </tbody>
            </table>
                <div >
                    
                    <div > <h5>Total : {formatCurrency(totalPrice)}</h5></div>
                </div>
                
        </div>
    )
}
export default CartList;