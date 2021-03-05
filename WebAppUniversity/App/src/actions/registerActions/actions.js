import { REGISTER_USER, LOGIN_USER, LOGOUT_USER } from '../../constants/constants';

function register(datas) {
    return {
        type: REGISTER_USER,
        payload: datas
    };
}

function login(datas) {
    return {
        type: LOGIN_USER,
        payload: datas
    };
}

function logout(datas) {
    return {
        type: LOGOUT_USER,
        payload: datas
    };
}

export function registerUser(user) {
    return async function (dispatch) {
        return await $.ajax({
            url: 'api/accountApi/register/',
            type: 'POST',
            accepts: 'application/json',
            contentType: 'application/json',
            data: JSON.stringify(user),
            error: function (jqXHR, textStatus, errorThrown) {
                alert("Something went wrong while register!");
            },
            success: function(result) {
                alert(result.message);
                dispatch(register(null));
            }
        });
    };
}

export function loginUser(user) {
    return async function (dispatch) {
        return await $.ajax({
            url: 'api/accountApi/login/',
            type: 'POST',
            accepts: 'application/json',
            contentType: 'application/json',
            data: JSON.stringify(user),
            error: function (jqXHR, textStatus, errorThrown) {
                alert("Something went wrong while login!");
            },
            success: function (result) {
                if (result.isLogged) {
                    localStorage.setItem('user', result.token);
                }
                dispatch(login({ name: result.name, isLogged: result.isLogged }));
            }
        });
    };
}

export function logoutUser() {
    return async function (dispatch) {
        return await $.ajax({
            url: 'api/accountApi/logout/',
            type: 'GET',
            cache: false,
            error: function (jqXHR, textStatus, errorThrown) {
                alert("Something went wrong while logout!");
            },
            success: function (result) {
                if (result.status === 'Ok') {
                    localStorage.removeItem('user');
                }
                dispatch(logout({ isLogout: true }));
            }
        });
    };
}