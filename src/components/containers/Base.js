import React, { Component } from 'react';
import Block from './../Block';

class Base extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    }
  }

  componentDidMount() {
    this.load(this.props);
  }

  componentWillReceiveProps(props) {
    this.load(props);
  }

  render() {
    return (
      <div>
        <Block data={this.state.data} info={this.state.info}/>
      </div>
    )
  }
}

export default Base;
