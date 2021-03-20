import { all, call, put, fork, takeLatest } from "redux-saga/effects";

import actions, { FETCH_ADMIN } from "../actions/admin";
import rf from "../../requests/RequestFactory";

function* fetchAdmin(action) {
  try {
    const { data } = yield call(
      (data) => rf.getRequest("AdminRequest").fetchAdmin(data),
      action.data
    );
    yield put(actions.fetchAdminSucceed({ data }));
  } catch (err) {
    yield put(actions.fetchAdminFailed(err));
  }
}

function* watchAdmin() {
  yield takeLatest(FETCH_ADMIN, fetchAdmin);
}

export default function* rootSaga() {
  yield all([fork(watchAdmin)]);
}
