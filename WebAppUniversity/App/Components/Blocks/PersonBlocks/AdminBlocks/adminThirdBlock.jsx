import React from 'react';
import AdminProgram from './adminProgram.jsx';

var start = 0;
var end = 0;
var counter = 0;

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
        this.buildAdminProgramTable(this.state.adminProgramData);
    }

    async getInitialThirdAdminDataAsync() {
        try {
            $.ajax({
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

    buildAdminProgramTable(programArray) {
        start = (this.state.activeProgramPage - 1) * 7;
        end = this.state.activeProgramPage * 7;
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
            const divAlert = '#divTableAdminProgram';
            const alrt = $('<div></div>').addClass("alert alert-info")
                .append($('<strong></strong>').text('information'));
            alrt.appendTo(divAlert);
        }
    }

    handleAdminProgramPageChange(pageNumber) {
        this.setState({
            activeProgramPage: pageNumber
        });
    }

    render() {
        return (
            <div className="row">
                <AdminProgram pagesLength={this.state.adminProgramPageLength} activePage={this.state.activeProgramPage}
                    handlePageChange={this.handleAdminProgramPageChange.bind(this)}
                />
            </div>
        );
    }
}