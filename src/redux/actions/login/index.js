export const LOGIN = 'LOGIN'
export const LOGIN_SUCCEED = 'LOGIN_SUCCEED'
export const LOGIN_FAILED = 'LOGIN_FAILED'
export const LOGOUT = 'LOGOUT'

export default {
    onLogin: (data, callback) =>({
        type: LOGIN,
        data,
        callback
    }),
    onLoginSucceed: (data) => ({
        type: LOGIN_SUCCEED,
        data,
    }),
    onLoginFailed: (err) => ({
        type: LOGIN_FAILED,
        err,
    }),
    onLogout: () => ({
        type: LOGOUT
    })
};