import {
    GET_FIRST_ADMINDATA,
    GET_SECOND_ADMINDATA,
    GET_THIRD_ADMINDATA
} from '../../constants/constants';

function getFirstData(datas) {
    return {
        type: GET_FIRST_ADMINDATA,
        payload: datas
    };
}

function getSecondData(datas) {
    return {
        type: GET_SECOND_ADMINDATA,
        payload: datas
    };
}

function getThirdData(datas) {
    return {
        type: GET_THIRD_ADMINDATA,
        payload: datas
    };
}

const userToken = () => {
    let user = localStorage.getItem('user');
    return { 'Authorization': 'Bearer ' + user };
};

export function getFirstAdminData() {
    return async function (dispatch) { 
        return await $.ajax({
            type: 'GET',
            url: 'api/adminApi/getBaseModelsAsync',
            headers: userToken,
            cache: false,
            error: function (jqXHR, textStatus, errorThrown) {
                alert("Something went wrong while loading first row!");
            },
            success: (result) => {
                dispatch(getFirstData(result));
            }
        });
    };
}

export function getSecondAdminData() {
    return async function (dispatch) {
        return await $.ajax({
            type: 'GET',
            url: 'api/adminApi/getSecondBaseModelsAsync',
            headers: userToken,
            cache: false,
            error: function (jqXHR, textStatus, errorThrown) {
                alert("Something went wrong while loading second row!");
            },
            success: (result) => {
                dispatch(getSecondData(result));
            }
        });
    };
}

export function getThirdAdminData() {
    return function (dispatch) {
        return $.ajax({
            type: 'GET',
            url: 'api/adminApi/getThirdBaseModelsAsync',
            headers: userToken,
            cache: false,
            error: function (jqXHR, textStatus, errorThrown) {
                alert("Something went wrong in third!");
            },
            success: (result) => {
                dispatch(getThirdData(result));
            }
        });
    };
}