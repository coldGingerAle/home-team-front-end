import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Mapcontainer from './Components/Map';
import Example from './Components/Sidebar';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div >
        <Example   />
        <div id="page-wrap">
          <h1>Home</h1>
          <div
            className="btn btn-primary"
            onClick={() => this.props.history.push('/profile')}
          >
            Profile
          </div>
          <Mapcontainer />
        </div>
      </div>
    );
  }
}

export default withRouter(Home);
