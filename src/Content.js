import React, { Component } from 'react';
import Apixu from './components/containers/Apixu';
import Accu from './components/containers/Accu';
import Open from './components/containers/Open';
import WWO from './components/containers/WWO';

class Content extends Component {

  render() {
    return (
      <div className="page-weather">
        <Apixu selected={this.props.selected}/>
        <WWO selected={this.props.selected}/>
        <Accu selected={this.props.selected}/>
        <Open selected={this.props.selected}/>
      </div>
    )
  }
}

export default Content;
