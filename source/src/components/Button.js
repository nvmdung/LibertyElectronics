import '../css/Button.css';
import { useNavigate } from 'react-router-dom';

function Button() {
  const navigate = useNavigate();

  return (
    <div className='container-btn5'>
      <div className='container-productbutton'>
        <button className='btn-91' onClick={() => navigate('/asus')}>
          <span>ASUS</span>
        </button>
        <button className='btn-91' onClick={() => navigate('/lenovo')}>
          <span>LENOVO</span>
        </button>
        <button className='btn-91' onClick={() => navigate('/msi')}>
          <span>MSI</span>
        </button>
        <button className='btn-91' onClick={() => navigate('/gigabyte')}>
          <span>GIGABYE</span>
        </button>
        <button className='btn-91' onClick={() => navigate('/hp')}>
          <span>HP</span>
        </button>
        <button className='btn-91' onClick={() => navigate('/dell')}>
          <span>DELL</span>
        </button>
      </div>
    </div>
  );
}

export default Button;