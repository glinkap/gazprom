import React, { Component } from 'react';
import {connect} from 'react-redux';
import './todo.scss';
import { getSessionData, setSessionData, getRev, sessionStorage } from '../actions/actions';
import TodoItem from './todoItem';
import { AddBtn } from '../components/button';
import * as types from '../actions/types';
const rev = 0;
class Todo extends Component {

	componentWillMount() {
		this.props.sessionStorage({ rev, dispatch: this.props.dispatch });
	}
	render() {
		const children = this.props.todoList.map((item)=>(
			<TodoItem key={item.id} text={item.text} id={item.id} className="todo-item" />			
			)
		)
		return (
			<div className="todo-block">
				<ul className="todo-list">
					{children}
				</ul>
				<AddBtn onClick={ this.props.addNewTask } >Add</AddBtn>
			</div>
			);
	}
}

const mapStateToProps = (state) => {
	return {
		todoList: state.todo.data
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		addTask: () => {},		
		removeTask: () => {},
		readyTask: () => {},
		getDataStorage: getSessionData,
		setDataStorage: setSessionData,
		getRev: getRev,
		sessionStorage:sessionStorage,
		dispatch,
		addNewTask: () => {
			dispatch( { type: types.TODO_ADD } )
		}
	}
}
export default connect ( mapStateToProps, mapDispatchToProps )( Todo );