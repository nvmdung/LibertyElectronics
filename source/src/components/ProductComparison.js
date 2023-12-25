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
            <div>
              <h3>{selectedProduct.name}</h3>
              <p>Type: {selectedProduct.type}</p>
              <img src={`.${selectedProduct.image[0]}`} width="50%" alt={selectedProduct.name} />
              <div>
                        ${selectedProduct.discount ? 
                            ((selectedProduct.price - (selectedProduct.price * (selectedProduct.discount / 100))).toFixed(2)) : (selectedProduct.price.toFixed(2))}
                        </div>       
            </div>
                <div>      
                <div class="rowdetailcompare">
                  <div class="col-xs-4compare">Screensize:</div>
                 <div class="col-xs-8compare">{selectedProduct.screensize}</div>
                </div>
                <div class="rowdetailcompare">
                  <div class="col-xs-4compare">Weight:</div>
                  <div class="col-xs-8compare">{selectedProduct.itemweight}</div>
                </div>
                <div class="rowdetailcompare">
                  <div class="col-xs-4compare">CPU:</div>
                  <div class="col-xs-8compare">{selectedProduct.cpuchip}</div>
                </div>
                <div class="rowdetailcompare">
                  <div class="col-xs-4compare">RAM:</div>
                  <div class="col-xs-8compare">{selectedProduct.memorysize}
                  </div>
                </div>
                <div class="rowdetailcompare">
                  <div class="col-xs-4compare">Hard Disk:</div>
                  <div class="col-xs-8compare">{selectedProduct.harddisksize}</div>
                </div>
                <div class="rowdetailcompare">
                  <div class="col-xs-4compare">Battery:</div>
                  <div class="col-xs-8">{selectedProduct.pin}</div>
                </div>
                <div class="rowdetailcompare">
                  <div class="col-xs-4compare">Warranty:</div>
                  <div class="col-xs-8compare">{selectedProduct.warranty}</div>
                </div>
              </div>
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
                <img src={`.${similarProducts[currentIndex].image[0]}`} width="50%" alt={similarProducts[currentIndex].name} />
                <div>
                        ${similarProducts[currentIndex].discount ? 
                            ((similarProducts[currentIndex].price - (similarProducts[currentIndex].price * (similarProducts[currentIndex].discount / 100))).toFixed(2)) : (similarProducts[currentIndex].price.toFixed(2))}
                        </div>          
                <div>      
            <div class="rowdetailcompare">
              <div class="col-xs-4compare">Screensize:</div>
             <div class="col-xs-8compare">{similarProducts[currentIndex].screensize}</div>
            </div>
            <div class="rowdetailcompare">
              <div class="col-xs-4compare">Weight:</div>
              <div class="col-xs-8compare">{similarProducts[currentIndex].itemweight}</div>
            </div>
            <div class="rowdetailcompare">
              <div class="col-xs-4compare">CPU:</div>
              <div class="col-xs-8compare">{similarProducts[currentIndex].cpuchip}</div>
            </div>
            <div class="rowdetailcompare">
              <div class="col-xs-4compare">RAM:</div>
              <div class="col-xs-8compare">{similarProducts[currentIndex].memorysize}
              </div>
            </div>
            <div class="rowdetailcompare">
              <div class="col-xs-4compare">Hard Disk:</div>
              <div class="col-xs-8compare">{similarProducts[currentIndex].harddisksize}</div>
            </div>
            <div class="rowdetailcompare">
              <div class="col-xs-4compare">Battery:</div>
              <div class="col-xs-8compare">{similarProducts[currentIndex].pin}</div>
            </div>
            <div class="rowdetailcompare">
              <div class="col-xs-4compare">Warranty:</div>
              <div class="col-xs-8compare">{similarProducts[currentIndex].warranty}</div>
            </div>
          </div>
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