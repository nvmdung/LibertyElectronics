import { Navigate, useNavigate } from "react-router-dom";
import style from '../css/Home.css';

function Item2({avatar}){
    const navigate = useNavigate();
    return(
        <div>
        <tr key={avatar.id}>
        <div className="brand2">Asus</div>
        <div className="container">
            <tr >
        <img src={avatar.image[0]} alt="laptop"style={{ width: '250px', height: 'auto' }}/>
        <td>{avatar.name[0]}</td>
        <p>{avatar.price[0]}</p>
            </tr>
            <tr className="container-grid">
        <img src={avatar.image[1]} alt="laptop"style={{ width: '280px', height: 'auto' }}/>
        <td>{avatar.name[1]}</td>
        <p>{avatar.price[1]}</p>
            </tr>
            <tr>
        <img src={avatar.image[2]} alt="laptop"style={{ width: '250px', height: 'auto' }}/>
        <td>{avatar.name[2]}</td>
        <p>{avatar.price[2]}</p>
            </tr>
            <tr>
        <img src={avatar.image[3]} alt="laptop"style={{ width: '250px', height: 'auto' }}/>
        <td>{avatar.name[3]}</td>
        <p>{avatar.price[3]}</p>
            </tr>
            </div>
            <div className="brand">Lenovo</div>
            <div className="container2" >
                <tr>
        <img src={avatar.image[4]} alt="laptop"style={{ width: '180px', height: 'auto'}}/>
        <td >{avatar.name[4]}</td>
        <p>{avatar.price[4]}</p>
            </tr>
            <tr  className="container2-grid">
        <img src={avatar.image[5]} alt="laptop"style={{ width: '200px', height: 'auto' }}/>
        <td>{avatar.name[5]}</td>
        <p>{avatar.price[5]}</p>
            </tr>
            <tr>
        <img src={avatar.image[6]} alt="laptop"style={{ width: '180px', height: 'auto' }}/>
        <td>{avatar.name[6]}</td>
        <p>{avatar.price[6]}</p>
            </tr>
            <tr>
        <img src={avatar.image[7]} alt="laptop"style={{ width: '180px', height: 'auto' }}/>
        <td>{avatar.name[7]}</td>
        <p>{avatar.price[7]}</p>
            </tr>
            <tr>
        <img src={avatar.image[8]} alt="laptop"style={{ width: '180px', height: 'auto' }}/>
        <td>{avatar.name[8]}</td>
        <p>{avatar.price[8]}</p>
            </tr>
            </div>
            <div className="brand">Gigabyte </div>
            <div className="container">
            <tr>
        <img src={avatar.image[9]} alt="laptop"style={{ width: '250px', height: 'auto' }}/>
        <td>{avatar.name[9]}</td>
        <p>{avatar.price[9]}</p>
            </tr>
            <tr>
        <img src={avatar.image[10]} alt="laptop"style={{ width: '250px', height: 'auto' }}/>
        <td>{avatar.name[10]}</td>
        <p>{avatar.price[10]}</p>
            </tr>
            <tr>
        <img src={avatar.image[11]} alt="laptop"style={{ width: '250px', height: 'auto' }}/>
        <td>{avatar.name[11]}</td>
        <p>{avatar.price[11]}</p>
            </tr>
            <tr>
        <img src={avatar.image[12]} alt="laptop"style={{ width: '250px', height: 'auto' }}/>
        <td>{avatar.name[12]}</td>
        <p>{avatar.price[12]}</p>
            </tr>
            </div>
            <div className="brand">MSI</div>
            <div className="container">
            <tr>
        <img src={avatar.image[13]} alt="laptop"style={{ width: '250px', height: 'auto' }}/>
        <td>{avatar.name[13]}</td>
        <p>{avatar.price[13]}</p>
            </tr>
            <tr>
        <img src={avatar.image[14]} alt="laptop"style={{ width: '250px', height: 'auto' }}/>
        <td>{avatar.name[14]}</td>
        <p>{avatar.price[14]}</p>
            </tr>
            <tr>
        <img src={avatar.image[15]} alt="laptop"style={{ width: '250px', height: 'auto' }}/>
        <td>{avatar.name[15]}</td>
        <p>{avatar.price[15]}</p>
            </tr>
            <tr>
        <img src={avatar.image[16]} alt="laptop"style={{ width: '250px', height: 'auto' }}/>
        <td>{avatar.name[16]}</td>
        <p>{avatar.price[16]}</p>
            </tr>
            </div>
            <div className="brand">HP </div>
            <div className="container">
            <tr>
        <img src={avatar.image[17]} alt="laptop"style={{ width: '250px', height: 'auto' }}/>
        <td>{avatar.name[17]}</td>
        <p>{avatar.price[17]}</p>
            </tr>
            <tr>
        <img src={avatar.image[18]} alt="laptop"style={{ width: '250px', height: 'auto' }}/>
        <td>{avatar.name[18]}</td>
        <p>{avatar.price[18]}</p>
            </tr>
            <tr>
        <img src={avatar.image[19]} alt="laptop"style={{ width: '250px', height: 'auto' }}/>
        <td>{avatar.name[19]}</td>
        <p>{avatar.price[19]}</p>
            </tr>
            <tr>
        <img src={avatar.image[20]} alt="laptop"style={{ width: '240px', height: 'auto' }}/>
        <td>{avatar.name[20]}</td>
        <p>{avatar.price[20]}</p>
            </tr>
            </div>
            <div className="brand">Dell</div> 
            <div className="container">
            <tr>
        <img src={avatar.image[21]} alt="laptop"style={{ width: '250px', height: 'auto' }}/>
        <td>{avatar.name[21]}</td>
        <p>{avatar.price[21]}</p>
            </tr>
            <tr>
        <img src={avatar.image[22]} alt="laptop"style={{ width: '250px', height: 'auto' }}/>
        <td>{avatar.name[22]}</td>
        <p>{avatar.price[22]}</p>
            </tr>
            <tr>
        <img src={avatar.image[23]} alt="laptop"style={{ width: '250px', height: 'auto' }}/>
        <td>{avatar.name[23]}</td>
        <p>{avatar.price[23]}</p>
            </tr>
            <tr>
        <img src={avatar.image[24]} alt="laptop"style={{ width: '250px', height: 'auto' }}/>
        <td>{avatar.name[24]}</td>
        <p>{avatar.price[24]}</p>
            </tr>
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