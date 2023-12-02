import {  useNavigate } from "react-router-dom";
import style from '../css/Home.css';

function Item({laptop}){
    const navigate = useNavigate();
    return(
        <div>
            <div><img src={laptop.image[0]} width="150px" alt="image"/></div>
            <div className="laptopname"><td>{laptop.name}</td></div>
        <tr>
            <footer>
               
            </footer>
        </tr>
        </div>
    );
}

export default Item;