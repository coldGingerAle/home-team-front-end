import React from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

export class MapContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentLocation: {
        lat: 40.7127753,
        lng: -74.0059728
      },
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
    };
  }

  MapMarkers = (place)=>{
    let info = "";
    for(let key in place){
      info += (key + " " + place[key]);
    }

    return info;
  }

componentDidMount() {
    var self = this;
    this.setState({
      currentLocation: {
        lat: self.props.location.lat,
        lng: self.props.location.lng,
      }
    })
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
          lat: this.state.currentLocation.lat,
          lng: this.state.currentLocation.lng
        }}
        zoom={17}
        visible={true}
        icon={{
          url: 'https://wallpaperbrowse.com/media/images/pictures-1.jpg'
        }}
      >
      <Marker
        onClick={this.onMarkerClick}
        position={{ lat: this.state.currentLocation.lat, lng: this.state.currentLocation.lng }}
        icon={{
          url:
            'http://fairweathers.co.uk/wp-content/uploads/2013/08/pegman.png',
          anchor: new this.props.google.maps.Point(32, 32),
          scaledSize: new this.props.google.maps.Size(32, 42)
        }}
        name="Here"
      />
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
                name="Wifi"
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
                name="DropInCenter"
              />
            );
          })}

        {this.props.homeBasesSelected &&
          this.props.homeBases.map((place, index) => {
            return (
              <Marker
                key={index}
                onClick={this.onMarkerClick}
                position={{ lat: place.lat, lng: place.lng }}
                icon={{
                  url:
                    'http://icons.iconarchive.com/icons/graphicloads/colorful-long-shadow/256/Home-icon.png',
                  anchor: new this.props.google.maps.Point(32, 32),
                  scaledSize: new this.props.google.maps.Size(32, 32)
                }}
                name={<p>{this.MapMarkers(place)}</p>}
              />
            );
          })}

          {this.props.hospitalCentersSelected &&
            this.props.hospitalCenters.map((place, index) => {
              return (
                <Marker
                  key={index}
                  onClick={this.onMarkerClick}
                  position={{ lat: place.lat, lng: place.lng }}
                  icon={{
                    url:
                      'https://cdn0.iconfinder.com/data/icons/healthcare-medicine/512/hospital_location-512.png',
                    anchor: new this.props.google.maps.Point(32, 32),
                    scaledSize: new this.props.google.maps.Size(32, 32)
                  }}
                  name={<p>{place.nta}</p>}
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
