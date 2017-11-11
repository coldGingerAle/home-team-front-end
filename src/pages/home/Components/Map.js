import React from 'react';
import {
  Map,
  InfoWindow,
  Marker,
  GoogleApiWrapper,
  google
} from 'google-maps-react';

export class MapContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      places: [
        { lat: 37.778519, lng: -122.40564 },
        { lat: 37.759703, lng: -122.428093 },
        { lat: 37.762391, lng: -122.439192 },
        {}
      ]
    };
  }
  render() {
    const style = {
      width: '75%',
      height: '75%'
    };

    return (
      <Map
        google={this.props.google}
        style={style}
        
        zoom={17}
        onClick={this.onMapClicked}
        visible={true}
        icon={{
          url: 'https://wallpaperbrowse.com/media/images/pictures-1.jpg'

        }}
      >
        {this.state.places.map((place, index) => {
          return (
            <Marker
              key={index}
              position={{ lat: place.lat, lng: place.lng }}
              icon={{
                url: 'https://wallpaperbrowse.com/media/images/pictures-1.jpg'
                // anchor: new google.maps.Point(32, 32),
                // scaledSize: new google.maps.Size(64, 64)
              }}
            />
          );
        })}
        <Marker onClick={this.onMarkerClick} name={'Current location'} />

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
