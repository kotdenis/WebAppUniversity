import {
    EDIT_DEPARTMENT_DATA, EDIT_SUBJECT_DATA,
    EDIT_ACHIEVEMENT_DATA, EDIT_ENROLLEE_DATA,
    EDIT_PROGRAM_DATA
} from '../../constants/constants';

function editDepartment(datas) {
    return {
        type: EDIT_DEPARTMENT_DATA,
        payload: datas
    };
}

function editSubject(datas) {
    return {
        type: EDIT_SUBJECT_DATA,
        payload: datas
    };
}

function editAchievement(datas) {
    return {
        type: EDIT_ACHIEVEMENT_DATA,
        payload: datas
    };
}

function editEnrollee(datas) {
    return {
        type: EDIT_ENROLLEE_DATA,
        payload: datas
    };
}

function editProgram(datas) {
    return {
        type: EDIT_PROGRAM_DATA,
        payload: datas
    };
}

const userToken = () => {
    let user = localStorage.getItem('user');
    return { 'Authorization': 'Bearer ' + user };
};

export function editDepartmentData(item, datas) {
    return async function (dispatch) {
        return await $.ajax({
            url: 'api/adminApi/editDepartmentModelAsync/' + item.department_Id,
            type: 'PUT',
            headers: userToken,
            accepts: 'application/json',
            contentType: 'application/json',
            data: JSON.stringify(item),
            error: function (jqXHR, textStatus, errorThrown) {
                alert("Something went wrong while putting department!");
            },
            success: function () {
                alert('Изменено!');
                $('#adminDepartmentModal').hide();
                for (let i = 0; i < datas.length; i++)
                    if (datas[i].department_Id == item.department_Id)
                        datas[i].name = item.name;
                dispatch(editDepartment(datas));
            }
        });
    };
}

export function editSubjectData(item, datas) {
    return async function (dispatch) {
        return await $.ajax({
            url: 'api/adminApi/editSubjectModelAsync/' + item.subject_Id,
            type: 'PUT',
            headers: userToken,
            accepts: 'application/json',
            contentType: 'application/json',
            data: JSON.stringify(item),
            error: function (jqXHR, textStatus, errorThrown) {
                alert("Something went wrong while putting subject!");
            },
            success: function () {
                alert('Изменено!');
                $('#subjectAdminModal').hide();
                for (let i = 0; i < datas.length; i++)
                    if (datas[i].subject_Id == item.subject_Id)
                        datas[i].name = item.name;
                dispatch(editSubject(datas));
            }
        });
    };
}

export function editAchievementData(item, datas) {
    return async function (dispatch) {
        return await $.ajax({
            url: 'api/adminApi/editAchievementModelAsync/' + item.achievement_Id,
            type: 'PUT',
            headers: userToken,
            accepts: 'application/json',
            contentType: 'application/json',
            data: JSON.stringify(item),
            error: function (jqXHR, textStatus, errorThrown) {
                alert("Something went wrong while putting achievement!");
            },
            success: function () {
                alert('Изменено!');
                $('#achievementModal').hide();
                for (let i = 0; i < datas.length; i++)
                    if (datas[i].achievement_Id == item.achievement_Id)
                        datas[i].name = item.name;
                dispatch(editAchievement(datas));
            }
        });
    };
}

export function editEnrolleeData(item, datas) {
    return async function (dispatch) {
        return await $.ajax({
            url: 'api/adminApi/editEnrolleeModelAsync/' + item.enrollee_Id,
            type: 'PUT',
            headers: userToken,
            accepts: 'application/json',
            contentType: 'application/json',
            data: JSON.stringify(item),
            error: function (jqXHR, textStatus, errorThrown) {
                alert("Something went wrong while putting enrollee!");
            },
            success: function () {
                alert('Изменено!');
                $('#enrolleeModal').hide();
                for (let i = 0; i < datas.length; i++)
                    if (datas[i].enrollee_Id == item.enrollee_Id)
                        datas[i].name = item.name;
                dispatch(editEnrollee(datas));
            }
        });
    };
}


export function editProgramData(item, datas) {
    return async function (dispatch) {
        return await $.ajax({
            url: 'api/adminApi/editProgramsModelAsync/' + item.program_Id,
            type: 'PUT',
            headers: userToken,
            accepts: 'application/json',
            contentType: 'application/json',
            data: JSON.stringify(item),
            error: function (jqXHR, textStatus, errorThrown) {
                alert("Something went wrong while putting program!");
            },
            success: function () {
                alert('Изменено!');
                $('#programModal').hide();
                for (let i = 0; i < datas.length; i++)
                    if (datas[i].program_Id == item.program_Id) {
                        datas[i].name = item.name;
                        datas[i].plan = item.plan;
                    }
                dispatch(editProgram(datas));
            }
        });
    };
}