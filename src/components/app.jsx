import React, { Component } from 'react';

import FlatList from './flat_list';
import Flats from '../../data/flat';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      flatInfo: Flats
    };
  }

  render() {
    const { flatInfo } = this.state;

    return (
      <div>
        <FlatList flats={flatInfo} />
        <div className="map-container" />
      </div>
    );
  }
}

export default App;
