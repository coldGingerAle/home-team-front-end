import React, { Component } from 'react';
import {withRouter} from "react-router-dom";
import './Profile.css';

class Profile extends Component {
  render() {
    return (
      <div>
        <h1>Profile</h1>
        <div className="btn btn-primary" onClick={() => this.props.history.push('/')}>
          Home
        </div>
      </div>
    );
  }
}

export default withRouter(Profile);
