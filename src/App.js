import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import * as graphActions from '../actions/graphActions';
// import {render} from 'react-dom'
import Todo from './containers/todo'
import './App.scss';

class App extends Component {
  
  render() {
    return (
      <div className="container">
        <Todo />
      </div>  
    );
  }
}

export default connect ( mapStateToProps => ({}), mapDispatchToProps =>({}) )( App );
