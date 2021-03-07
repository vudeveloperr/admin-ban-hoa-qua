import {
    all, call, put, fork, takeLatest,
} from 'redux-saga/effects';

import actions, {
    LOGIN,
} from '../actions/account';
import rf from '../../requests/RequestFactory';

function* login(action) {
    try {
        const { data, error } = yield call(
            (data) => rf.getRequest('AccountRequest').login(data), action.data
        );
        if (error.code === 200 && data.typeid === "admin") {
            window.localStorage.setItem("token",data.token);
            window.axios = axios.create({
                baseURL: 'http://192.168.0.109/v1',
                headers: {token:data.token}
              });
            yield action.callback();
            yield put(actions.loginSucceed(data.token));
        }
    } catch (err) {
        yield put(actions.loginFailed(err));
    }
}

function* watchAccount() {
    yield takeLatest(LOGIN, login);
}

export default function* rootSaga() {
    yield all([fork(watchAccount)]);
}