import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import ActionSearch from 'material-ui/svg-icons/action/search';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      find: null
    }
  }

  record(event, find) {
    this.setState({
      find
    })
  }

  enter(event) {
    let key = event.keyCode;

    if (key === 13) {
      this.props.searchHandler(this.state.find)
    }
  }

  query() {
    this.props.searchHandler(this.state.find)
  }

  render() {
    return (
      <div className="header__search">
        <TextField
        className="header__input"
          hintText="Enter city"
          onChange={this.record.bind(this)}
          onKeyDown={this.enter.bind(this)}
        />

        <FlatButton
            className="header__btn-find"
            icon={<ActionSearch />}
            onClick={this.query.bind(this)}
        />
      </div>
    )
  }
}

export default Search;
