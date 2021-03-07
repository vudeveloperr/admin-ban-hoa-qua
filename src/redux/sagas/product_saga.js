import {
    all, call, put,fork ,takeLatest,
} from 'redux-saga/effects';

import actions,{ FETCH_PRODUCTS } from '../actions/product';
import rf from '../../requests/RequestFactory';

function* fetchProducts(action) {
    try {
        const { data, total_count, error } = yield call(
            (data) => rf.getRequest('ProductRequest').fetchProducts(data), action.data
        );
        if (error.code === 200) {
            yield put(actions.onFetchProductsSucceed({ data, total_count }));
        }
    } catch (err) {
        console.log("=======", err)
        yield put(actions.onFetchProductsFailed(err));
    }
}

function* watchProduct() {
    yield takeLatest(FETCH_PRODUCTS, fetchProducts);

}

export default function* rootSaga() {
    yield all([fork(watchProduct)]);
}