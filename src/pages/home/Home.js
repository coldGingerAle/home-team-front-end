import React, { Component } from 'react';
import {withRouter} from "react-router-dom";
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className="container-fluid home">
      </div>
    );
  }
}

export default withRouter(Home);
