import React, { Component } from 'react';


class UserInfo extends Component {
  constructor(props){
    super(props);
    this.state= {
      user: undefined
    }
  }
  render() {
    return (
      <div >
      <h1>{this.state.user ? this.state.user.firstName : <div></div>}</h1>
      </div>
    );
  }
}

export default UserInfo;
