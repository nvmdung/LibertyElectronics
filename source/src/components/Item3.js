import {  useNavigate } from "react-router-dom";
import style from '../css/Home.css';

function Item3({avatar}){
    const navigate = useNavigate();
    return(
        <div>
            <div className="box-phone">
                <tr className="phone-num">
                    <td><img src="./image/imgcall/call1.png" width="25px"/>0707185xxx</td>
                </tr>
            </div>
        <div>
        <tr key={avatar.id}>
            <div className="brand2">Best Recommand by User </div>
            <div className="container">
            <tr>
        <img src={avatar.image[21]} alt="laptop"style={{ width: '250px', height: 'auto' }}/>
        <td>{avatar.name[21]}</td>
        <p>${avatar.price[21]}</p>
            </tr>
            <tr>
        <img src={avatar.image[22]} alt="laptop"style={{ width: '250px', height: 'auto' }}/>
        <td>{avatar.name[22]}</td>
        <p>${avatar.price[22]}</p>
            </tr>
            <tr>
        <img src={avatar.image[23]} alt="laptop"style={{ width: '250px', height: 'auto' }}/>
        <td>{avatar.name[23]}</td>
        <p>${avatar.price[23]}</p>
            </tr>
            <tr>
        <img src={avatar.image[24]} alt="laptop"style={{ width: '250px', height: 'auto' }}/>
        <td>{avatar.name[24]}</td>
        <p>${avatar.price[24]}</p>
            </tr>
            </div>
          
            <footer>
                <button onClick={() => navigate(`/home`)}>Back</button>
                {/* <button onClick={() => navigate(`/edit/${laptop.id}`)}>Update</button> */}
            </footer>
        </tr>
        </div>
        </div>
    );
}

export default Item3;