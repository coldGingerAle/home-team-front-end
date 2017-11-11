import React, { Component } from 'react';
import {withRouter} from "react-router-dom";
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Home</h1>
        <div className="btn btn-primary" onClick={() => this.props.history.push('/profile')}>
          Profile
        </div>
      </div>
    );
  }
}

export default withRouter(Home);
