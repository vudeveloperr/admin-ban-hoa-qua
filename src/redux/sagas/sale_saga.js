import { all, call, put, fork, takeLatest } from 'redux-saga/effects';

import { FETCH_SALES, CREATE_SALE, UPDATE_SALE  } from '../actions/sale';
import actions from '../actions/sale';
import rf from '../../requests/RequestFactory';

function* fetchListSales(action) {
    try {
        const {data, error} = yield call(
            (data) => rf.getRequest('SaleRequest').fetchSales(), action.params
        );
        // if (resp.code === 200) {
            yield put(actions.onFetchSalesSucceed({data}));
        // }
    } catch (err) {
        console.log("=======", err)
        yield put(actions.onFetchSalesFailed(err));
    }
}

function* createSale(action) {
    try {
        const { data, error } = yield call(
            (data) => rf.getRequest('SaleRequest').createSale(data), action.data
        );
        if (error.code === 200) {
            yield call(action.callback());
            yield put(actions.createSale());
        }
        else {
            yield put(actions.onCreateSaleFailed(error.message));
        }
    } catch (err) {
        console.log("=======", err)
        yield put(actions.onCreateSaleFailed(err));
    }
}

function* updateSales(action) {
    console.log("action",action)
    try {
        const { data, error } = yield call(
            (data) => rf.getRequest('SaleRequest').updateSale(data), action.data,
        );
        if (error.code === 200) {
            action.callback();
            yield put(actions.onUpdateSale());
            yield put(actions.fetchSales());
            yield put(actions.onUpdateSaleSucceed({data}));
        }
        else {
            yield put(actions.onUpdateSaleFailed(error.message));
        }
    } catch (err) {
        console.log("=======", err)
        yield put(actions.onUpdateSaleFailed(err));
    }
}

function* watchSale() {
    yield takeLatest(FETCH_SALES, fetchListSales);
    yield takeLatest(CREATE_SALE, createSale);
    yield takeLatest(UPDATE_SALE, updateSales);
}

export default function* rootSaga() {
    yield all([fork(watchSale)]);
}