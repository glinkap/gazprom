import { all, fork } from 'redux-saga/effects';
import sessionSynhronisation from './sessionSynhronisation';

export default function * rootSaga() {
     yield all([
        fork(sessionSynhronisation),
        
    ]);
};