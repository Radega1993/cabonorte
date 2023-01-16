import React, { useState, useEffect } from 'react';

export const HeroImage = (props) => {
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [interval, setInterval] = useState(3000);


  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((currentImageIndex + 1) % props.images.length);
    }, interval);
    return () => clearInterval(intervalId);
  }, [interval]);

  const handlePrevClick = () => {
    setCurrentImageIndex((currentImageIndex - 1 + props.images.length) % props.images.length);
  };

  const handleNextClick = () => {
    setCurrentImageIndex((currentImageIndex + 1) % props.images.length);
  };

  return (

    <div id="heroImageSlider" className="carousel slide" data-ride="carousel" data-interval={interval}>
      <div className="carousel-inner">
        {props.images.map((image, index) => (
          <div key={index} className={`carousel-item ${index === currentImageIndex ? 'active' : ''}`}>
            <img src={image} className="w-100 h-50" alt="Hero Image" />
          </div>
        ))}
      </div>
      <a onClick={handlePrevClick} className="carousel-control-prev" href="#heroImageSlider" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Anterior</span>
      </a>
      <a onClick={handleNextClick} className="carousel-control-next" href="#heroImageSlider" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Siguiente</span>
      </a>
    </div>
  );
}
