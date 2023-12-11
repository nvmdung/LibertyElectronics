import '../css/Home.css'
import '../css/DetailsHome.css'
import { useNavigate } from 'react-router-dom';

function Item({ laptop ,addCart,getDetails}){ 
    const handleAddToCart = (laptop) => {
        addCart(laptop);
    };
    const navigate = useNavigate();
    return (     
        <div>
            <div>
                <img src={laptop.image[0]} width="auto" height="300px" alt="image" />
            
            <div className="laptopnamehome">{laptop.name}</div>
            <div className="laptoppricehome">{laptop.price}</div>
            <div onClick={() => handleAddToCart(laptop)} className="addcarthome">
            <div class="buttonhome" data-tooltip={`$${laptop.price}`}>
  <div class="button-wrapper">
    <div class="texthome">Add To Cart</div>
    <span class="iconhome">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-cart2"
        viewBox="0 0 16 16">
        <path
          d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"
        ></path>
      </svg>
    </span>
  </div>
</div>
</div>
<div>
  <div  className="buttondetailhome"  onClick={() => {
        getDetails(laptop);
        navigate('/details');
      }}><div class="containerdetailhome">
      <div class="btndetailhome effect04" data-sm-link-text="Let go!" target="_blank"><span>Detail</span></div>
  </div></div>
</div>
</div>
        </div>
    );
}

export default Item;