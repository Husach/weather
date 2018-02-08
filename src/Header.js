import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

class Header extends Component {

  render() {
    return (
      <div className="page-weather">
        <div className="header">
          <RaisedButton
            label="Refresh"
            primary={true}
            //onClick={this.load.bind(this)}
          />
        </div>
      </div>
    )
  }
}

export default Header;
