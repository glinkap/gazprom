import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import * as types from '../actions/types';
import { EditBtn, ApplyBtn, AddBtn } from '../components/button';

class TodoItem extends Component {
	constructor(props) {
		super(props)
		this.handleDocumentClick = this.handleDocumentClick.bind(this)
	}
    handleDocumentClick (e) {
	    const area = ReactDOM.findDOMNode(this.refs.area);
	    if (area.contains(e.target)) {
	    	this.props.editTask(e.target);
	    }
  	}
	render() {
		if ( this.props.editing && this.refs.area.contains(this.props.target) ) { //Как сравнить с текущим ???
			return (<li>123</li>)
		} else {
			return ( 
				<li  className="todo-item" ref='area' >
					<span>{this.props.id}</span>
					<p onClick={this.handleDocumentClick }>{ this.props.text }</p>
					<input type="checkbox" onChange={()=>true} checked={ this.props.ready ? 'checked' : '' } />
				 	<EditBtn onClick={this.handleDocumentClick } >Edit</EditBtn>
			 	</li>
			)
		}
	}
}

const mapStateToProps = (state) => {
	return {
		editing: state.todoItem.editing
	}
}
const mapDispatchToProps = (dispatch) => {
	return {	
		editTask: (target)=>{
			console.log("target", target);
			dispatch({type:types.TODO_EDIT_START, payload: { editing:true, target: target } } )	
		}
	}
}
export default connect ( mapStateToProps, mapDispatchToProps )( TodoItem );