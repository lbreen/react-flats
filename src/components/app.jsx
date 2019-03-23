import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

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
        <div className="map-container">
          <GoogleMapReact defaultCenter={{lat: 48.884211, lng: 2.34689}} defaultZoom={12}>
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default App;
