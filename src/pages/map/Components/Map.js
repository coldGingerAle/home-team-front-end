import React from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

export class MapContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      places : [{lat: 37.778519, lng: -122.405640},{lat: 37.759703, lng: -122.428093},{lat: 37.762391, lng: -122.439192}],
      wifihotspots: []
    }
  }

  componentDidMount() {
    var self = this;
    fetch('https://data.cityofnewyork.us/resource/24t3-xqyv.json')
      .then(res => res.json())
      .then(hotspots => {
        let hotspotsArray = hotspots.map(hotspot => {
          let hotspot_lat_long = {
            lat: hotspot.location_lat_long.coordinates[1],
            lng: hotspot.location_lat_long.coordinates[0]
          }
          return hotspot_lat_long;
        })
        self.setState({
          wifihotspots: hotspotsArray
        })
      })
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
        initialCenter={{
          lat: 40.745968,
          lng: -73.994039
        }}
        zoom={17}
        onClick={this.onMapClicked}

        visible={true}
      >
        {this.state.wifihotspots.map((place,index) => {
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
