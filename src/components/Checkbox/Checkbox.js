import React, { Component } from 'react';
import './Checkbox.css';

class Checkbox extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    var isSelected = this.props.selected ? <i className="fa fa-check" aria-hidden="true"></i> : <i className="fa fa-circle-thin" aria-hidden="true"></i>;
    var button = this.props.selected ? <label style={{width: 45}} onClick={() => this.props.toggle()} for="fancy-checkbox-primary" className="[ btn btn-primary ]"> {isSelected} </label> : <label style={{width: 45}} onClick={() => this.props.toggle()} for="fancy-checkbox-default" className="[ btn btn-default ]"> {isSelected} </label>;
    return (
      <div className="checkbox-container">
        <div className="[ form-group ]">
          <input type="checkbox" name="fancy-checkbox-default" id="fancy-checkbox-default" autocomplete="off" />
          <div className="[ btn-group ]">
              {button}
              <label style={{width: 200}} for="fancy-checkbox-default" className="[ btn btn-default active ]">
                  {this.props.name}
              </label>
          </div>
      </div>
    </div>
    );
  }
}

export default Checkbox;
