import React from 'react';
import Pagination from "react-js-pagination";

function AdminProgram(props) {
    return (
        <div className="col-6">
            <table className="table table-dark" id="tableAdminProgram" itemProp>
                <thead>
                    <tr>
                        <td>№</td>
                        <th>Программа</th>
                        <th>Отделение</th>
                        <th>План</th>
                        <th>Редактировать</th>
                        <th>Удалить</th>
                    </tr>
                </thead>
                <tbody id="tableAdminProgramBody" />
            </table>
            <div id="divTableAdminProgram" />
            <Pagination
                activePage={props.activePage}
                itemsCountPerPage={1}
                totalItemsCount={props.pagesLength}
                pageRangeDisplayed={10}
                onChange={props.handlePageChange}
                itemClass="page-item"
                linkClass="page-link"
            />
        </div>
    );
}

export default AdminProgram;