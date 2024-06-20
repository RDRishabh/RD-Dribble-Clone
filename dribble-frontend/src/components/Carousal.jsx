import React from 'react';
import images from '../../Data/images.json';

function Carousel() {
  return (
    <div className="overflow-hidden w-full max-w-full mx-auto mt-8 mb-24">
      <div className="flex carousel space-x-8">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.link}
            alt={`Image ${image.value}`}
            class="w-1/6 rounded-custom-md"
          />
        ))}
        {images.map((image, index) => (
          <img
            key={index + images.length}
            src={image.link}
            alt={`Image ${image.value}`}
            class="w-1/6 rounded-custom-md"
          />
        ))}
      </div>
    </div>
  );
}

export default Carousel;
