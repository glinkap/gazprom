import * as actions from '../actions/actions';
import * as types from '../actions/types';
const initialState = {
	editing: false,
	target:null
}
export default function todo(state = initialState, action) {
	switch(action.type) {		
		case types.TODO_EDIT_START: {
			return {
				...state, editing: action.payload.editing, target:action.payload.target
			} 
		}
		case types.TODO_SET_SESSION_DATA: {
			return {
				...state, 
			} 
		} 		
		default: return state;
	}

}