import React, { Component } from 'react';
import {withRouter} from "react-router-dom";
import MapContainer from '../../components/MapContainer';
import Checkbox from '../../components/Checkbox/Checkbox';
import Utility from './Utility';
import './Map.css';

class Map extends Component {

  constructor(props){
    super(props);
    this.state = {
      places : [{lat: 37.778519, lng: -122.405640},{lat: 37.759703, lng: -122.428093},{lat: 37.762391, lng: -122.439192}],
      wifihotspots: [],
    }
  }

  componentDidMount() {
    var self = this;
    Utility.getWifiHotSpots(self);
  }

  render() {
    Utility.Add(123);
    Utility.Subtract(123);
    return (
      <div className="container-fluid">
        <div className="col-md-2 col-md-offset-1 card-3" style={{height: 500}}>
          <Checkbox name={"Wifi Hotspots"}/>
        </div>
        <div className="col-md-8" style={{height: 500}}>
          <MapContainer
            wifihotspots = {this.state.wifihotspots}
           />
        </div>
      </div>
    );
  }
}

export default withRouter(Map);
