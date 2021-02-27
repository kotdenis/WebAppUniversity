import React from 'react';
import AdminEnrollee from './adminEnrollee.jsx';
import AdminAchievement from './adminAchievement.jsx';

var start = 0;
var end = 0;
var counter = 0;
var enrolleeId = 0;
var achievementId = 0;

export default class AdminSecondBlock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            adminEnrolleeData: [],
            achievementData: [],
            activeAdminEnrolPage: 1,
            activeAchievementPage: 1,
            adminEnrolleePageLength: 1,
            achievementPageLength: 1
        };
    }

    componentDidMount() {
        this.getInitialAdminDataAsync();
    }

    componentDidUpdate(prevProps) {
        buildAdminEnrolleeTable(this.state.adminEnrolleeData, this.state.activeAdminEnrolPage);
        buildAchievementTable(this.state.achievementData, this.state.activeAchievementPage);
    }

    async getInitialAdminDataAsync() {
        try {
            await $.ajax({
                type: 'GET',
                url: 'api/adminApi/getSecondBaseModelsAsync',
                cache: false,
                error: function (jqXHR, textStatus, errorThrown) {
                    alert("Something went wrong!");
                },
                success: (res) => {
                    this.setState({
                        adminEnrolleeData: res[0],
                        achievementData: res[1],
                        adminEnrolleePageLength: Math.ceil(res[0].length / 7),
                        achievementPageLength: Math.ceil(res[1].length / 7)
                    });
                }
            });
        }
        catch (error) { alert("Mistake while loading"); }
    }

    async editEnrolleeValuesAsync() {
        const enrolleeItem = {
            enrollee_Id: enrolleeId,
            name: $('#enrolleeModalInput').val()
        };
        await $.ajax({
            url: 'api/adminApi/editEnrolleeModelAsync/' + enrolleeId,
            type: 'PUT',
            accepts: 'application/json',
            contentType: 'application/json',
            data: JSON.stringify(enrolleeItem),
            success: function () {
                getUpdatedDataAfterChange();
                alert('Изменено!');
                $('#enrolleeModal').hide();
                this.setState({
                    adminEnrolleeData: updatedData[0]
                });
            }
        });
    }

    async editAchievementValuesAsync() {
        const achievementItem = {
            achievement_Id: achievementId,
            name: $('#achievementModalInput').val()
        };
        await $.ajax({
            url: 'api/adminApi/editAchievementModelAsync/' + achievementId,
            type: 'PUT',
            accepts: 'application/json',
            contentType: 'application/json',
            data: JSON.stringify(achievementItem),
            success: function () {
                getUpdatedDataAfterChange();
                alert('Изменено!');
                $('#achievementModal').hide();
                this.setState({
                    achievementData: updatedData[1]
                });
            }
        });
    }

    handleAdminEnrolPageChange(pageNumber) {
        this.setState({
            activeAdminEnrolPage: pageNumber
        });
    }

    handleAchievementPageChange(pageNumber) {
        this.setState({
            activeAchievementPage: pageNumber
        });
    }

    makeEnrolleeModalCancel() {
        $('#enrolleeModal').hide();
    }

    makeAchievementModalCancel() {
        $('#achievementModal').hide();
    }

    render() {
        return (
            <div className="row">
                <AdminEnrollee pagesLength={this.state.adminEnrolleePageLength} activePage={this.state.activeAdminEnrolPage}
                    handlePageChange={this.handleAdminEnrolPageChange.bind(this)}
                    handleButtonCancel={this.makeEnrolleeModalCancel.bind(this)}
                    handleButtonEdit={this.editEnrolleeValuesAsync.bind(this)}
                />
                <AdminAchievement pagesLength={this.state.achievementPageLength} activePage={this.state.activeAchievementPage}
                    handlePageChange={this.handleAchievementPageChange.bind(this)}
                    handleButtonCancel={this.makeAchievementModalCancel.bind(this)}
                    handleButtonEdit={this.editAchievementValuesAsync.bind(this)}
                />
            </div>
        );
    }
}

var updatedData = [];
function getUpdatedDataAfterChange() {
    try {
        $.ajax({
            type: 'GET',
            url: 'api/adminApi/getSecondBaseModelsAsync',
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

function buildAdminEnrolleeTable(enrolleeArray, activeAdminEnrolPage) {
    start = (activeAdminEnrolPage - 1) * 7;
    end = activeAdminEnrolPage * 7;
    counter = start;
    $('#tableAdminEnrolleeBody').empty();
    const tBody = '#tableAdminEnrolleeBody';
    if (enrolleeArray !== null && enrolleeArray.length > 0) {
        $.each(enrolleeArray.slice(start, end), function (key, item) {
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

function buildAchievementTable(achievementArray, activeAchievementPage) {
    start = (activeAchievementPage - 1) * 7;
    end = activeAchievementPage * 7;
    counter = start;
    $('#tableAdminAchievementBody').empty();
    const tBody = '#tableAdminAchievementBody';
    if (achievementArray !== null && achievementArray.length > 0) {
        $.each(achievementArray.slice(start, end), function (key, item) {
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