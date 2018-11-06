import React, { Component } from 'react';
import {connect} from 'react-redux';
import './todo.scss';
import { getSessionData/*, setSessionData, getRev*/, sessionStoragem } from '../actions/actions';
import TodoItem from './todoItem';
import { AddBtn } from '../components/button';
import * as types from '../actions/types';
const rev = 0;
class Todo extends Component {
	constructor(props) {
		super(props);

	}
	componentWillMount() {
		// console.log("componentWillMount");
		// this.props.sessionStoragem({ rev, dispatch: this.props.dispatch });		
	}
	componentDidMount() {
		// console.log("componentDidMount");
		this.props.sessionStoragem({ rev, dispatch: this.props.dispatch });		
	}
	render() {
		const { addNewTask, todoList, } = this.props

		if (!todoList.length) {
			return ( 
				<div className="todo-block">
					<p>Нет ни одного таска</p>
					<AddBtn onClick={ addNewTask } >Add</AddBtn>
				</div>
					)
		} else {
			const children = todoList.map((item, i, arr)=>(
				<TodoItem key={i} text={item.text} id={item.id} ready={item.ready} className="todo-item" />			
				)
			)
			return (
				<div className="todo-block">
					<ul className="todo-list">
						{children}
					</ul>
					<AddBtn onClick={ addNewTask } >Add</AddBtn>
				</div>
				);			
		}
		
	}
}

const mapStateToProps = (state) => {
	return {
		todoList: state.todo.data
	}
}
const mapDispatchToProps = (dispatch) => {
	return {		
		readyTask: () => {},
		getDataStorage: getSessionData,
		sessionStoragem:sessionStoragem,
		dispatch,
		addNewTask: () => {
			dispatch( { type: types.TODO_ADD } );
		}
	}
}
export default connect ( mapStateToProps, mapDispatchToProps )( Todo );