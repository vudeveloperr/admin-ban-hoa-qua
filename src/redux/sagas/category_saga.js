import {
    all, call, put,fork ,takeLatest,
} from 'redux-saga/effects';

import actions,{
    FETCH_CATEGORY,
} from '../actions/category';
import rf from '../../requests/RequestFactory';

function* fetchCategories(action) {
    try {
        const {data} = yield call(
            () => rf.getRequest('CategoryRequest').fetchCategories(),{}
        );
        yield put(actions.onFetchCategorySucceed(data));
    } catch (err) {
        yield put(actions.onFetchCategoryFailed(err));
    }
}

function* watchCategory() {
    yield takeLatest(FETCH_CATEGORY, fetchCategories);

}

export default function* rootSaga() {
    yield all([fork(watchCategory)]);
}