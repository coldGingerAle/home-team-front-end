import React from 'react';
import { pushRotate  as Menu } from 'react-burger-menu'

export default class Example extends React.Component {
  showSettings (event) {
    event.preventDefault();
   
  }

  render () {
    return (
      <Menu pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" }>
        <a id="home" className="menu-item" >Home</a>
        <a id="about" className="menu-item" >About</a>
        <a id="contact" className="menu-item" >Contact</a>
        <a onClick={ this.showSettings } className="menu-item--small"> Settings</a>
      </Menu>
    );
  }
}
