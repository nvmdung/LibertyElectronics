import Carousel from 'react-bootstrap/Carousel';

function UncontrolledExample() {
  return (
    
    <Carousel >
            <Carousel.Item>
                <img className="d-block w-100 "
                    src="./image/banner/images.png" height="270px"
                    alt="First slide" />
                      
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100 "
                    src="./image/banner/lenovo.png" height="270px" 
                    alt="Second slide" />
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100 "
                    src="./image/banner/banner_tuf.png" height="270px"
                    alt="Third slide" />
            </Carousel.Item>
        </Carousel>
        
  );
}

export default UncontrolledExample;