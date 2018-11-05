import * as types from './types';
export const getSessionData = () => {	
	const data = JSON.parse(sessionStorage.getItem("todosData"));
	return {
		type: types.TODO_GET_SESSION_DATA,
		payload: data
	}
} ;  
// export const setSessionData = ( { rev, data } ) => {
// 	const newRev = rev + 1
// 	const newData = JSON.stringify(data)
// 	sessionStorage.setItem("todosData", data);
// 	sessionStorage.setItem("TODO_rev", newRev);
// 	return true;
// } ;  
// export const getRev = ( { rev } ) => {	
// 	const revS = sessionStorage.getItem("TODO_rev");
// 	if (revS == 'undefined') sessionStorage.setItem("TODO_rev", rev);
// 	if (rev === revS) {
// 		return false;
// 	} else {
// 		return true;
// 	}	
// } ; 

export const sessionStoragem = ( { rev, dispatch } ) => {
	// if ( !sessionStorage.getItem ) return
	const revS = sessionStorage.getItem("TODO_rev");
	if (revS == 'undefined') sessionStorage.setItem("TODO_rev", rev);
	if (rev < revS) { 
		let data = JSON.parse(sessionStorage.getItem("todosData"));
		dispatch ({
			type: types.TODO_GET_SESSION_DATA,
			payload: data
		})
	} else {
	}	
};