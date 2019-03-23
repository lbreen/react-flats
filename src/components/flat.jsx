import React from 'react';

const Flat = ({
  name,
  imageUrl,
  price,
  priceCurrency
}) => {
  const styles = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url(${imageUrl})`
  };

  return (
    <div className="card" style={styles}>
      <div className="card-category">
        {price}
        {priceCurrency}
      </div>
      <div className="card-description">
        <h2>{name}</h2>
      </div>
    </div>
  );
};

export default Flat;
