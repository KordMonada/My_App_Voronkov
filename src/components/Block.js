import React from 'react';

function Block({ image, title, description }) {
  return (
    <div className="item">
      <img src={image} alt={title} className="item__image" />
      <strong>{title}</strong>
      <span className="center__span">{description}</span>
    </div>
  );
}

export default Block;
