import React, { Component } from 'react';

class Block extends Component {

  wind() {
    let value = this.props.data.wind_kph;
    let units = 'km/h';

    if (this.props.data.wind_mps) {
      value = this.props.data.wind_mps;
      units = 'm/s';
    }
    return <div className="block__text">Wind: {value} {units}</div>
  }

  render() {
    return (
      <div className="block">
        <div className="block__service">{this.props.info.site}</div>
        <div className="block__city">{this.props.data.name}</div>
        <div className="block__country">{this.props.data.country}</div>

        <div className="block__info">
          <div className="block__text">Temp: {this.props.data.temp} C</div>
          <div className="block__text">Humidity: {this.props.data.humidity} %</div>
          {this.wind()}
          <div className="block__text">Direction: {this.props.data.wind_degree} deg</div>
          <div className="block__text">Description: {this.props.data.description}</div>
          <div className="block__text">Last update: {this.props.data.last_updated}</div>
        </div>
      </div>
    )
  }
}

export default Block;
