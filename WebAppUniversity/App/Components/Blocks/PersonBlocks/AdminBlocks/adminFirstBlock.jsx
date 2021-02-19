﻿import React from 'react';
import AdminDepartment from './adminDepartment.jsx';
import AdminSubject from './adminSubject.jsx';

var start = 0;
var end = 0;
var counter = 0;

export default class AdminFirstBlock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            departmentData: [],
            subjectData: [],
            activeDepartPage: 1,
            activeSubjectPage: 1,
            departmentPageLength: 1,
            subjectPageLength: 1
        };
    }

    componentDidMount() {
        this.getInitialAdminDataAsync();
    }

    componentDidUpdate(prevProps) {
        this.buildDepartmentTable(this.state.departmentData);
        this.buildSubjecttTable(this.state.subjectData);
    }

    async getInitialAdminDataAsync() {
        try {
            $.ajax({
                type: 'GET',
                url: 'api/adminApi/getBaseModelsAsync',
                cache: false,
                error: function (jqXHR, textStatus, errorThrown) {
                    alert("Something went wrong!");
                },
                success: (res) => {
                    this.setState({
                        departmentData: res[0],
                        subjectData: res[1],
                        departmentPageLength: Math.ceil(res[0].length / 7),
                        subjectPageLength: Math.ceil(res[1].length / 7)
                    });
                }
            });
        }
        catch (error) { alert("Mistake while loading"); }
    }

    buildDepartmentTable(departmentArry) {
        start = (this.state.activeDepartPage - 1) * 7;
        end = this.state.activeDepartPage * 7;
        counter = start;
        $('#tableDepartBody').empty();
        const tBody = '#tableDepartBody';
        if (departmentArry !== null && departmentArry.length > 0) {
            $.each(departmentArry.slice(start, end), function (key, item) {
                counter++;
                const tr = $("<tr></tr>")
                    .append($('<td></td>').text(counter))
                    .append($('<td></td>').text(item.name))
                    .append($('<td></td>').append($('<button>Редактировать</button>')
                        .addClass('btn btn-info')
                        .on('click', function () {
                            alert(item.name);
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
            const divAlert = '#divTableDepart';
            const alrt = $('<div></div>').addClass("alert alert-info")
                .append($('<strong></strong>').text('information'));
            alrt.appendTo(divAlert);
        }
    }

    buildSubjecttTable(subjectArray) {
        start = (this.state.activeSubjectPage - 1) * 7;
        end = this.state.activeSubjectPage * 7;
        counter = start;
        $('#tableSubjectBody').empty();
        const tBody = '#tableSubjectBody';
        if (subjectArray !== null && subjectArray.length > 0) {
            $.each(subjectArray.slice(start, end), function (key, item) {
                counter++;
                const tr = $("<tr></tr>")
                    .append($('<td></td>').text(counter))
                    .append($('<td></td>').text(item.name))
                    .append($('<td></td>').append($('<button>Редактировать</button>')
                        .addClass('btn btn-info')
                        .on('click', function () {
                            alert(item.name);
                        })))
                    .append($('<td></td>').append($('<button>Удалить</button>')
                        .addClass('btn btn-danger')
                        .on('click', function () {
                            testSome();
                        })));
                tr.appendTo(tBody);
            });
        }
        else {
            const divAlert = '#divTableSubject';
            const alrt = $('<div></div>').addClass("alert alert-info")
                .append($('<strong></strong>').text('information'));
            alrt.appendTo(divAlert);
        }
    }

    handleDepartmentPageChange(pageNumber) {
        this.setState({
            activeDepartPage: pageNumber
        });
    }

    handleSubjectPageChange(pageNumber) {
        this.setState({
            activeSubjectPage: pageNumber
        });
    }

    render() {
        return (
            <div className="row">
                <AdminDepartment pagesLength={this.state.departmentPageLength} activePage={this.state.activeDepartPage}
                    handlePageChange={this.handleDepartmentPageChange.bind(this)}
                />
                <AdminSubject pagesLength={this.state.subjectPageLength} activePage={this.state.activeSubjectPage}
                    handlePageChange={this.handleSubjectPageChange.bind(this)}
                />
            </div>
        );
    }
}

function testSome() {
    alert('some');
}