import { all } from 'redux-saga/effects';
import watchCategory from './category_saga';


function* rootSaga() {
  yield all([
    watchCategory(),
  ]);
}

export default rootSaga;