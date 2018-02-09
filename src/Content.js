import React, { Component } from 'react';
import Apixu from './components/containers/Apixu';
import Open from './components/containers/Open';
import Accu from './components/containers/Accu';
import WWO from './components/containers/WWO';
import WU from './components/containers/WU';

class Content extends Component {

  render() {
    return (
      <div className="page-weather">
        <Apixu selected={this.props.selected}/>
        <WWO selected={this.props.selected}/>        
        <Accu selected={this.props.selected}/>
        <Open selected={this.props.selected}/>
        <WU selected={this.props.selected}/>
      </div>
    )
  }
}

export default Content;
