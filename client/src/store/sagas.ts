import {
    all,
    call,
    put,
    takeLatest,
} from 'redux-saga/effects';
import {getType} from 'typesafe-actions';
import * as actions from './actions';

export function* initialize() {
    try {
        yield all([
            call(requestTasks),
        ]);

        yield put(actions.init.success());
    } catch (e) {
        yield put(actions.init.failure('Something went wrong. Please, try again'));
    }
}

export function* requestTasks() {
}

function* watchInit() {
    yield takeLatest(getType(actions.init.request), initialize);
}

export function* rootSaga() {
    yield all([
        watchInit(),
    ]);
}