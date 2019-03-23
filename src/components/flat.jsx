import React from 'react';

const Flat = ({ imageUrl }) => {
  const styles = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url(${imageUrl})`
  };

  return (
    <div className="card" style={styles}>
      <div className="card-category">150 EUR</div>
      <div className="card-description">
        <h2>Super 60m2 in trendy neighborhood!</h2>
      </div>
    </div>
  );
};

export default Flat;
