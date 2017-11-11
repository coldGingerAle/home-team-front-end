import React from 'react';
import './Sidebar.css';
export default class Sidebar extends React.Component {
  showSettings(event) {
    event.preventDefault();
  }
  handleClick = () => {
     let wrapper = document.getElementById('wrapper');
     wrapper.classList.toggle("toggled");
  };
  render() {
    return (
      <div id="wrapper">
        <div id="sidebar-wrapper">
          <ul class="sidebar-nav">
            <li class="sidebar-brand">
              <a >Filter</a>
            </li>
            <li>
              <a >Dashboard</a>
            </li>
            <li>
              <a >Shortcuts</a>
            </li>
            <li>
              <a >Overview</a>
            </li>
            <li>
              <a >Events</a>
            </li>
            <li>
              <a >About</a>
            </li>
            <li>
              <a >Services</a>
            </li>
            <li>
              <a >Contact</a>
            </li>
          </ul>
        </div>

        <div id="page-content-wrapper">
          <div class="container-fluid">
           
            <a
              onClick={this.handleClick}
              class="btn btn-secondary"
              id="menu-toggle"
            >
              Toggle Menu
            </a>
          </div>
        </div>
      </div>
    );
  }
}
