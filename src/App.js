import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import * as graphActions from '../actions/graphActions';
// import {render} from 'react-dom'
import './App.css';

class App extends Component {
  
  render() {
    return (
      <div className="container">
      123
      </div>  
    )
  }
}

export default connect( mapStateToProps => ({}), mapDispatchToProps =>({}) )( App );
