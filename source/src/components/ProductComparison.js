import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import '../css/ProductComparison.css'; // Import your CSS file

const ProductComparison = ({ productDetail }) => {
    const { id } = useParams();
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [similarProducts, setSimilarProducts] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
  
    useEffect(() => {
      // Find the selected product based on the provided ID
      const selected = productDetail.find((product) => product.id === parseInt(id, 10));
      setSelectedProduct(selected);
  
      // Filter similar products based on the product type
      const similar = productDetail.filter(
        (product) => product.type === selected.type && product.id !== parseInt(id, 10)
      );
      setSimilarProducts(similar);
    }, [id, productDetail]);
  
    const handleNextProduct = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % similarProducts.length);
    };
  
    const handlePrevProduct = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + similarProducts.length) % similarProducts.length);
    };
  
    return (
      <div className="product-comparison-container">
        <div className="product-column main-product">
          <h2>Selected Product</h2>
          {selectedProduct && (
            <div>
              <h3>{selectedProduct.name}</h3>
              <p>Type: {selectedProduct.type}</p>
              <img src={selectedProduct.image} alt={selectedProduct.name} />
              <p>Price: ${selectedProduct.price}</p>
              <p>Screensize: {selectedProduct.screensize}</p>
              {/* Add more details as needed */}
            </div>
          )}
        </div>
        <div className="product-column similar-products">
          <h2>Similar Products</h2>
          {similarProducts.length > 0 && (
            <div>
              <div className="similar-product-details">
                <h3>{similarProducts[currentIndex].name}</h3>
                <p>Type: {similarProducts[currentIndex].type}</p>
                <img src={similarProducts[currentIndex].image} alt={similarProducts[currentIndex].name} />
                <p>Price: ${similarProducts[currentIndex].price}</p>
                <p>Screensize: {similarProducts[currentIndex].screensize}</p>
                {/* Add more details as needed */}
              </div>
              <div className="navigation-buttons">
                <button onClick={handlePrevProduct}>Previous</button>
                <button onClick={handleNextProduct}>Next</button>
              </div>
              <div className="compare-link-container">
                <Link to={`/compare/${id}`} className="compare-link">
                  Compare All
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };
  
  export default ProductComparison;