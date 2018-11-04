import { combineReducers } from 'redux'
import todo from './todo';
import todoItem from './todoItem';

export default combineReducers({
	todo,
	todoItem,
})
