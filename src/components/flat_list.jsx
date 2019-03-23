import React from 'react';

import Flat from './flat';

const FlatList = ({ flats, selectedFlat, selectFlat }) => {
  return (
    <div className="flat-list">
      {flats.map((flat, index) => {
        return (
          <Flat
            name={flat.name}
            key={flat.name}
            imageUrl={flat.imageUrl}
            price={flat.price}
            priceCurrency={flat.priceCurrency}
            selected={flat.name === selectedFlat.name}
            selectFlat={selectFlat}
            index={index}
          />
        );
      })}
    </div>
  );
};

export default FlatList;
