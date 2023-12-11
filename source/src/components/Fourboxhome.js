import React, { useState } from "react";
import '../css/Fourboxhome.css'
import { Link } from "react-router-dom";

const Images = () => {
  const [images, setImages] = useState([
    {
      id: 1,
      src: "./image/banner/office.jpg",
      alt: "Image 1",
      text: "Office Laptop",
      isHovered: false,
      link:"/office",
    },
    {
      id: 2,
      src: "./image/banner/MSI.png",
      alt: "Image 2",
      text: "Laptop Gaming",
      isHovered: false,
      link:"/gaming",
    },
    {
      id: 3,
      src: "./image/asus/asustuf/0.png",
      alt: "Image 3",
      text: "Best Seller",
      isHovered: false,
      link:"/office",
    },
    {
      id: 4,
      src: "./image/asus/asustuf/0.png",
      alt: "Image 4",
      text: "Description 4",
      isHovered: false,
      link:"/office", 
    },
  ]);

  const handleHover = (index) => {
    const updatedImages = images.map((image, i) => {
      if (i === index) {
        return { ...image, isHovered: true };
      } else {
        return { ...image, isHovered: false };
      }
    });
    setImages(updatedImages);
  };

  return (
    <div className="container4box">
      {images.map((image, index) => (
        <Link key={image.id} to={image.link}>
          <Image image={image} />
        </Link>
      ))}
    </div>
  );
};

const Image = ({ image }) => {

  return (
    <div className="box4  ">
      <img
        src={image.src}
        alt={image.alt}
        className="image4box"
      />
      <div className="image4box-text">
        <span>{image.text}</span>
      </div>
    </div>
  );
};

export default Images;