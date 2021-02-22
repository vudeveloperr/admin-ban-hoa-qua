import { all } from 'redux-saga/effects';
import watchCategory from './category_saga';
import watchProduct from './product_saga';

function* rootSaga() {
  yield all([
    watchCategory(),
    watchProduct(),
  ]);
}

export default rootSaga;