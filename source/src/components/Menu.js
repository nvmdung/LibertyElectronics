import { Link } from "react-router-dom";
import '../css/Menu.css'
function Menu(){
    const DeletelocalStorage = () => {
        localStorage.clear()
       } 
    return(
        <tr className="headermenu">
            <a href="#" className="logo">logo</a>
            <input type="checkbox" id="check"/>
            <label for="check"  className="icons"><i class='bx bx-menu' id="menu-icon"></i>
            <i class='bx bx-x' id="close-icon" ></i>
            </label>
            <nav className="navbar">
            <Link className='headerHome' to="/">Home</Link>
         <Link className='headerProduct' to="/product">Product</Link>
         <Link className='headerAbout' to="/about">About us</Link> 
           <Link className='headerContact' to="/contact">Contact us</Link>
           <Link className='headerBlog' to="/blog">Blog</Link>
              <Link className='headerCart' to="/cart">Cart </Link>
              {localStorage.getItem('registeredUser') ?
        (<span>
          Hello {localStorage.getItem('username')},
        <Link className="header1" to="/login" onClick={()=> DeletelocalStorage()}>
          Logout
        </Link>
        </span>) :
        (<Link className="header1" to="/login">Login</Link>)
}
            </nav>
        </tr>
    )
}
export default Menu;