import React, { Component } from 'react';
import Select from './components/Select';
import RaisedButton from 'material-ui/RaisedButton';
const database = require('./data/base-min.json');

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: {
        lat: '49.1,',
        lng: '33.42041',
        name: 'Kremenchug',
        country: 'Ukraine',
        flag: false
      }
    }
  }

  handleChange(event, index, value) {
    let selected = database.find(city => city.name === value);
    this.props.onChangeSelected(selected);
    this.setState({
      input: selected
    })
  }

  refresh() {
    console.log('refresh')
    this.setState({
      flag: !this.state.flag
    })
  }

  render() {
    const {input: {name, country}} = this.state
    return (
      <div className="page-header">
        <Select
          options={database}
          selected={this.props.selected}
          handleChange={this.handleChange.bind(this)}
        />

        <div className="header__info">
          <div className="block__city">{name}</div>
          <div className="block__country">{country}</div>
        </div>

        <RaisedButton
          className="header__btn-refresh"
          label="Refresh"
          primary={true}
          onClick={this.refresh.bind(this)}
        />
      </div>
    )
  }
}

export default Header;
