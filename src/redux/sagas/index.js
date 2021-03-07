import { all } from 'redux-saga/effects';
import watchCategory from './category_saga';
import watchProduct from './product_saga';
import watchAdmin from './admin_saga';
import watchAccount from './account_saga';

function* rootSaga() {
  yield all([
    watchCategory(),
    watchProduct(),
    watchAdmin(),
    watchAccount(),
  ]);
}

export default rootSaga;