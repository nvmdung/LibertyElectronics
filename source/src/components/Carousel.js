import Carousel from 'react-bootstrap/Carousel';

function UncontrolledExample() {
  return (
    
    <Carousel >
            <Carousel.Item>
                <img className="d-block w-100 "
                    src="./image/banner/bannerA15.png" height={"400px"}
                    alt="First slide" />
                      <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100 "
                    src="./image/banner/bannerA15.png" height={"400px"}
                    alt="Second slide" />
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100 "
                    src="./image/banner/bannerA15.png" height={"400px"}
                    alt="Third slide" />
            </Carousel.Item>
        </Carousel>
        
  );
}

export default UncontrolledExample;