import { all, call, put, fork, takeLatest } from 'redux-saga/effects';

import { FETCH_VENDORS, CREATE_VENDOR, UPDATE_VENDOR  } from '../actions/vendors';
import actions from '../actions/vendors';
import rf from '../../requests/RequestFactory';

function* fetchListVendors(action) {
    try {
        const {data, error} = yield call(
            (data) => rf.getRequest('VendorsRequest').fetchVendors(), action.params
        );
        // if (resp.code === 200) {
            yield put(actions.onFetchVendorsSucceed({data}));
        // }
    } catch (err) {
        console.log("=======", err)
        yield put(actions.onFetchVendorsFailed(err));
    }
}

function* watchVendors() {
    yield takeLatest(FETCH_VENDORS, fetchListVendors);
}

export default function* rootSaga() {
    yield all([fork(watchVendors)]);
}