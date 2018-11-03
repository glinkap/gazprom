import * as types from './types'
export const getSessionData = () => {	
	const data = JSON.parse(sessionStorage.getItem("todosData"));
	return {
		type: types.TODO_GET_SESSION_DATA,
		payload: data
	}
} ;  
export const setSessionData = (...rest) => {
	const data = JSON.stringify(rest.todos)
	sessionStorage.setItem("todosData", data);
	return {
		type: types.TODO_SET_SESSION_DATA,
	}
} ;  