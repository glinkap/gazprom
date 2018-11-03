import rootReducer from '../reducers/rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas/rootSaga';
import { createStore, applyMiddleware/*, compose*/ } from 'redux';

const sagaMiddleware = createSagaMiddleware();
let finalStore;
if (process.env.NODE_ENV === 'production') {
	// finalStore = createStore(rootReducer, applyMiddleware(thunk));
	finalStore = createStore(rootReducer, composeWithDevTools(/*applyMiddleware(thunk),*/ applyMiddleware(sagaMiddleware)));
} else {
	const compMware = composeWithDevTools(/*applyMiddleware(thunk),*/ applyMiddleware(sagaMiddleware));
	finalStore = createStore(rootReducer, compMware);
}
sagaMiddleware.run(rootSaga)
export default finalStore;
