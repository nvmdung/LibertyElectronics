import { Link } from "react-router-dom";
import '../css/Home.css'
function MenuHome(){    
    return(
        <div>
            <div className='menu'>
          <button className='menubtn'>Menu</button>
          <div className='menu-content'>
        <Link to="/asus">Asus</Link>
        <Link to='msi'>MSI</Link>
        <Link to='dell'>DELL</Link>
        <Link to='gigabyte'>GIGABYTE</Link>
        <Link to='lenovo'>LENOVO</Link>
        </div>
        </div>
        </div>
    )
}export default MenuHome;