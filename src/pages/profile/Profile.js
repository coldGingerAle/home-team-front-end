import React, { Component } from 'react';
import {withRouter} from "react-router-dom";
import Sidebar from '../../components/Sidebar/Sidebar';
import UserInfo from './ProfileComponents/UserInfo';
import './Profile.css';

class Profile extends Component {
  render() {
    return (
      <div id="page-wrap">
      <Sidebar/>
        <h1>Profile</h1>
        <div className="btn btn-primary" onClick={() => this.props.history.push('/')}>
          Home
        </div>
        <UserInfo/>
      </div>
    );
  }
}

export default withRouter(Profile);
