import React from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

const Listing = (props) => {
 return ( <div>
    
  </div>)
}
export class MapContainer extends React.Component {
  fetchPlaces = (mapProps, map) => {
    const {google} = mapProps;
    const service = new google.maps.places.PlacesService(map);
    console.log(mapProps);
  }
  render() {
    const style = {
      width: '100%',
      height: '100%'
    }
    
    return (
      <Map
        google={this.props.google}
        style={style}
        initialCenter={{
          lat: 40.730610,
          lng: -73.935242,
        }}
        zoom={17}
        onClick={this.onMapClicked}
      onReady={this.fetchPlaces}
      visible={true}>
        <Listing  />
    
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
