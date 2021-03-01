export const GET_FIRST_ADMINDATA = 'GET_FIRST_ADMINDATA';
function getFirstData(datas) {
    return {
        type: GET_FIRST_ADMINDATA,
        payload: datas
    };
}

export const GET_SECOND_ADMINDATA = 'GET_SECOND_ADMINDATA';
function getSecondData(datas) {
    return {
        type: GET_SECOND_ADMINDATA,
        payload: datas
    };
}

export const GET_THIRD_ADMINDATA = 'GET_THIRD_ADMINDATA';
function getThirdData(datas) {
    return {
        type: GET_THIRD_ADMINDATA,
        payload: datas
    };
}

export function getFirstAdminData() {
    return async function (dispatch) {
        return await $.ajax({
            type: 'GET',
            url: 'api/adminApi/getBaseModelsAsync',
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