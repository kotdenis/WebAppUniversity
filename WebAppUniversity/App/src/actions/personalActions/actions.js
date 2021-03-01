export const GET_PERSONAL_DATA = 'GET_PERSONAL_DATA';
function getPersonalDatas(datas) {
    return {
        type: GET_PERSONAL_DATA,
        payload: datas
    };
}

export const GET_DATA_BYPROGRAM = 'GET_DATA_BYPROGRAM';
function getDataByProgrem(datas) {
    return {
        type: GET_DATA_BYPROGRAM,
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

export function getDataByProgramName(datas, nameProgr, nameDepart) {
    return function (dispatch) {
        let data = [];
        if (nameProgr !== '')
            data = datas.filter(x => x.programName === nameProgr)
                .map(x => x);
        if (nameDepart !== '')
            data = datas.filter(x => x.departmentName === nameDepart)
                .map(x => x);
        if (nameProgr === '' && nameDepart === '')
            data = datas;
        
        dispatch(getDataByProgrem(data));
    };
}



