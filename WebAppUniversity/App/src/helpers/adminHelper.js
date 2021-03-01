
export function buildAdminDepartmentTable(datas, activePage) {
    let start = (activePage - 1) * 7;
    let end = activePage * 7;
    let counter = start;
    $('#tableAdminDepartmentBody').empty();
    const tBody = '#tableAdminDepartmentBody';
    if (datas !== null && datas.length > 0) {
        $.each(datas.slice(start, end), function (key, item) {
            counter++;
            const tr = $("<tr></tr>")
                .append($('<td></td>').text(counter))
                .append($('<td></td>').text(item.name))
                .append($('<td></td>').append($('<button>Редактировать</button>')
                    .addClass('btn btn-info')
                    .on('click', function () {
                        $('#adminDepartmentModal').show();
                        $('#departmentModalInput').val(item.name);
                        departmentId = item.department_Id;
                    })))
                .append($('<td></td>').append($('<button>Удалить</button>')
                    .addClass('btn btn-danger')
                    .on('click', function () {
                        alert(item.department_Id);
                    })));
            tr.appendTo(tBody);
        });
    }
    else {
        const divAlert = '#divTableAdminDepartment';
        const alrt = $('<div></div>').addClass("alert alert-info")
            .append($('<strong></strong>').text('information'));
        alrt.appendTo(divAlert);
    }
}

export function buildAdminSubjectTable(datas, activePage) {
    let start = (activePage - 1) * 7;
    let end = activePage * 7;
    let counter = start;
    $('#tableAdminSubjectBody').empty();
    const tBody = '#tableAdminSubjectBody';
    if (datas !== null && datas.length > 0) {
        $.each(datas.slice(start, end), function (key, item) {
            counter++;
            const tr = $("<tr></tr>")
                .append($('<td></td>').text(counter))
                .append($('<td></td>').text(item.name))
                .append($('<td></td>').append($('<button>Редактировать</button>')
                    .addClass('btn btn-info')
                    .on('click', function () {
                        $('#subjectAdminModal').show();
                        $('#subjectAdminModalInput').val(item.name);
                        subjectId = item.subject_Id;
                    })))
                .append($('<td></td>').append($('<button>Удалить</button>')
                    .addClass('btn btn-danger')
                    .on('click', function () {

                    })));
            tr.appendTo(tBody);
        });
    }
    else {
        const divAlert = '#divTableAdminSubject';
        const alrt = $('<div></div>').addClass("alert alert-info")
            .append($('<strong></strong>').text('information'));
        alrt.appendTo(divAlert);
    }
}

export function buildAdminEnrolleeTable(datas, activePage) {
    let start = (activePage - 1) * 7;
    let end = activePage * 7;
    let counter = start;
    $('#tableAdminEnrolleeBody').empty();
    const tBody = '#tableAdminEnrolleeBody';
    if (datas !== null && datas.length > 0) {
        $.each(datas.slice(start, end), function (key, item) {
            counter++;
            const tr = $("<tr></tr>")
                .append($('<td></td>').text(counter))
                .append($('<td></td>').text(item.name))
                .append($('<td></td>').append($('<button>Редактировать</button>')
                    .addClass('btn btn-info')
                    .on('click', function () {
                        $('#enrolleeModal').show();
                        $('#enrolleeModalInput').val(item.name);
                        enrolleeId = item.enrollee_Id;
                    })))
                .append($('<td></td>').append($('<button>Удалить</button>')
                    .addClass('btn btn-danger')
                    .on('click', function () {
                        alert(' ');
                    })));
            tr.appendTo(tBody);
        });
    }
    else {
        const divAlert = '#divTableAdminEnrollee';
        const alrt = $('<div></div>').addClass("alert alert-info")
            .append($('<strong></strong>').text('information'));
        alrt.appendTo(divAlert);
    }
}

export function buildAchievementTable(datas, activePage) {
    let start = (activePage - 1) * 7;
    let end = activePage * 7;
    let counter = start;
    $('#tableAdminAchievementBody').empty();
    const tBody = '#tableAdminAchievementBody';
    if (datas !== null && datas.length > 0) {
        $.each(datas.slice(start, end), function (key, item) {
            counter++;
            const tr = $("<tr></tr>")
                .append($('<td></td>').text(counter))
                .append($('<td></td>').text(item.name))
                .append($('<td></td>').append($('<button>Редактировать</button>')
                    .addClass('btn btn-info')
                    .on('click', function () {
                        $('#achievementModal').show();
                        $('#achievementModalInput').val(item.name);
                        achievementId = item.achievement_Id;
                    })))
                .append($('<td></td>').append($('<button>Удалить</button>')
                    .addClass('btn btn-danger')
                    .on('click', function () {
                        alert('some');
                    })));
            tr.appendTo(tBody);
        });
    }
    else {
        const divAlert = '#divTableAdminAchievement';
        const alrt = $('<div></div>').addClass("alert alert-info")
            .append($('<strong></strong>').text('information'));
        alrt.appendTo(divAlert);
    }
}

export function buildAdminProgramTable(datas, activePage) {
    let start = (activePage - 1) * 7;
    let end = activePage * 7;
    let counter = start;
    $('#tableAdminProgramBody').empty();
    const tBody = '#tableAdminProgramBody';
    if (datas !== null && datas.length > 0) {
        $.each(datas.slice(start, end), function (key, item) {
            counter++;
            const tr = $("<tr></tr>")
                .append($('<td></td>').text(counter))
                .append($('<td></td>').text(item.name))
                .append($('<td></td>').text(item.department_Id))
                .append($('<td></td>').text(item.plan))
                .append($('<td></td>').append($('<button>Редактировать</button>')
                    .addClass('btn btn-info')
                    .on('click', function () {
                        $('#programModal').show();
                        $('#programModalNameInput').val(item.name);
                        $('#programModalPlanInput').val(item.plan);
                        programId = item.program_Id;
                        department_Id = item.department_Id;
                    })))
                .append($('<td></td>').append($('<button>Удалить</button>')
                    .addClass('btn btn-danger')
                    .on('click', function () {
                        alert('some');
                    })));
            tr.appendTo(tBody);
        });
    }
    else {
        const divAlert = '#divTableAdminProgram';
        const alrt = $('<div></div>').addClass("alert alert-info")
            .append($('<strong></strong>').text('information'));
        alrt.appendTo(divAlert);
    }
}