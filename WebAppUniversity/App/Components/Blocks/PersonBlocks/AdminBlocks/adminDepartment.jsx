﻿import React from 'react';
import Pagination from "react-js-pagination";

function AdminDepartment(props) {
    return (
        <div className="col-6">
            <table className="table table-dark" id="tableAdminDepart" itemProp>
                <thead>
                    <tr>
                        <td>№</td>
                        <th>Отделение</th>
                        <th>Редактировать</th>
                        <th>Удалить</th>
                    </tr>
                </thead>
                <tbody id="tableDepartBody" />
            </table>
            <div id="divTableDepart" />
            <Pagination
                activePage={props.activePage}
                itemsCountPerPage={1}
                totalItemsCount={props.pagesLength}
                pageRangeDisplayed={10}
                onChange={props.handlePageChange}
                itemClass="page-item"
                linkClass="page-link"
            />
            <div className="modal" id="departmentModal">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">Редактирование</h4>
                            <button type="button" className="close" data-dismiss="modal" onClick={props.handleButtonCancel}>&times;</button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="form-group">
                                    <label>Наименование</label>
                                    <input type="text" className="form-control" id="departmentModalInput"/>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-success" data-dismiss="modal"
                                onClick={props.handleButtonEdit}
                            >Изменить</button>
                            <button type="button" className="btn btn-secondary" data-dismiss="modal"
                                onClick={props.handleButtonCancel}
                            >Отмена</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminDepartment;