import * as actions from '../actions/actions';
import * as types from '../actions/types';
const initialState = {
	data:[
		{
			text: 'Разобраться с typeScript', 
			ready: false,
			id:1
		},
		{
			text: 'Использовать PropTypes', 
			ready: false,
			id:2
		},
		{
			text: 'Настроить Linter от AirBnB внутри CreateReactApp v2.0', 
			ready: false,
			id:3
		},
		{
			text: 'Спроектировать структуру компонентов', 
			ready: true,
			id:4
		}
	],
}
export default function todo(state = initialState, action) {
	switch(action.type) {		
		case types.TODO_GET_SESSION_DATA: {
				console.log("action", action);
			return {
				...state, data: action.payload
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