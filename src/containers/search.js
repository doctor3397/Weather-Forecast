import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class Search extends Component {
  constructor(props) {
    super(props);
    this.onButtonClick = this.onButtonClick.bind(this);
  }

  componentWillMount() {
    this.props.fetchWeather();
  }

  onButtonClick() {
    this.props.fetchWeather();
  }

  render() {
    return (
      <button onClick={this.onButtonClick} type="submit" className="btn btn-success sticky-top">Refresh</button>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(Search);
