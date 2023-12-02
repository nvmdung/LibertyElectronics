import React, { useState } from 'react';
import classes from '../css/Product.module.css';
import ProductItem from './ProductItem';

function ProductList({ laptops, addCart, getDetails }) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // Điều chỉnh số sản phẩm hiển thị trên mỗi trang nếu cần
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentLaptops = laptops.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(laptops.length / itemsPerPage);
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <div className={classes.boxes}>
        {currentLaptops.map((p) => (
          <ProductItem key={p.id} laptop={p} addCart={addCart} getDetails={getDetails}/>
        ))}
      </div>
      <div className={classes.pagination}>
        {Array.from({ length: totalPages }).map((_, index) => (
          <button key={index} onClick={() => handlePageChange(index + 1)}>
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default ProductList;