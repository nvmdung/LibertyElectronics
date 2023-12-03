import Carousel from 'react-bootstrap/Carousel';

function UncontrolledExample() {
  return (
    
    <Carousel >
            <Carousel.Item>
                <img className="d-block w-100 "
                    src="./image/banner/bannerA15.png" 
                    alt="First slide" />
                      
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100 "
                    src="./image/banner/bannerA15.png" 
                    alt="Second slide" />
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100 "
                    src="./image/banner/bannerA15.png" 
                    alt="Third slide" />
            </Carousel.Item>
        </Carousel>
        
  );
}

export default UncontrolledExample;