import React from 'react';
import AdminProgram from './adminProgram.jsx';

var start = 0;
var end = 0;
var counter = 0;
var programId = 0;
var department_Id = 0;

export default class AdminThirdBlock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            adminProgramData: [],
            activeProgramPage: 1,
            adminProgramPageLength: 1
        };
    }

    componentDidMount() {
        this.getInitialThirdAdminDataAsync();
    }

    componentDidUpdate(prevProps) {
        buildAdminProgramTable(this.state.adminProgramData, this.state.activeProgramPage);
    }

    async getInitialThirdAdminDataAsync() {
        try {
            await $.ajax({
                type: 'GET',
                url: 'api/adminApi/getThirdBaseModelsAsync',
                cache: false,
                error: function (jqXHR, textStatus, errorThrown) {
                    alert("Something went wrong!");
                },
                success: (res) => {
                    this.setState({
                        adminProgramData: res,
                        adminProgramPageLength: Math.ceil(res.length / 7)
                    });
                }
            });
        }
        catch (error) { alert("Mistake while loading"); }
    }

    async editProgramValuesAsync() {
        const programItem = {
            program_Id: programId,
            name: $('#programModalNameInput').val(),
            plan: $('#programModalPlanInput').val(),
            description: '',
            department_Id: department_Id
        };
        await $.ajax({
            url: 'api/adminApi/editProgramsModelAsync/' + programId,
            type: 'PUT',
            accepts: 'application/json',
            contentType: 'application/json',
            data: JSON.stringify(programItem),
            success: function () {
                getUpdatedDataAfterChange();
                alert('Изменено!');
                $('#programModal').hide();
                this.setState({
                    adminProgramData: updatedData
                });
            }
        });
    }

    handleAdminProgramPageChange(pageNumber) {
        this.setState({
            activeProgramPage: pageNumber
        });
    }

    makeProgramModalCancel() {
        $('#programModal').hide();
    }

    render() {
        return (
            <div className="row">
                <AdminProgram pagesLength={this.state.adminProgramPageLength} activePage={this.state.activeProgramPage}
                    handlePageChange={this.handleAdminProgramPageChange.bind(this)}
                    handleButtonCancel={this.makeProgramModalCancel.bind(this)}
                    handleButtonEdit={this.editProgramValuesAsync.bind(this)}
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
            url: 'api/adminApi/getThirdBaseModelsAsync',
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

function buildAdminProgramTable(programArray, activeProgramPage) {
    start = (activeProgramPage - 1) * 7;
    end = activeProgramPage * 7;
    counter = start;
    $('#tableAdminProgramBody').empty();
    const tBody = '#tableAdminProgramBody';
    if (programArray !== null && programArray.length > 0) {
        $.each(programArray.slice(start, end), function (key, item) {
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