import React from "react";
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const Slideshow = () => {
  const images = [
    "/buildings/2-bed0.jpg",
    "/buildings/2-bed1.jpg",
    "/buildings/3-bed0.jpg",
    "/buildings/3-bed1.jpg",
    "/buildings/4-bed0.jpg",
  ];

  const zoomOutProperties = {
    duration: 1000,
    transitionDuration: 5000,
    infinite: true,
    indicators: false,
    scale: 1.2,
    arrows: false,
  };

  return (
    <div className="slide-container">
      <Zoom {...zoomOutProperties}>
        {images.map((each, index) => (
          <img key={index} style={{ width: "100%" }} src={each} />
        ))}
      </Zoom>
    </div>
  );
};

export default Slideshow;
