import CartItem from "./CartItem";
import { formatCurrency } from "./Currency";
import '../css/Cart.css'
import { Button, Table } from "react-bootstrap";
import {  Modal } from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

function CartList({carts,deleteCart, decreaseQty, increaseQty}){
    const navigate = useNavigate();
    const handleNavigateHome = () => {
        setShowModal(navigate('/'));
      };
    const [showModal, setShowModal] = useState(false);
    const totalPrice = carts.reduce((total, product) => {
        return total + (product.quantity * (product.discount ? (product.price - (product.price * (product.discount / 100))) : product.price));
    }, 0);
   
    if (!carts || carts.length === 0) {
        return (
            <Modal  show={true} onHide={() => setShowModal(false)}>
            <Modal.Header closeButton>
                <Modal.Title>No products in cart</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Your cart is empty. Please add some products.</p>
                <Button variant="secondary"  onClick={handleNavigateHome}>Ok</Button>
            </Modal.Body>
        </Modal>
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