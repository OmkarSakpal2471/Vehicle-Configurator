import React from 'react';

const ExampleCarouselImage = ({ src, text }) => {
  return (
    <img
      className="d-block w-100"
      src={src} // Use src prop variable instead of the string "src"
      alt={text}
    />
  );
};

export default ExampleCarouselImage;
