import { call, put, takeEvery, takeLatest, select } from 'redux-saga/effects';
import { setSessionData } from '../actions/actions';
import * as types from '../actions/types';
// import { delay } from 'redux-saga';
// import * as Api from '../api/v-tree-api';

function* setSessionDataGen(action) {
   try {
   		const state = yield select();
   		const newRev = state.todo.rev + 1
		const newData = JSON.stringify(state.todo.data)
		sessionStorage.setItem("todosData", newData);
		sessionStorage.setItem("TODO_rev", newRev);
   		yield put({type: types.TODO_SET_SESSION_DATA, payload:{rev: newRev} });
   	// sessionStorage.setItem("todosData", 43243243);
   		// const request = yield call(setSessionData, { rev: state.todo.rev, data: state.todo.data });

   } catch (e) {
   }
}


export default function* () {
  yield takeLatest(types.TODO_APPLY_TASK, setSessionDataGen);
  yield takeLatest(types.TODO_ADD, setSessionDataGen);
  yield takeLatest(types.TODO_REMOVE, setSessionDataGen);
}