import React, { Component } from 'react';
import Menu from './components/Menu';
import SelectField from 'material-ui/SelectField';
import RaisedButton from 'material-ui/RaisedButton';

class Header extends Component {

  handleChange(event, index, value) {

  }

  render() {
    return (
      <div className="page-weather">
        <div className="header">
          <RaisedButton
            className="btn-refresh"
            label="Refresh"
            primary={true}
            //onClick={this.load.bind(this)}
          />

          <SelectField
            className="select"
            floatingLabelText="choose city"
            onChange={this.handleChange}
          >
              <Menu />
          </SelectField>

        </div>
      </div>
    )
  }
}

export default Header;
