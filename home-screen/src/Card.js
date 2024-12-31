import React from 'react';

function Card({ title, url, image, description }) {
  const handleClick = () => {
    window.open(url, '_blank'); // Opens URL in a new tab
  };

  return (
    <div className="card h-100 shadow-lg border-0 overflow-hidden" onClick={handleClick} style={{ cursor: 'pointer' }}>
      <img src={image} className="card-img-top" alt={title} />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title text-primary fw-bold">{title}</h5>
        <p className="card-text flex-grow-1">{description}</p>
        <button className="btn btn-outline-primary mt-3">Learn More</button>
      </div>
    </div>
  );
}

export default Card;
