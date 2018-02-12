import React, { Component } from 'react';
import Search from './components/Search';
import Select from './components/Select';
const database = require('./data/base-min.json');

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: {
        lat: '49.1,',
        lng: '33.42041',
        name: 'Kremenchug',
        country: 'Ukraine'
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

  searchHandler(search) {
    let city = database.find(itm => itm.name.toLowerCase().match(search.toLowerCase()));

    if (city) {
      this.props.onChangeSelected(city);
      this.setState({
        input: city
      })
    } else {
      alert('Сheck the name of the entered city');
    }
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

        <Search searchHandler={this.searchHandler.bind(this)}/>
      </div>
    )
  }
}

export default Header;
