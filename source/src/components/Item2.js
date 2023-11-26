import { Navigate, useNavigate } from "react-router-dom";
function Item2({laptop}){
    const navigate = useNavigate();
    return(
        <div>
        <tr key={laptop.id}>
        <div>
        <img src={laptop.image[0]} alt="laptop"style={{ width: '150px', height: 'auto' }}/>
        
        <td>{laptop.price}</td>
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