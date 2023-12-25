import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import classes from '../css/Carousel.css'; 

function ImageSlider ()  {
  const settings = {
    dots: true,
    
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0%', 
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <></>, 
    nextArrow: <></>, 
  };

  const image = [
    { id: 1, url: './image/banner/banner_tuf.png', alt: 'Image 1'},
    { id: 2, url: './image/banner/Zenbook2.jpg', alt: 'Image 2'},
    { id: 3, url:'./image/banner/lenovobanner.jpg', alt: 'Image 3'},
  ];

  return (
    <div className={classes.box}>
    <div className="slider-container">
    <Slider {...settings}>
      {image.map((images) => (
        <div key={images.id} className="imageCarousel-container">
          <img src={images.url} alt={images.alt} />
        </div>
      ))}
    </Slider>
  </div></div>
  );
};

export default ImageSlider;