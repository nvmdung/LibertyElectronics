function CartItem({laptop,deleteCart}){
    return(
        <tr>
            <td>{laptop.name}</td>
            <td><img src={laptop.image[0]} alt="image" width="150px"/></td>
            <td>{laptop.price}</td>
            <td> <button onClick={() => deleteCart(laptop.id)}>Delete</button></td>
        </tr>
    )
}
export default CartItem;