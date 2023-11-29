import {  useNavigate } from "react-router-dom";
import style from '../css/Home.css';

function Item2({avatar}){
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
        <div className="brand2">Office Laptop</div>
        <div className="container">
            <tr >
        <img src={avatar.image[0]} alt="laptop"style={{ width: '250px', height: 'auto' }}/>
        <td>{avatar.name[0]}</td>
        <p>${avatar.price[0]}</p>
            </tr>
            <tr className="container-grid">
        <img src={avatar.image[6]} alt="laptop"style={{ width: '280px', height: 'auto' }}/>
        <td>{avatar.name[6]}</td>
        <p>${avatar.price[6]}</p>
            </tr>
            <tr>
        <img src={avatar.image[2]} alt="laptop"style={{ width: '250px', height: 'auto' }}/>
        <td>{avatar.name[2]}</td>
        <p>${avatar.price[2]}</p>
            </tr>
            <tr>
        <img src={avatar.image[3]} alt="laptop"style={{ width: '250px', height: 'auto' }}/>
        <td>{avatar.name[3]}</td>
        <p>${avatar.price[3]}</p>
            </tr>
            </div>
            <div className="brand">Laptop Gaming</div>
            <div className="container2" >
                <tr>
        <img src={avatar.image[1]} alt="laptop"style={{ width: '250px', height: 'auto'}}/>
        <td >{avatar.name[1]}</td>
        <p>${avatar.price[1]}</p>
            </tr>
            <tr  className="container2-grid">
        <img src={avatar.image[2]} alt="laptop"style={{ width: '250px', height: 'auto' }}/>
        <td>{avatar.name[2]}</td>
        <p>${avatar.price[2]}</p>
            </tr>
            <tr>
        <img src={avatar.image[10]} alt="laptop"style={{ width: '250px', height: 'auto' }}/>
        <td>{avatar.name[10]}</td>
        <p>${avatar.price[10]}</p>
            </tr>
            <tr>
        <img src={avatar.image[11]} alt="laptop"style={{ width: '250px', height: 'auto' }}/>
        <td>{avatar.name[11]}</td>
        <p>${avatar.price[11]}</p>
            </tr>
            </div>
            <div className="brand">Best Recommand by User </div>
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
                <button onClick={() => navigate(`/home1`)}>Next</button>
                {/* <button onClick={() => navigate(`/edit/${laptop.id}`)}>Update</button> */}
            </footer>
        </tr>
        </div>
        </div>
    );
}

export default Item2;