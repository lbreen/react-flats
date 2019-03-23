import React from 'react';

import Flat from './flat';

const FlatList = ({ flats }) => {
  return (
    <div className="flat-list">
      {flats.map((flat) => {
        return (
          <Flat
            name={flat.name}
            key={flat.name}
            imageUrl={flat.imageUrl}
            price={flat.price}
            priceCurrency={flat.priceCurrency}
          />
        );
      })}
    </div>
  );
};

export default FlatList;
