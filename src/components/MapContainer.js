import React from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

export class MapContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {}
    };
  }
  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  };
  onMapClicked = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };
  render() {
    if (!this.props.loaded) {
      return <div>Loading...</div>;
    }

    return (
      <Map
        google={this.props.google}
        onClick={this.onMapClicked}
        style={{ width: '100%', height: '500px', position: 'relative' }}
        className={'map'}
        initialCenter={{
          lat: 40.745968,
          lng: -73.994039
        }}
        zoom={17}
        onClick={this.onMapClicked}
        visible={true}
        icon={{
          url: 'https://wallpaperbrowse.com/media/images/pictures-1.jpg'
        }}
      >
        {this.props.wifihotspotsSelected &&
          this.props.wifihotspots.map((place, index) => {
            return (
              <Marker
              onClick={this.onMarkerClick}
                key={index}
                position={{ lat: place.loc.lat, lng: place.loc.lng }}
                icon={{
                  url:
                    'https://housing.umn.edu/sites/housing.umn.edu/files/prep_your_computer.png',
                  anchor: new this.props.google.maps.Point(32, 32),
                  scaledSize: new this.props.google.maps.Size(32, 32)
                }}
              />
            );
          })}

        {this.props.dropInCentersSelected &&
          this.props.dropInCenters.map((place, index) => {
            return (
              <Marker
                key={index}
                onClick={this.onMarkerClick}
                position={{ lat: place.loc.lat, lng: place.loc.lng }}
                icon={{
                  url:
                    'http://icons.iconarchive.com/icons/graphicloads/colorful-long-shadow/256/Home-icon.png',
                  anchor: new this.props.google.maps.Point(32, 32),
                  scaledSize: new this.props.google.maps.Size(32, 32)
                }}
              />
            );
          })}
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
        >
          <div>
            <h1>{this.state.selectedPlace.name}</h1>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDGdbuW2ozGJC6vQ2uoc3K2E8bRXYG4KlU'
})(MapContainer);
