import React from 'react';
import AdminDepartment from './adminDepartment.jsx';
import AdminSubject from './adminSubject.jsx';

var start = 0;
var end = 0;
var counter = 0;
var departmentId = 0;
var subjectId = 0;

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
        buildDepartmentTable(this.state.departmentData, this.state.activeDepartPage);
        buildSubjectTable(this.state.subjectData, this.state.activeSubjectPage);
    }

    

    async getInitialAdminDataAsync() {
        try {
            await $.ajax({
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
    

    async editDepartmentValuesAsync() {
        const departmentItem = {
            department_Id: departmentId,
            name: $('#departmentModalInput').val(),
            description: ''
        };
        await $.ajax({
            url: 'api/adminApi/editDepartmentModelAsync/' + departmentId,
            type: 'PUT',
            accepts: 'application/json',
            contentType: 'application/json',
            data: JSON.stringify(departmentItem),
            success: function () {
                getUpdatedDataAfterChange();
                alert('Изменено!');
                $('#departmentModal').hide();
                this.setState({
                    departmentData: updatedData[0]
                });
            }
        });
    }

    async editSubjecttValuesAsync() {
        const subjectItem = {
            subject_Id: subjectId,
            name: $('#subjectModalInput').val()
        };
        await $.ajax({
            url: 'api/adminApi/editSubjectModelAsync/' + subjectId,
            type: 'PUT',
            accepts: 'application/json',
            contentType: 'application/json',
            data: JSON.stringify(subjectItem),
            success: function () {
                getUpdatedDataAfterChange();
                alert('Изменено!');
                $('#subjectModal').hide();
                this.setState({
                    subjectData: updatedData[1]
                });
            }
        });
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

    makeDepartmentModalCancel() {
        $('#departmentModal').hide();
    }

    makeSubjectModalCancel() {
        $('#subjectModal').hide();
    }

    render() {
        return (
            <div className="row">
                <AdminDepartment pagesLength={this.state.departmentPageLength} activePage={this.state.activeDepartPage}
                    handlePageChange={this.handleDepartmentPageChange.bind(this)}
                    handleButtonCancel={this.makeDepartmentModalCancel.bind(this)}
                    handleButtonEdit={this.editDepartmentValuesAsync.bind(this)}
                />
                <AdminSubject pagesLength={this.state.subjectPageLength} activePage={this.state.activeSubjectPage}
                    handlePageChange={this.handleSubjectPageChange.bind(this)}
                    handleButtonCancel={this.makeSubjectModalCancel.bind(this)}
                    handleButtonEdit={this.editSubjecttValuesAsync.bind(this)}
                />
            </div>
        );
    }
}

var updatedData = [];
async function getUpdatedDataAfterChange() {
    try {
       await $.ajax({
            type: 'GET',
            url: 'api/adminApi/getBaseModelsAsync',
            cache: false,
            error: function (jqXHR, textStatus, errorThrown) {
                alert("Something went wrong!");
            },
            success: (res) => {
                updatedData = res;
            }
        });
    }
    catch (error) { alert("Mistake while loading"); }
}


function buildDepartmentTable(departmentArry, activeDepartPage) {
    start = (activeDepartPage - 1) * 7;
    end = activeDepartPage * 7;
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
                        $('#departmentModal').show();
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
        const divAlert = '#divTableDepart';
        const alrt = $('<div></div>').addClass("alert alert-info")
            .append($('<strong></strong>').text('information'));
        alrt.appendTo(divAlert);
    }
}

function buildSubjectTable(subjectArray, activeSubjectPage) {
    start = (activeSubjectPage - 1) * 7;
    end = activeSubjectPage * 7;
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
                        $('#subjectModal').show();
                        $('#subjectModalInput').val(item.name);
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
        const divAlert = '#divTableSubject';
        const alrt = $('<div></div>').addClass("alert alert-info")
            .append($('<strong></strong>').text('information'));
        alrt.appendTo(divAlert);
    }
}
