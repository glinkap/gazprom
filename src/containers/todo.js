import React, { Component } from 'react';
import {connect} from 'react-redux';
import { styles } from './Todo.scss';
console.log("styles", styles);
// import './Todo.module.scss';
class Todo extends Component {
	render() {

		const children = this.props.todoList.map((item)=>(
			<li className={styles} key={item.id}>
				<span>{item.id}</span>
				<p>{item.text}</p>
				<input type="checkbox" onChange={()=>true} checked={ item.ready ? 'checked' : '' } />
			 	<button type="button">Edit</button>
		 	</li>
			)
		)
		return (
			<div className="todoBlock">
				<ul className="todo-list">
					{children}
				</ul>
				<button type="button">Add</button>
			</div>
			);
	}
}

const mapStateToProps = (state) => {
	return {
		todoList: state.todo.data
	}
}

export default connect ( mapStateToProps, 
						mapDispatchToProps => ({}) )(Todo);