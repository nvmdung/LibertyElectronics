import { useState } from 'react';
import '../css/LaptopDetails.css';
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
function LaptopDetails({laptop,addCart}){
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };
const calculateDiscountedPrice = (price, discount) => {
  return (price * (100 - discount)) / 100;
};
const handleCompare = () => {
  // Chuyển hướng đến trang so sánh với ID của sản phẩm
  navigate(`/compare/${laptop.id}`);
};
const handleAddToCart = (laptop) => {
  addCart(laptop);
  setShowModal(true);
};
const [showModal, setShowModal] = useState(false);
const handleCloseModal = () => {
setShowModal(false);
};
const navigate = useNavigate();
const handleNavigateHome = () => {
  setShowModal(navigate('/cart'));
};

const discountedPrice = calculateDiscountedPrice(laptop.price, laptop.discount || 0);
    return(
        <div className="laptopDetails">
            <div>
            <div className="image-gallery-container">
            <div className='gridimagebrand'>
            <div className="large-image">
        {selectedImage ? (
          <img src={selectedImage} alt="Selected" className="selected-image" />
        ) : (
          <p>{laptop.image.slice(0,1).map((image, index) => (
            <img
              key={index}
              src={image}
              alt="laptop" className='large-detailimg'
              onClick={() => handleImageClick(image)}
            />  ))}</p>
        )}</div>
        <div className='detailpro'>
          <p className='detailnamelaptop'>{laptop.name}</p>
          <p >{laptop.discount ? (
              <div className="laptopdetailprice">
                <span className="originallaptopdetailprice">${laptop.price}</span><br/>
                ${discountedPrice.toFixed(2)} (-{laptop.discount}%)
              </div>
            ) : (
              <div className="laptopdetailprice1">${laptop.price}</div>
            )}</p>

          <div onClick={() => handleAddToCart(laptop)} className="addcardetail">
            <div class="buttondetaillaptop" data-tooltip={`$${laptop.price}`}>
  <div class="buttondetaillaptop-wrapper">
    <div class="textdetaillaptop">Add To Cart</div>
    <span class="icondetaillaptop">
      <svg
        
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
<div class = "product-detail-order">
<ul>
          <li>Available: <span>in stock</span></li>
          <li>Category: <span>Laptop</span></li>
          <li>Shipping Area: <span>All over the world</span></li>
          <li>Shipping Fee: <span>Free</span></li>
        </ul>
        </div>
        </div>
      </div>
      <Link to={`/compare/${laptop.id}`} onClick={handleCompare} className="compare-link">
              Compare
            </Link>
      <div className="small-images">
        {laptop.image.slice(0,4).map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            onClick={() => handleImageClick(image)}
            className="small-image"
          />
        ))}
      </div>
    </div>
          <div>
            <h3 className='h3laptopdetail'>Specifications</h3>
            
              <div class="row">
                <div class="col-xs-4">Screensize:
               <span class="col-xs-8">{laptop.screensize}</span></div>
              </div>
              <div class="row">
                <div class="col-xs-4">Weight:
                <span class="col-xs-8">{laptop.itemweight}</span></div>
              </div>
              <div class="row">
                <div class="col-xs-4">CPU:
                <span class="col-xs-8">{laptop.cpuchip}</span></div>
              </div>
              <div class="row">
                <div class="col-xs-4">RAM:
                <span class="col-xs-8">{laptop.memorysize}</span></div>
              </div>
              <div class="row">
                <div class="col-xs-4">Hard Disk:
                <span class="col-xs-8">{laptop.harddisksize}</span></div>
              </div>
              <div class="row">
                <div class="col-xs-4">Battery:
                <span class="col-xs-8">{laptop.pin}</span></div>
              </div>
              <div class="row">
                <div class="col-xs-4">Warranty:
                <span class="col-xs-8">{laptop.warranty}</span></div>
              </div>
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
          <Button variant="secondary" onClick={handleNavigateHome}>
            Cart
          </Button>
        </Modal.Footer>
      </Modal>
                <a href="www.google.com" download="laptop_detail">Download</a>       
            </div>
        
    )
}
export default LaptopDetails;