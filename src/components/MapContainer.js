import React from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

export class MapContainer extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    if (!this.props.loaded) {
      return <div>Loading...</div>
    }
    return (
      <Map
        google={this.props.google}
        style={{width: '100%', height: '500px', position: 'relative'}}
        className={'map'}
        initialCenter={{
          lat: 40.745968,
          lng: -73.994039
        }}
        zoom={17}
        onClick={this.onMapClicked}
        visible={true}
      >
        {this.props.wifihotspots.map((place,index) => {
          return <Marker key={index}
          position={{lat:place.lat, lng: place.lng}} />
        })}
        <InfoWindow onClose={this.onInfoWindowClose}>
          <div>
            <h1 />
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDGdbuW2ozGJC6vQ2uoc3K2E8bRXYG4KlU'
})(MapContainer);
