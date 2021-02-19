import React from 'react';
import AdminEnrollee from './adminEnrollee.jsx';
import AdminAchievement from './adminAchievement.jsx';

var start = 0;
var end = 0;
var counter = 0;

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
        this.buildAdminEnrolleeTable(this.state.adminEnrolleeData);
        this.buildAchievementTable(this.state.achievementData);
    }

    async getInitialAdminDataAsync() {
        try {
            $.ajax({
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

    buildAdminEnrolleeTable(enrolleeArray) {
        start = (this.state.activeAdminEnrolPage - 1) * 7;
        end = this.state.activeAdminEnrolPage * 7;
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
            const divAlert = '#divTableAdminEnrollee';
            const alrt = $('<div></div>').addClass("alert alert-info")
                .append($('<strong></strong>').text('information'));
            alrt.appendTo(divAlert);
        }
    }

    buildAchievementTable(achievementArray) {
        start = (this.state.activeAchievementPage - 1) * 7;
        end = this.state.activeAchievementPage * 7;
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
                            alert(item.name);
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

    render() {
        return (
            <div className="row">
                <AdminEnrollee pagesLength={this.state.adminEnrolleePageLength} activePage={this.state.activeAdminEnrolPage}
                    handlePageChange={this.handleAdminEnrolPageChange.bind(this)}
                />
                <AdminAchievement pagesLength={this.state.achievementPageLength} activePage={this.state.activeAchievementPage}
                    handlePageChange={this.handleAchievementPageChange.bind(this)}
                />
            </div>
        );
    }
}