import {
    all, call, put,fork ,takeLatest,
} from 'redux-saga/effects';

import { FETCH_PRODUCT } from '../actions/product';
import actions from '../actions/product';
import rf from '../../requests/RequestFactory';

function* fetchProducts(action) {
    try {
        const {data} = yield call(
            () => rf.getRequest('ProductRequest').fetchProducts(),{}
        );
        yield put(actions.onFetchProductSucceed(data));
    } catch (err) {
        console.log("=======",err)
        yield put(actions.onFetchProductFailed(err));
    }
}

function* watchProduct() {
    yield takeLatest(FETCH_PRODUCT, fetchProducts);

}

export default function* rootSaga() {
    yield all([fork(watchProduct)]);
}