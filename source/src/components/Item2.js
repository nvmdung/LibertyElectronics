import { Navigate, useNavigate } from "react-router-dom";
import style from '../css/Home.css';

function Item2({laptop}){
    const navigate = useNavigate();
    return(
        <div>
        <tr key={laptop.id}>
        <div>
        <img src={laptop.image[0]} alt="laptop"style={{ width: '120px', height: 'auto' }}/>
        <td>{laptop.name}</td>
        <p>{laptop.price}</p>
        </div>
            <td>
                {/* <button onClick={() => navigate(`/details/${laptop.id}`)}>Details</button> */}
                {/* <button onClick={() => navigate(`/edit/${laptop.id}`)}>Update</button> */}
            </td>
        </tr>
        </div>
    );
}

export default Item2;