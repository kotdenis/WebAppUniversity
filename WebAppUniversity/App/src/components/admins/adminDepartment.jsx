import React from 'react';
import Pagination from "react-js-pagination";
import PropTypes from 'prop-types';

export const AdminDepartment = ({ activePage, pagesLength, handlePageChange, handleButtonCancel, handleButtonEdit }) => (
    <div className="col-md-6 col-lg=6">
        <table className="table table-dark" id="tableAdminDepart" itemProp>
            <thead>
                <tr>
                    <td>№</td>
                    <th>Отделение</th>
                    <th>Редактировать</th>
                    <th>Удалить</th>
                </tr>
            </thead>
            <tbody id="tableAdminDepartmentBody" />
        </table>
        <div id="divTableAdminDepartment" />
        <Pagination
            activePage={activePage}
            itemsCountPerPage={1}
            totalItemsCount={pagesLength}
            pageRangeDisplayed={10}
            onChange={handlePageChange}
            itemClass="page-item"
            linkClass="page-link"
        />
        <div className="modal" id="adminDepartmentModal">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title">Редактирование</h4>
                        <button type="button" className="close" data-dismiss="modal" onClick={handleButtonCancel}>&times;</button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="form-group">
                                <label>Наименование</label>
                                <input type="text" className="form-control" id="departmentModalInput" />
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-success" data-dismiss="modal"
                            onClick={handleButtonEdit}
                        >Изменить</button>
                        <button type="button" className="btn btn-secondary" data-dismiss="modal"
                            onClick={handleButtonCancel}
                        >Отмена</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

AdminDepartment.propTypes = {
    activePage: PropTypes.number.isRequired,
    handleButtonCancel: PropTypes.func.isRequired,
    handleButtonEdit: PropTypes.func.isRequired,
    handlePageChange: PropTypes.func.isRequired,
    pagesLength: PropTypes.number.isRequired
};

