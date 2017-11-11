import React, { Component } from 'react';
import './Checkbox.css';

class Checkbox extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="checkbox-container">
        <div className="[ form-group ]">
          <input type="checkbox" name="fancy-checkbox-default" id="fancy-checkbox-default" autocomplete="off" />
          <div className="[ btn-group ]">
              <label for="fancy-checkbox-default" className="[ btn btn-info ]">
                  <span className="[ glyphicon glyphicon-ok ]"></span>
                  <span> </span>
              </label>
              <label for="fancy-checkbox-default" className="[ btn btn-default active ]">
                  {this.props.name}
              </label>
          </div>
      </div>
    </div>
    );
  }
}

export default Checkbox;
