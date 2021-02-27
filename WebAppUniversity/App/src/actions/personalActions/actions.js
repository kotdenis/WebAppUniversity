export const GET_PERSONAL_DATA = 'GET_PERSONAL_DATA';
function getPersonalDatas(datas) {
    return {
        type: GET_PERSONAL_DATA,
        payload: datas
    };
}

export function getPersonalFetch() {
    return function (dispatch) {
        return $.ajax({
            type: 'GET',
            url: 'api/personapi',
            cache: false,
            success: (result) => {
                dispatch(getPersonalDatas(result));
            }
        });
    };
}



