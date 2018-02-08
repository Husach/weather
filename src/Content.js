import React, { Component } from 'react';
import Apixu from './components/containers/Apixu';
import Open from './components/containers/Open';
import Accu from './components/containers/Accu';
import WU from './components/containers/WU';

class Content extends Component {

  render() {
    return (
      <div className="page-weather">
        <Apixu />
        <Open />
        <Accu />
        <WU />


      </div>
    )
  }
}

export default Content;
