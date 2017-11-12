import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';
import logo from './lighthouse_logo.png';

class Navbar extends Component {
  render() {
    return (
      <div>
      <nav className="navbar navbar-default">
        <div className="container-fluid">

          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <div className="img-wrap">
          <Link to="/"><img className="img-responsive "src={logo} alt="logo" /> </Link>
            </div>
          </div>


          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">

            <ul className="nav navbar-nav">
              <li><Link to="/"><div className="font-big" >Home</div><span className="sr-only">(current)</span></Link></li>
              <li><Link to="/map"><div className="font-big" >Map</div></Link></li>
            </ul>

          </div>
        </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
