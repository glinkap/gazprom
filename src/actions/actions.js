import * as types from './types';
export const getSessionData = () => {	
	const data = JSON.parse(sessionStorage.getItem("todosData"));
	return {
		type: types.TODO_GET_SESSION_DATA,
		payload: data
	}
} ;  
export const setSessionData = ( { rev, data } ) => {
	const newData = JSON.stringify(data)
	sessionStorage.setItem("todosData", newData);
	sessionStorage.setItem("TODO_rev", rev);
	return {
		type: types.TODO_SET_SESSION_DATA,
	}
} ;  
export const getRev = ( { rev } ) => {	
	const revS = sessionStorage.getItem("TODO_rev");
	if (revS == 'undefined') sessionStorage.setItem("TODO_rev", rev);
	if (rev === revS) {
		return false;
	} else {
		return true;
	}	
} ; 

export const sessionStorage = ( { rev, dispatch } ) => {
	if ( !sessionStorage.getItem ) return
	const revS = sessionStorage.getItem("TODO_rev");
	if (revS == 'undefined') sessionStorage.setItem("TODO_rev", rev);
	if (rev === revS) {
		return false;
	} else {
		let data = JSON.parse(sessionStorage.getItem("todosData"));
		dispatch ({
			type: types.TODO_GET_SESSION_DATA,
			payload: data
		})
	}	
};