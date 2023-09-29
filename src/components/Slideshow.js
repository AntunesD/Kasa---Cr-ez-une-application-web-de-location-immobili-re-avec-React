import React, { useState } from "react";

function Slideshow({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="carousel">
      {images.length > 1 && (
        <nav>
          <ul>
            <li className="carousel_left" onClick={handlePrevClick}><i className="fa-sharp fa-solid fa-chevron-left"></i></li>
            <li className="carousel_numero" >
              {currentIndex + 1} / {images.length}
            </li>
            <li className="carousel_right" onClick={handleNextClick}><i className="fa-sharp fa-solid fa-chevron-right"></i></li>
          </ul>
        </nav>
      )} 
        <img src={images[currentIndex]} alt={`Vue du logement ${currentIndex +1}`} />
    </div>
  );
}

export default Slideshow;
