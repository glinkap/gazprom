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
	rev:0
}
export default function todo(state = initialState, action) {
	switch(action.type) {		
		case types.TODO_GET_SESSION_DATA: {
			return {
				...state, data: action.payload
			} 
		}
		case types.TODO_SET_SESSION_DATA: {
			return {
				...state, rev: action.payload.rev
			} 
		}
		case types.TODO_ADD: {
			const data = state.data.slice();
			data.push({ text:'Новая задачка?', ready: false, id: state.data.length + 1  })
			return {
				...state, data
			} 
		}
		case types.TODO_REMOVE: {
			const data = state.data.slice()
			const index = data.findIndex((el,i,arr)=>{
				if (el.id === action.payload.id) {
					return true
				} else {
					return false
				}
			});
				data.splice(index,1);
			return {
				...state, data
			} 
		}
		case types.TODO_APPLY_TASK: {
			const data = state.data.slice().map((el)=>{
				if (el.id === action.payload.id) {
					el.text = action.payload.newText
					return el
				} else {
					return el
				}
			});
			return {
				...state, data
			} 
		}  		 		
		default: return state;
	}

}