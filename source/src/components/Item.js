import React, { useState } from 'react';
import '../css/Home.css';

function Item({ laptop, addCart }) {
    const [showButton, setShowButton] = useState(false);

    const handleMouseEnter = () => {
        setShowButton(true);
    };
    const handleMouseLeave = () => {
        setShowButton(false);
    };
    const handleAddToCart = (laptop) => {
        addCart(laptop);
    };
    return (
        <div
            className="item-container"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div>
                <img src={laptop.image[0]} width="auto" height="130px" alt="image" />
            </div>
            <div className="laptopname">{laptop.name}</div>
            <div className="laptopprice">${laptop.price}</div>
            {showButton && (
                <button onClick={() => handleAddToCart(laptop)} className="addcart">
                    Add to Cart
                </button>
            )}
        </div>
    );
}

export default Item;