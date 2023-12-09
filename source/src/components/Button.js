import '../css/Button.css'
import { useNavigate } from 'react-router-dom';
function Button(){
    const navigate=useNavigate();
    return(
        <div className='container-btn5'>
        <tr className='container-productbutton'>
          <td className='btn-91'><button onClick={() => {
            navigate('/asus');
          }}><span>ASUS</span></button></td>
          <td className='btn-91'><button onClick={()=>{
            navigate('/lenovo');
          }}><span>LENOVO</span></button></td>
          <td className='btn-91'><button onClick={() => {
           navigate('/msi');
          }}><span>MSI</span></button></td>
          <td className='btn-91'><button onClick={() => {
           navigate('/gigabyte');
          }}><span>GIGABYE</span></button></td>
          <td className='btn-91'><button onClick={() =>{ 
           navigate('/hp');
         }}><span>HP</span></button></td>
          <td className='btn-91'><button onClick={() => {
           navigate('/dell');
          }}><span>DELL</span></button></td>
        </tr>
      </div>
    );
}
export default Button;