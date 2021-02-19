import React from 'react';
import Pagination from "react-js-pagination";

function PersonEnrollee(props) {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-9">
                    <table className="table table-dark" id="tableEnrollee" itemProp>
                        <thead>
                            <tr>
                                <td>№</td>
                                <th>Абитуриент</th>
                                <th>Программа</th>
                                <th>Отделение</th>
                            </tr>
                        </thead>
                        <tbody id="bodyTableEnrollee" />
                    </table>
                    <div id="divTableEnrollee" />
                    <Pagination id="pag"
                        activePage={props.activePage}
                        itemsCountPerPage={1}
                        totalItemsCount={props.pagesLength}
                        pageRangeDisplayed={10}
                        onChange={props.handlePageChange}
                        itemClass="page-item"
                        linkClass="page-link"
                    />
                </div>
                <div className="col-3">
                    <form action="">
                        <div className="form-group">
                            <label>Программа</label>
                            <select className="form-control" id="selProgram">
                                <option />
                                <option>Прикладная математика и информатика</option>
                                <option>Математика и компьютерные науки</option>
                                <option>Прикладная механика</option>
                                <option>Мехатроника и робототехника</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Отделение</label>
                            <select className="form-control" id="selDepartment" >
                                <option />
                                <option>Инженерная школа</option>
                                <option>Школа естественных наук</option>
                            </select>
                        </div>
                    </form>
                    <button className="btn btn-primary mt-2 text-light" onClick={props.getEnrollee}>Выбрать</button>
                </div>
            </div>
        </div>
    );
}

export default PersonEnrollee;