import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import FlatList from './flat_list';
import Marker from './marker';
import flats from '../../data/flat';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedFlat: flats[0],
      flatInfo: flats
    };
  }

  selectFlat = (index) => {
    this.setState({
      selectedFlat: flats[index]
    });
  }

  center = () => {
    const { selectedFlat } = this.state;
    return {
      lat: selectedFlat.lat,
      lng: selectedFlat.lng
    };
  }

  render() {
    const { selectedFlat, flatInfo } = this.state;

    return (
      <div>
        <FlatList flats={flatInfo} selectFlat={this.selectFlat} selectedFlat={selectedFlat} />
        <div className="map-container">
          <GoogleMapReact defaultCenter={this.center()} defaultZoom={12}>
            {flatInfo.map(
              (flat) => {
                return (
                  <Marker
                    lat={flat.lat}
                    lng={flat.lng}
                    key={flat.name}
                    selected={flat === selectedFlat}
                  />
                );
              }
            )}
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default App;
