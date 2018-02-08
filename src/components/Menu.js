import React, { Component } from 'react';
import MenuItem from 'material-ui/MenuItem';

const database = require('./../data/base-min.json');

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      database
    }
  }

  selectCity() {
    return (this.state.database.map((index) => {
      return <MenuItem
                key = {index.name}
                primaryText = {index.name}
                value = {index}
             />
    })
  )}

  render() {
    return (
      <div>
        {this.selectCity.call(this)}
      </div>
    )
  }
}

export default Menu;
