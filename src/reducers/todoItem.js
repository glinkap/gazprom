import * as actions from '../actions/actions';
import * as types from '../actions/types';
const initialState = {
	editing: false,
	editableId: 0
}
export default function todo(state = initialState, action) {
	switch(action.type) {		
		case types.TODO_EDIT_START: {
			return {
				...state, editing: action.payload.editing, editableId:action.payload.id
			} 
		}
		case types.TODO_SET_SESSION_DATA: {
			return {
				...state, 
			} 
		}
		case types.TODO_EDIT_END: {
			return {
				...state, editing: false
			} 
		}
		default: return state;
	}

}