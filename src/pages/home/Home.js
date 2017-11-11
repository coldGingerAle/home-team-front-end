import React, { Component } from 'react';
import {withRouter} from "react-router-dom";
import axios from "axios";
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'
import './Home.css';

class Home extends Component {
  constructor(props) {
   super(props)
   this.state = { address: 'Brooklyn, NY' }
   this.onChange = (address) => this.setState({ address })
 }

 handleFormSubmit = (event) => {

     event.preventDefault()

     geocodeByAddress(this.state.address)
       .then(results => getLatLng(results[0]))
       .then(latLng => {
         console.log('Success', latLng)
         this.props.history.push({pathname: '/map', state: {message: latLng}});
       })
       .catch(error => console.error('Error', error))

   }


  render() {
    const inputProps = {
      value: this.state.address,
      onChange: this.onChange,
    }
    return (
      <div className="container-fluid home">

        <div className="container center">
        <form onSubmit={this.handleFormSubmit}>
        <div className="row">
        <div className="col s6 white">
        <PlacesAutocomplete inputProps={inputProps} /></div>

        <button type="submit" className="btn col s3">Submit</button>
    </div>
      </form>
</div>
      </div>
    );
  }
}

export default withRouter(Home);
