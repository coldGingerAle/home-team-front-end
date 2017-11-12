import React from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import ContainerUtil from './Utility';
import './MapContainer.css';
export class MapContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentLocationGeolocation: {
        lat: 0,
        lng: 0
      },
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
        style={{ width: '100%', height: '350px', position: 'relative' }}
        className={'map'}
        initialCenter={{
          lat: this.state.currentLocation.lat,
          lng: this.state.currentLocation.lng
        }}
        zoom={13}
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
                position={{ lat: place.lat, lng: place.lng }}
                icon={{
                  url:
                    'https://housing.umn.edu/sites/housing.umn.edu/files/prep_your_computer.png',
                  anchor: new this.props.google.maps.Point(32, 32),
                  scaledSize: new this.props.google.maps.Size(32, 32)
                }}
                name={"Wifi Spot"}
              />
            );
          })}
        {this.props.dropInCentersSelected &&
          this.props.dropInCenters.map((place, index) => {
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
                name={<p>{ContainerUtil.MapMarkers(place)}</p>}
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
                    'http://icons.iconarchive.com/icons/graphicloads/100-flat/256/home-icon.png',
                  anchor: new this.props.google.maps.Point(32, 32),
                  scaledSize: new this.props.google.maps.Size(32, 32)
                }}
                name={<p>{ContainerUtil.MapMarkers(place)}</p>}
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
                  name={<p>{ContainerUtil.MapMarkers(place)}</p>}
                />
              );
            })}
          {this.props.MHC_Selected &&
              this.props.MHC.map((place, index) => {
                return (
                  <Marker
                    key={index}
                    onClick={this.onMarkerClick}
                    position={{ lat: place.lat, lng: place.lng }}
                    icon={{
                      url:
                        'https://png.icons8.com/?id=40521&size=280',
                      anchor: new this.props.google.maps.Point(32, 32),
                      scaledSize: new this.props.google.maps.Size(32, 32)
                    }}
                    name={<p>{ContainerUtil.MapMarkers(place)}</p>}
                  />
                );
            })}
            {this.props.JobsSelected &&
              this.props.Jobs.map((place, index) => {
                return (
                  <Marker
                    key={index}
                    onClick={this.onMarkerClick}
                    position={{ lat: place.lat, lng: place.lng }}
                    icon={{
                      url:
                        'https://cdn2.iconfinder.com/data/icons/mixed-rounded-flat-icon/512/briefcase-512.png',
                      anchor: new this.props.google.maps.Point(32, 32),
                      scaledSize: new this.props.google.maps.Size(32, 32)
                    }}
                    name={<p>{ContainerUtil.MapMarkers(place)}</p>}
                  />
                );
            })}
            {this.props.SubsSelected &&
              this.props.Subs.map((place, index) => {
                return (
                  <Marker
                    key={index}
                    onClick={this.onMarkerClick}
                    position={{ lat: place.lat, lng: place.lng }}
                    icon={{
                      url:
                        'https://cdn.iconscout.com/public/images/icon/free/png-512/metro-subway-underground-train-railway-engine-emoj-symbol-368e7101b9ce45ca-512x512.png',
                      anchor: new this.props.google.maps.Point(32, 32),
                      scaledSize: new this.props.google.maps.Size(32, 32)
                    }}
                    name={<p>{ContainerUtil.MapMarkers(place)}</p>}
                  />
                );
            })}
            {this.props.FSSelected &&
              this.props.FS.map((place, index) => {
                return (
                  <Marker
                    key={index}
                    onClick={this.onMarkerClick}
                    position={{ lat: place.lat, lng: place.lng }}
                    icon={{
                      url:
                        'https://www.hungerfreecolorado.org/wp-content/uploads/2014/11/Food-Stamps-Fuel.jpg',
                      anchor: new this.props.google.maps.Point(32, 32),
                      scaledSize: new this.props.google.maps.Size(32, 32)
                    }}
                    name={<p>{ContainerUtil.MapMarkers(place)}</p>}
                  />
                );
            })}
        <InfoWindow

          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
        >
          <div className="info-window">
            <h6>{this.state.selectedPlace.name}</h6>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDGdbuW2ozGJC6vQ2uoc3K2E8bRXYG4KlU'
})(MapContainer);
