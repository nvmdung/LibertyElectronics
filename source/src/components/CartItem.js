import { formatCurrency } from "../components/Currency";
import Table from 'react-bootstrap/Table';
import '../css/Cart.css'

function CartItem({ product, deleteCart, decreaseQty, increaseQty }) {
    const totalPrice = product.price * product.quantity;

    return (
        <Table striped bordered hover>
            <thead className="cartlist">
                <tr>
                    <th>id</th>
                    <th>Name</th>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>{product.id}</th>
                    <th>{product.name}</th>
                    <th><img src={product.image[0]} alt="image" width="150px" /></th>
                    <th>$ {product.price}</th>
                    <th>
                        <button onClick={() => decreaseQty(product)}>-</button>
                        {product.quantity}
                        <button onClick={() => increaseQty(product)}>+</button>
                    </th>
                    <th>{formatCurrency(product.quantity * product.price)}</th>
                    <th><button onClick={() => deleteCart(product)}>Delete</button></th>
                </tr>
                <tr>
              <td></td>
              <td colSpan={4}>Total</td>
              <td>{formatCurrency(totalPrice)}</td>
        </tr>
            </tbody>
        </Table>
    );
}

export default CartItem;