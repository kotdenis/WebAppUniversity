import React from 'react';
import Pagination from "react-js-pagination";


export default class PersonCommon extends React.Component {
    constructor() {
        super();
        this.state = {
            data: [],
            activePage: 1
        };
    }

    handlePageChange(pageNumber) {
        this.setState({ activePage: pageNumber });
    }

    
    getFullEnrolleeData() {
        $.ajax({
            type: 'GET',
            url: 'api/personapi',
            cache: false,
            error: function (jqXHR, textStatus, errorThrown) {
                alert("Something went wrong!");
            },
            success: (res) => {
                this.setState({
                    data: res
                });
            }
        });
    }

    buildRequiredTable() {
        let k = 0;
        let start = (this.state.activePage - 1) * 7;
        let end = this.state.activePage * 7;
        let counter = start + 1;
        $('#tableCommonBody').empty();
        const tBody = '#tableCommonBody';
        $.each(this.state.data.slice(start, end), function (key, item) {
            k = counter++;
            const tr = $("<tr></tr>")
                .append($('<td></td>').text(k))
                .append($('<td></td>').text(item.enrolleeName))
                .append($('<td></td>').text(item.programName))
                .append($('<td></td>').text(item.departmentName));
            tr.appendTo(tBody);
        });
    }

    
    

    render() {
        if (this.state.activePage === 1) {
            this.getFullEnrolleeData();
        }
        this.buildRequiredTable();
            
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-9">
                        <table className="table table-dark" id="tableCommon" itemProp>
                            <thead>
                                <tr>
                                    <td>№</td>
                                    <th>Абитуриент</th>
                                    <th>Программа</th>
                                    <th>Отделение</th>
                                </tr>
                            </thead>
                            <tbody id="tableCommonBody" />
                        </table>
                        <Pagination
                            activePage={this.state.activePage}
                            itemsCountPerPage={1}
                            totalItemsCount={6}
                            pageRangeDisplayed={5}
                            onChange={this.handlePageChange.bind(this)}
                            itemClass="page-item"
                            linkClass="page-link"
                        />
                        
                    </div>
                    <div className="col-3">
                        <form action="">
                            <div className="form-group">
                                <label>Абитуриент</label>
                                <input type="text" className="form-control" id="abiturient" />
                            </div>
                            <div className="form-group">
                                <label>Программа</label>
                                <select className="form-control" id="selDepartment">
                                    <option>Прикладная математика и информатика</option>
                                    <option>Математика и компьютерные науки</option>
                                    <option>Прикладная механика</option>
                                    <option>Мехатроника и робототехника</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Отделение</label>
                                <select className="form-control" id="selProgram" >
                                    <option>Инженерная школа</option>
                                    <option>Школа естественных наук</option>
                                </select>
                            </div>
                        </form>
                        <button className="btn btn-primary mt-2 text-light" id="filterButton">Выбрать</button>
                    </div>
                </div>
            </div>
        );
    }
}





