import React, { Component } from 'react';

import Flat from './flat';

class FlatList extends Component {
  render() {
    return (
      <div className="flat-list">
        <Flat imageUrl="https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/images/flat1.jpg" />
      </div>
    );
  }
}

export default FlatList;
