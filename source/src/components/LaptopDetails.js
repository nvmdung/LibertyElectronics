import { useState } from 'react';
import '../css/LaptopDetails.css';

function LaptopDetails({laptop,addCart}){
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };
    return(
        <div className="laptopDetails">
            <div>
            <div className="image-gallery-container">
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
        )}
      </div>
      <div className="small-images">
        {laptop.image.slice(0,5).map((image, index) => (
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
            <h3>Specifications</h3>
            
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
                <span class="col-xs-8">{laptop.cpuchip}t</span></div>
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
                <button onClick={()=> addCart(laptop)}>Add to cart</button>
                <a href="www.google.com" download="laptop_detail">Download</a>       
            </div>
        
    )
}
export default LaptopDetails;