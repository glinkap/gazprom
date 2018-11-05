import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import * as types from '../actions/types';
import { AddBtn, EditBtn, ApplyBtn } from '../components/button';

class TodoItem extends Component {
	constructor(props) {
		super(props)
		this.clickHandler = this.clickHandler.bind(this)
		this.getDataForApplyTask = this.getDataForApplyTask.bind(this)
		this.removeTaskHandler = this.removeTaskHandler.bind(this)
	}
    clickHandler () {
	    // const area = ReactDOM.findDOMNode(this.refs.area);
	    // if (area.contains(e.target)) {
	    // 	this.props.editTask(e.target, this, this.input);
	    // }
    	this.props.editTask({id: this.props.id});
  	}
  	removeTaskHandler () {
  		this.props.removeTask( { id: this.props.id } );
  	}
 	getDataForApplyTask () {
 		const newText = this.refs.editInput.value;
		this.props.applyTask( { id: this.props.id, newText: newText } );
 	}
  	componentDidUpdate() {
  		if ( this.props.editing && this.refs.editInput ) {
  			const editInput = this.refs.editInput
  			editInput.focus();
  		}
  	}
	render() {
		if ( this.props.editing && (this.props.editableId === this.props.id) ) { //Как сравнить с текущим ???
			return (
				<li  className="todo-item">
					{/*<span>{this.props.id}</span>*/}
					<input type="text" placeholder={this.props.text} ref="editInput" />
				 	<ApplyBtn onClick={ this.getDataForApplyTask } >Apply</ApplyBtn>
			 	</li>
			)
		} else {
			return ( 
				<li  className="todo-item" >
					{/*<span>{this.props.id}</span>*/}
					<p onClick={ this.clickHandler }>{ this.props.text }</p>
				 	<AddBtn onClick={ this.removeTaskHandler } >Remove</AddBtn>
			 	</li>
			)
		}
	}
}

const mapStateToProps = (state) => {
	return {
		editing: state.todoItem.editing,
		editableId: state.todoItem.editableId
	}
}
const mapDispatchToProps = (dispatch) => {
	return {	
		editTask: ( { id } )=>{
			dispatch({type:types.TODO_EDIT_START, payload: { editing: true, id } } )	
		},
		applyTask: ( { id, newText } ) => {
			dispatch( { type: types.TODO_APPLY_TASK, payload: { id, newText } } );
			dispatch( { type: types.TODO_EDIT_END } );
		},
		removeTask: ( { id } ) => dispatch( { type: types.TODO_REMOVE, payload: { id } } )
	}
}
export default connect ( mapStateToProps, mapDispatchToProps )( TodoItem );