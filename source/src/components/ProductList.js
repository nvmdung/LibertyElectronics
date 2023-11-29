import Carousel from 'react-bootstrap/Carousel';

import classes from '../css/Product.module.css'
import ProductItem from './ProductItem';

function ProductList({laptops,addCart,getDetails}){

    return(
        <div>
               <div className={classes.header}>
                <h1>Laptop List</h1>
            </div>
            <thead>
            <Carousel>
      <Carousel.Item>
       <img src='./image/nen/noel1.jpg' alt='image'/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src='./image/nen/noel2.jpg' alt='image'/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src='./image/nen/noel3.webp' alt='image'/>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
            </thead>
            <tbody>
                <div className={classes.boxes}>
            {
                    laptops.map(p => (
                        <ProductItem key={p.id} laptop={p}  addCart={addCart} getDetails={getDetails}/>
                    ))
                }
                </div>
              
            </tbody>


        </div>
    );
}
export default ProductList;