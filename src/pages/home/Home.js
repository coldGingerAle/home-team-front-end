import React, { Component } from 'react';
import {withRouter} from "react-router-dom";
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
         this.props.history.push({pathname: '/map', state: {loc: latLng}});
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
      <div className="center-text">
        <h1 className="large-text"> Lighthouse </h1>
      </div>
      <div className="center-text">
        <h2 className="medium-text"> A guided path to recovery</h2>
      </div>

        <div className="container center">
          <form onSubmit={this.handleFormSubmit}>
            <div className="col-xs-10 col-xs-offset-2 col-md-10 col-md-offset-3">

              <div className="col s6 white">
                <PlacesAutocomplete inputProps={inputProps} /><
              /div>
              <div className="col-md-6 col-md-offset-3 col s2">
                <button type="submit" className="btn col-xs-10 col-xs-offset-1"><i className="fa fa-search" aria-hidden="true"></i> Locate Resources</button>
              </div>
            </div>
          </form>
        </div>

      </div>



    );
  }
}

export default withRouter(Home);
