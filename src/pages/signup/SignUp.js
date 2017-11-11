import React, { Component } from 'react';
import {withRouter} from "react-router-dom";
import './SignUp.css';

class SignUp extends Component {
  render() {
    return (
      <div id="page-wrap">
        <h1>Profile</h1>
      </div>
    );
  }
}

export default withRouter(SignUp);
