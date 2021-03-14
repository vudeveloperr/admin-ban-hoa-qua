import { all, call, put, fork, takeLatest } from 'redux-saga/effects';

import { FETCH_LIST_IMPORT, ADDITION_QUANTITY } from '../actions/import';
import actions from '../actions/import';
import rf from '../../requests/RequestFactory';

function* fetchListImport(action) {
    try {
        const {data, error} = yield call(
            (data) => rf.getRequest('ImportRequest').fetchImport(), action.params
        );
        // if (resp.code === 200) {
            yield put(actions.onFetchImportSucceed({data}));
        // }
    } catch (err) {
        console.log("=======", err)
        yield put(actions.onFetchImportFailed(err));
    }
}

function* additionQuantity(action) {
    try {
        const { data, error } = yield call(
            (data) => rf.getRequest('ImportRequest').additionQuantity(data), action.data
        );
        if (error.code === 200) {
            yield call(action.callback());
            yield put(actions.onAdditionQuantity());
        }
        else {
            yield put(actions.onAdditionQuantityFailed(error.message));
        }
    } catch (err) {
        console.log("=======", err)
        yield put(actions.onAdditionQuantityFailed(err));
    }
}

function* watchImport() {
    yield takeLatest(FETCH_LIST_IMPORT, fetchListImport);
    yield takeLatest(ADDITION_QUANTITY, additionQuantity);
}

export default function* rootSaga() {
    yield all([fork(watchImport)]);
}