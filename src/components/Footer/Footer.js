import React, { Component } from 'react';
import './Footer.css';


class Footer extends Component {
  render() {
    return (
      <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <div className = "row ">
            <div className="col-md-8 center-text-align">
              @ Copyright 2017 NYC Lighthouse
            <br />  Author: Yvan Pangilinan, Kevin Cybura, Chris Menedes, Truth Opaleye, Hui Lin
            <br /> NYC Lighthouse is a non-profit organization that provide ways to help the homeless in locating services in their area that can assist in getting them back on their feet.
            </div>
            <div className="col-md-4">
            <ul className="nav">
              <img className="img-responsive img-wrap-footer" src="https://image.flaticon.com/icons/svg/25/25231.svg" alt="github"></img>
              <img className="img-responsive img-wrap-footer " src="https://marketing-challengepost.netdna-ssl.com/assets/reimagine2/devpost-icon-c8f52fc37bef931ff121230872382167.svg" alt="devpost"></img>
              <img className="img-responsive img-wrap-footer" src="http://www.adweek.com/agencyspy/wp-content/uploads/sites/7/2015/07/chase-logo.png" alt="chase"></img>
              <img className="img-responsive img-wrap-footer" src="http://www.dbtekpro.com/wp-content/uploads/2015/07/bluemix-logo.png" alt="ibm"></img>
            </ul>
            </div>
          </div>
      </div>

    );
  }
}

export default Footer;
