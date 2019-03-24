import React from 'react';

import Flat from './flat';

const FlatList = ({ flats, selectedFlat, selectFlat }) => {
  return (
    <div className="flat-list">
      {flats.map((flat, index) => {
        return (
          <Flat
            flat={flat}
            key={flat.name}
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
