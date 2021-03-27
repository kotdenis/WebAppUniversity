import {
    GET_SUBJECT_DATA,
    GET_DEPARTMENT_DATA,
    GET_ACHIEVEMENT_DATA,
    GET_ENROLLEE_DATA,
    GET_PROGRAMS_DATA
} from '../../constants/constants';


function getPrograms(datas) {
    return {
        type: GET_PROGRAMS_DATA,
        payload: datas
    };
}

function getDepartment(datas) {
    return {
        type: GET_DEPARTMENT_DATA,
        payload: datas
    };
}

function getSubject(datas) {
    return {
        type: GET_SUBJECT_DATA,
        payload: datas
    };
}

function getAchievement(datas) {
    return {
        type: GET_ACHIEVEMENT_DATA,
        payload: datas
    };
}

function getEnrollee(datas) {
    return {
        type: GET_ENROLLEE_DATA,
        payload: datas
    };
}

const userToken = () => {
    let user = localStorage.getItem('user');
    return { 'Authorization': 'Bearer ' + user };
};

export function getDepartmentData() {
    return async function (dispatch) {
        return await $.ajax({
            type: 'GET',
            url: 'api/departments',
            headers: userToken,
            cache: false,
            error: function (jqXHR, textStatus, errorThrown) {
                alert("Something went wrong while loading department!");
            },
            success: (result) => {
                dispatch(getDepartment(result));
            }
        });
    };
}

export function getSubjectData() {
    return async function (dispatch) {
        return await $.ajax({
            type: 'GET',
            url: 'api/subjects',
            headers: userToken,
            cache: false,
            error: function (jqXHR, textStatus, errorThrown) {
                alert("Something went wrong while loading Subjects!");
            },
            success: (result) => {
                dispatch(getSubject(result));
            }
        });
    };
}

export function getAchievementData() {
    return async function (dispatch) {
        return await $.ajax({
            type: 'GET',
            url: 'api/achievements',
            headers: userToken,
            cache: false,
            error: function (jqXHR, textStatus, errorThrown) {
                alert("Something went wrong while loading Achievements!");
            },
            success: (result) => {
                dispatch(getAchievement(result));
            }
        });
    };
}

export function getEnrolleeData() {
    return async function (dispatch) {
        return await $.ajax({
            type: 'GET',
            url: 'api/enrollees',
            headers: userToken,
            cache: false,
            error: function (jqXHR, textStatus, errorThrown) {
                alert("Something went wrong while loading Enrollees!");
            },
            success: (result) => {
                dispatch(getEnrollee(result));
            }
        });
    };
}


export function getProgramsData() {
    return function (dispatch) {
        return $.ajax({
            type: 'GET',
            url: 'api/programs',
            headers: userToken,
            cache: false,
            error: function (jqXHR, textStatus, errorThrown) {
                alert("Something went wrong in third!");
            },
            success: (result) => {
                dispatch(getPrograms(result));
            }
        });
    };
}