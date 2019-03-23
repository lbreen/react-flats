import React from 'react';

const Marker = ({ selected }) => {
  return (
    <div className={selected ? 'marker selected' : 'marker'} />
  );
};

export default Marker;
