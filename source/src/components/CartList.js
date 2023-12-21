import CartItem from "./CartItem";
import { formatCurrency } from "./Currency";
import '../css/Cart.css'
import { Table } from "react-bootstrap";


function CartList({carts,deleteCart, decreaseQty, increaseQty}){
    const totalPrice = carts.reduce((total, product) => {
        return total + (product.price * product.quantity);
    }, 0);
   
    if (!carts || carts.length === 0) {
        return (
            <div className="cartlist">
                <h3>No products in cart</h3>
            </div>
        );
    }
    return(
        <div className="cartlist">
              <h2>Cart List</h2>  
              <Table> 
              <thead className="carthead">
                <tr>
                <th className="cartlistid">id</th>       
                <th className="cartlistproduct">Product</th>
                    <th className="cartlistname">Name</th>
                    <th className="cartlistprice">Price</th>
                    <th className="cartlistquantity">Quantity</th>
                    <th className="cartlisttotal">Total</th>
                    <th className="cartlistaction">Action</th>
                </tr>
            </thead>  
            </Table>    
            <> 
         
            </>             
                {carts.map(product => (
                    <CartItem key={product.id} product={product} deleteCart={deleteCart} increaseQty={increaseQty} decreaseQty={decreaseQty} />
                        ))}
                <div>
                    <div className="cartlisttotaliall1">All Product:</div>
                    <div className="cartlisttotaliall2"><h5>SubTotal : {formatCurrency(totalPrice)}</h5></div>
                </div>
        </div>
    )
}
export default CartList;