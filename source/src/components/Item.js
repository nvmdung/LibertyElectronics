import { Navigate, useNavigate } from "react-router-dom";

function Item({laptop, onDelete}){
    const navigate = useNavigate();
    return(
        <div>
            <tr>
             <td>{laptop.name}</td>
           <td>
            <img src={laptop.image[0]} width="100px"/>
           </td>
             </tr>
            
             <tr>
            </tr>
            <h2>${laptop.price}</h2>
            <tr>
            <td>
                {/* <button onClick={() => navigate(`/details/${laptop.id}`)}>Details</button> */}
                {/* <button onClick={() => navigate(`/edit/${laptop.id}`)}>Update</button> */}
                <button onClick={() => onDelete(laptop.id)}>Delete</button>
            </td>
        </tr>
        </div>
    );
}

export default Item;