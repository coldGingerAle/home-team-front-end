import React, { Component } from 'react';
import {withRouter} from "react-router-dom";
import MapContainer from '../../components/MapContainer';
import Checkbox from '../../components/Checkbox/Checkbox';
import Utility from './Utility';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'
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
      MHC_Selected: false,
      JobsSelected: false,
      wifihotspots: [],
      dropInCenters: [],
      homeBases: [],
      hospitalCenters: [],
      address: { address: 'Brooklyn, NY' },
      updatedLocation: {},
      currentLocation: {
        lat: 0,
        lng: 0
      }
    }
    this.onChange = this.onChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  onChange = (address) => this.setState({ address })

  handleFormSubmit = (event) => {

      event.preventDefault()

      geocodeByAddress(this.state.address)
        .then(results => getLatLng(results[0]))
        .then(latLng => {
          console.log('Success', latLng)
          this.props.history.push({pathname: '/map', state: {loc: latLng}});
        })
        .catch(error => console.error('Error', error))

    }

  toggleWifihotspotsSelected() {
    var self = this;
    this.setState({
      wifihotspotsSelected: !self.state.wifihotspotsSelected
    });
  }

  toggleDropInCentersSelected = () => {
    var self = this;
    this.setState({
      dropInCentersSelected: !self.state.dropInCentersSelected
    });
  }

  toggleHomeBasesSelected =() => {
    var self = this;
    this.setState({
      homeBasesSelected: !self.state.homeBasesSelected
    });
  }

  toggleHospitalCentersSelected =() => {
    var self = this;
    this.setState({
      hospitalCentersSelected: !self.state.hospitalCentersSelected
    });
  }
  toggleMHC_Selected = () =>{
    var self = this;
    this.setState({
      MHC_Selected: !self.state.MHC_Selected
    });

  }
  toggleJobsSelected = () =>{
    var self = this;
    this.setState({
      JobsSelected: !self.state.JobsSelected
    });
  }
  componentDidMount() {
    var self = this;
    Utility.getWifiHotSpots(self);
    Utility.getHomelessDropInCenters(self);
    Utility.getHomeBaseLocations(self);
    Utility.getHospitalCenters(self);
    Utility.getMentalHealthLocations(self);
    Utility.getJobLocations(self);
  }

  render() {
    const inputProps = {
      value: this.state.address,
      onChange: this.onChange,
    }
    return (
      <div className="container-fluid">


        <div className="col-md-10 col-md-offset-1" style={{ height: 500, marginBottom: 10 }}>
          <MapContainer
            wifihotspotsSelected = {this.state.wifihotspotsSelected}
            dropInCentersSelected = {this.state.dropInCentersSelected}
            homeBasesSelected = {this.state.homeBasesSelected}
            hospitalCentersSelected = {this.state.hospitalCentersSelected}
            wifihotspots = {this.state.wifihotspots}
            dropInCenters = {this.state.dropInCenters}
            homeBases = {this.state.homeBases}
            hospitalCenters = {this.state.hospitalCenters}
            location = {this.props.location.state ? this.props.location.state.loc : {"lat": 40.6781784, "lng": -73.9441579}}
            updatedLocation = {this.state.updatedLocation}
           />
        </div>

        <div
          className="col-md-5 col-md-offset-1 card-3"
          style={{ height: 200}}
        >

          <div className="col-md-6">
          <Checkbox
            toggle={this.toggleWifihotspotsSelected}
            selected={this.state.wifihotspotsSelected}
            name={'Wifi Hotspots'}
          />
          <Checkbox
            toggle={this.toggleDropInCentersSelected}
            selected={this.state.dropInCentersSelected}
            name={'Drop In Centers'}
          />
          <Checkbox
            toggle={this.toggleHomeBasesSelected}
            selected={this.state.homeBasesSelected}
            name={'Home Base Locations'}
          />
          </div>
          <div className="col-md-6">
          <Checkbox
            toggle={this.toggleHospitalCentersSelected}
            selected={this.state.hospitalCentersSelected}
            name={'Hospital Locations'}
          />
          <Checkbox
            toggle={this.toggleMHC_Selected}
            selected={this.state.MHC_Selected}
            name={'Mental Health Clinics'}
          />
          <Checkbox
          toggle={this.toggleJobsSelected}
          selected={this.state.JobsSelected}
          name={'Job Fairs/Center'}
        />
        </div>


        </div>




        <div className="col-md-5">
          <div className="col-md-10 col-md-offset-1 card-3">
            <form onSubmit={this.handleFormSubmit}>
            <div className="row">
            <div className="col s6 white">
            <PlacesAutocomplete inputProps={inputProps} /></div>

            <div className="col s2"><button type="submit" className="btn">Submit</button>
            </div></div>
          </form>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Map);
