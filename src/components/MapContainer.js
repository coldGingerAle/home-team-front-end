import React from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

export class MapContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      currentLocation: {
        lat: 0,
        lat: 0
      }
    }
  }

  componentDidMount() {
    if (navigator && navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((pos) => {
            const coords = pos.coords;
            this.setState({
                currentLocation: {
                    lat: coords.latitude,
                    lng: coords.longitude
                }
            })
        })
    }
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
          lat: this.state.currentLocation.lat,
          lng: this.state.currentLocation.lng
        }}
        zoom={17}
        onClick={this.onMapClicked}
        visible={true}
      >
        {this.props.wifihotspotsSelected && this.props.wifihotspots.map((place,index) => {
          return <Marker key={index}
          position={{lat:place.lat, lng: place.lng}} />
        })}

        {this.props.dropInCentersSelected && this.props.dropInCenters.map((place,index) => {
          return <Marker key={index}
          position={{lat:place.lat, lng: place.lng}} />
        })}

        {this.props.homeBasesSelected && this.props.homeBases.map((place,index) => {
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
