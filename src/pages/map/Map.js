import React, { Component } from 'react';
import {withRouter} from "react-router-dom";
import MapContainer from '../../components/MapContainer';
import Checkbox from '../../components/Checkbox/Checkbox';
import Utility from './Utility';
import './Map.css';

class Map extends Component {

  constructor(props){
    super(props);
    this.toggleWifihotspotsSelected = this.toggleWifihotspotsSelected.bind(this);
    this.toggleDropInCentersSelected = this.toggleDropInCentersSelected.bind(this);
    this.toggleHomeBasesSelected = this.toggleHomeBasesSelected.bind(this);
    this.toggleHospitalCentersSelected = this.toggleHospitalCentersSelected.bind(this);
    this.state = {
      places : [{lat: 37.778519, lng: -122.405640},{lat: 37.759703, lng: -122.428093},{lat: 37.762391, lng: -122.439192}],
      wifihotspotsSelected: true,
      dropInCentersSelected: false,
      homeBasesSelected: false,
      hospitalCentersSelected: false,
      wifihotspots: [],
      dropInCenters: [],
      homeBases: [],
      hospitalCenters: []
    }
  }

  toggleWifihotspotsSelected() {
    var self = this;
    this.setState({
      wifihotspotsSelected: !self.state.wifihotspotsSelected
    })
  }

  toggleDropInCentersSelected() {
    var self = this;
    this.setState({
      dropInCentersSelected: !self.state.dropInCentersSelected
    })
  }

  toggleHomeBasesSelected() {
    var self = this;
    this.setState({
      homeBasesSelected: !self.state.homeBasesSelected
    })
  }

  toggleHospitalCentersSelected() {
    var self = this;
    this.setState({
      hospitalCentersSelected: !self.state.hospitalCentersSelected
    })
  }

  componentDidMount() {
    var receivedMessage = this.props.location.state.loc;
    console.log(receivedMessage);
    var self = this;
    Utility.getWifiHotSpots(self);
    Utility.getHomelessDropInCenters(self);
    Utility.getHomeBaseLocations(self);
    Utility.getHospitalCenters(self);
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="col-md-2 col-md-offset-1 card-3" style={{height: 500}}>
          <Checkbox toggle={this.toggleWifihotspotsSelected} selected={this.state.wifihotspotsSelected} name={"Wifi Hotspots"}/>
          <Checkbox toggle={this.toggleDropInCentersSelected} selected={this.state.dropInCentersSelected} name={"Drop In Centers"}/>
          <Checkbox toggle={this.toggleHomeBasesSelected} selected={this.state.homeBasesSelected} name={"Home Base Locations"}/>
          <Checkbox toggle={this.toggleHospitalCentersSelected} selected={this.state.hospitalCentersSelected} name={"Hospital Locations"}/>
        </div>
        <div className="col-md-8" style={{height: 500}}>
          <MapContainer
            wifihotspotsSelected = {this.state.wifihotspotsSelected}
            dropInCentersSelected = {this.state.dropInCentersSelected}
            homeBasesSelected = {this.state.homeBasesSelected}
            hospitalCentersSelected = {this.state.hospitalCentersSelected}
            wifihotspots = {this.state.wifihotspots}
            dropInCenters = {this.state.dropInCenters}
            homeBases = {this.state.homeBases}
            hospitalCenters = {this.state.hospitalCenters}
            location = {this.props.location.state.loc}
           />
        </div>
      </div>
    );
  }
}

export default withRouter(Map);
