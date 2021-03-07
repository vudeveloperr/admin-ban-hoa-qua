import {
    all, call, put,fork ,takeLatest,
} from 'redux-saga/effects';

import { FETCH_ORDERS } from '../actions/order';
import actions from '../actions/order';
import rf from '../../requests/RequestFactory';

function* fetchOrders(action) {
    try {
        const { data, error } = yield call(
            (data) => rf.getRequest('OrderRequest').fetchOrders(data), action.data
        );
        if (error.code === 200) {
            yield put(actions.onFetchOrdersSucceed({ data }));
        }
    } catch (err) {
        console.log("=======", err)
        yield put(actions.onFetchOrdersFailed(err));
    }
}

function* watchOrder() {
    yield takeLatest(FETCH_ORDERS, fetchOrders);
}

export default function* rootSaga() {
    yield all([fork(watchOrder)]);
}
