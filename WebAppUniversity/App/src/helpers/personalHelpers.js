﻿
export function buildEnrolleeDepartTable(datas, activePage) {
    let start = (activePage - 1) * 7;
    let end = activePage * 7;
    let counter = start;
    $('#bodyTableEnrolleeDepartment').empty();
    const tBody = '#bodyTableEnrolleeDepartment';
    if (typeof datas !== 'undefined' && datas !== null && datas.length > 0) {
        $.each(datas.slice(start, end), function (key, item) {
            counter++;
            const tr = $("<tr></tr>")
                .append($('<td></td>').text(counter))
                .append($('<td></td>').text(item.enrolleeName))
                .append($('<td></td>').text(item.programName))
                .append($('<td></td>').text(item.departmentName));
            tr.appendTo(tBody);
        });
    }
    else {
        const divAlert = '#divTableEnrolleeDepartment';
        const alrt = $('<div></div>').addClass("alert alert-info")
            .append($('<strong></strong>').text('information'));
        alrt.appendTo(divAlert);
    }
}


export function buildResultUgeTable(datas, activePage) {
    let start = (activePage - 1) * 7;
    let end = activePage * 7;
    let counter = start;
    $('#tableUGEBody').empty();
    const tBody = '#tableUGEBody';
    if (typeof datas !== 'undefined' && datas !== null && datas.length > 0) {
        $.each(datas.slice(start, end), function (key, item) {
            counter++;
            const tr = $("<tr></tr>")
                .append($('<td></td>').text(counter))
                .append($('<td></td>').text(item.subjectName))
                .append($('<td></td>').text(item.amount))
                .append($('<td></td>').text(item.maxValue))
                .append($('<td></td>').text(item.minValue))
                .append($('<td></td>').text(item.averageValue));
            tr.appendTo(tBody);
        });
    }
    else {
        const divAlert = '#divTableUGE';
        const alrt = $('<div></div>').addClass("alert alert-info")
            .append($('<strong></strong>').text('information'));
        alrt.appendTo(divAlert);
    }
}

export function buildStatementTable(datas, activePage) {
    let start = (activePage - 1) * 7;
    let end = activePage * 7;
    let counter = start;
    $('#tableStatementBody').empty();
    const tBody = '#tableStatementBody';
    if (typeof datas !== 'undefined' && datas !== null && datas.length > 0) {
        $.each(datas.slice(start, end), function (key, item) {
            counter++;
            const tr = $("<tr></tr>")
                .append($('<td></td>').text(counter))
                .append($('<td></td>').text(item.departmentName))
                .append($('<td></td>').text(item.programName))
                .append($('<td></td>').text(item.plan))
                .append($('<td></td>').text(item.amount))
                .append($('<td></td>').text(item.contest));
            tr.appendTo(tBody);
        });
    }
    else {
        const divAlert = '#divTableStatement';
        const alrt = $('<div></div>').addClass("alert alert-info")
            .append($('<strong></strong>').text('information'));
        alrt.append($('<button></button>').addClass('btn btn-danger')
            .on('click', () => $('.alert-info').hide()).text('&times;'));
        alrt.appendTo(divAlert);
    }
}

export function fillSelectWithOptions(datas) {
    $('#selectProgram').empty();
    $('#selectDepartment').empty();
    const selPr = $('#selectProgram');
    const selDep = $('#selectDepartment');
    if (typeof datas !== 'undefined' && datas !== null && datas.length > 0) {
        const dataProg = [...new Set(datas.map(item => item.programName))];
        const dataDep = [...new Set(datas.map(item => item.departmentName))];
        $('<option />').appendTo(selPr);
        $('<option />').appendTo(selDep);
        dataProg.map(d => ($('<option>< option />').text(d)).appendTo(selPr));
        dataDep.map(d => ($('<option>< option />').text(d)).appendTo(selDep));
    }
}

