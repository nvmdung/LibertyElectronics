import '../css/Home.css'
import '../css/DetailsHome.css'
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Item({ laptop ,addCart,getDetails}){ 
    const handleAddToCart = (laptop) => {
        addCart(laptop);
        setShowModal(true);
    };
    const calculateDiscountedPrice = (price, discount) => {
      return (price * (100 - discount)) / 100;
    };
    const discountedPrice = calculateDiscountedPrice(laptop.price, laptop.discount || 0);
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);
    const handleCloseModal = () => {
      setShowModal(false);
    };
    return (     
        <div>
            <div>
                <img src={laptop.image[0]} width="auto" height="300px" alt="image" />
            
            <div className="laptopnamehome">{laptop.name}</div>
            <div className="laptoppricehome">{laptop.discount ? (
              <div className="laptopdetailprice">
                <span className="originallaptopdetailprice">${laptop.price}</span><br/>
                ${discountedPrice.toFixed(2)} (-{laptop.discount}%)
              </div>
            ) : (
              <div className="laptopdetailprice1">${laptop.price}</div>
            )}</div>
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
<Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Added To Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>Your item has been added to the cart.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
        </div>
    );
}

export default Item;