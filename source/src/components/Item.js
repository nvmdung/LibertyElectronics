import {  useNavigate } from "react-router-dom";
import style from '../css/Home.css';

function Item({laptop}){
    const navigate = useNavigate();
    return(
        <div>
            <tr>
                <td>{laptop.name}</td>
                <td><img src={laptop.image[0]} width="250px" alt="image"/></td>
            </tr>
        <tr>
            <footer>
               
            </footer>
        </tr>
        </div>
    );
}

export default Item;