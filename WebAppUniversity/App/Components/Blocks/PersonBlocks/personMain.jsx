import React, { useState } from 'react';
//import PersonCommon from './personCommon.jsx';
import PersonUge from './personUGE.jsx';
import PersonEnrollee from './personEnrollee.jsx';
import PersonStatement from './personStatement.jsx';
import './PersonCSS/personblocks.css';

var start = 0;
var end = 0;
var counter = 0;

export default class PersonMain extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            enrolleeData: [],
            activeEnrolleePage: 1,
            enrolleePagesLength: 1,
            activeResultPage: 1,
            resultPagesLength: 1,
            activStatementPage: 1,
            statementPagesLength: 1
        };
    }

    componentDidMount() {
        this.getInitialDataAsync();
    } 

    componentDidUpdate(prevProps) {
        var enrData = this.state.enrolleeData.length > 0 ? this.state.enrolleeData : this.state.data[0];
        this.buildEnrolleeTable(enrData);
        this.buildResultTable(this.state.data[1]);
        this.buildStatementTable(this.state.data[2]);
    }

    
    async getInitialDataAsync() {
        try {
            $.ajax({
                type: 'GET',
                url: 'api/personapi',
                cache: false,
                error: function (jqXHR, textStatus, errorThrown) {
                    alert("Something went wrong!");
                },
                success: (res) => {
                    this.setState({
                        data: res,
                        enrolleePagesLength: Math.ceil(res[0].length / 7),
                        resultPagesLength: Math.ceil(res[1].length / 7),
                        statementPagesLength: Math.ceil(res[1].length / 7)
                    });
                }
            });
        }
        catch (error) { alert("Mistake while loading"); }
    }

    async getConcreteEnrolleeData() {
        const item = {
            number: 1,
            enrolleeName: '',
            programName: $('#selProgram').val(),
            departmentName: $('#selDepartment').val()
        };
        try {
            $.ajax({
                type: 'POST',
                accepts: 'application/json',
                url: 'api/personapi',
                contentType: "application/json",
                data: JSON.stringify(item),
                error: function (jqXHR, textStatus, _errorThrown) {
                    alert("Something went wrong!");
                },
                success: (res) => {
                    this.setState({
                        enrolleeData: res,
                        enrolleePagesLength: Math.ceil(res.length / 7)
                    });
                }
            });
        }
        catch (error) { alert('Mistake while reporting'); }
    }

    
    
    buildEnrolleeTable(enrolleeArray) {
        start = (this.state.activeEnrolleePage - 1) * 7;
        end = this.state.activeEnrolleePage * 7;
        counter = start;
        $('#bodyTableEnrollee').empty();
        const tBody = '#bodyTableEnrollee';
        if (enrolleeArray !== null && enrolleeArray.length > 0) {
            $.each(enrolleeArray.slice(start, end), function (key, item) {
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
            const divAlert = '#divTableEnrollee';
            const alrt = $('<div></div>').addClass("alert alert-info")
                .append($('<strong></strong>').text('information'));
            alrt.appendTo(divAlert);
        }
    }

    
    buildResultTable(resultArray) {
        start = (this.state.activeResultPage - 1) * 7;
        end = this.state.activeResultPage * 7;
        counter = start;
        $('#tableUGEBody').empty();
        const tBody = '#tableUGEBody';
        if (resultArray !== null && resultArray.length > 0) {
            $.each(resultArray.slice(start, end), function (key, item) {
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

    buildStatementTable(statementArray) {
        start = (this.state.activStatementPage - 1) * 7;
        end = this.state.activStatementPage * 7;
        counter = start;
        $('#tableStatementBody').empty();
        const tBody = '#tableStatementBody';
        if (statementArray !== null && statementArray.length > 0) {
            $.each(statementArray.slice(start, end), function (key, item) {
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
            alrt.appendTo(divAlert);
        }
    }

    
    handleEnrolleePageChange(pageNumber) {
        this.setState({
            activeEnrolleePage: pageNumber
        });
    }

    handleResultPageChange(pageNumber) {
        this.setState({
            activeResultPage: pageNumber
        });
    }

    handleStatementPageChange(pageNumber) {
        this.setState({
            activStatementPage: pageNumber
        });
    }

    
    render() {
        
        return (
            <div>
                <PersonEnrollee pagesLength={this.state.enrolleePagesLength} activePage={this.state.activeEnrolleePage}
                    handlePageChange={this.handleEnrolleePageChange.bind(this)} getEnrollee={this.getConcreteEnrolleeData.bind(this)}
                />
                <PersonUge pagesLength={this.state.resultPagesLength} activePage={this.state.activeResultPage}
                    handlePageChange={this.handleResultPageChange.bind(this)}
                />
                <PersonStatement pagesLength={this.state.statementPagesLength} activePage={this.state.activStatementPage}
                    handlePageChange={this.handleStatementPageChange.bind(this)}
                />
            </div>
        );
    }
}