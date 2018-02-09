import React, { Component } from 'react';
import Header from './Header';
import Content from './Content';

class App extends Component {

  state = {
    selected: {
      lat: '49.1',
      lng: '33.42'
    }
  }

  onChangeSelected(selected) {
    this.setState({selected})
  }

  render() {
    return (
      <div className="page">
        <Header selected={this.state.selected} onChangeSelected={this.onChangeSelected.bind(this)}/>
        <Content selected={this.state.selected}/>
      </div>
    );
  }
}

export default App;
