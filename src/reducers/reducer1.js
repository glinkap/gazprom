const initialState = {
}
export default function autocompleteReducer(state = initialState, action) {
	switch(action.type) {		
		case 'SEARCH_PRELOADER_START': {
			return {
				...state, loading:true
			} 
		}		
		default: return state;
	}

}