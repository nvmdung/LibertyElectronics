import CartItem from "./CartItem";


function CartList({carts,deleteCart, decreaseQty, increaseQty}){
    
   
    if (!carts || carts.length === 0) {
        return (
            <div className="cartlist">
                <h3>No products in cart</h3>
            </div>
        );
    }
    return(
        <div  className="cartlist">
            <h2>Cart List</h2>
            <table> 
                <tbody>
                        {carts.map(product => (
                            <CartItem key={product.id} product={product} deleteCart={deleteCart} increaseQty={increaseQty} decreaseQty={decreaseQty} />
                        ))}
                </tbody>
            </table>
        </div>
    )
}
export default CartList;