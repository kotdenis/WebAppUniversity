import React from 'react';
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
        </div>
    );
}

export default AdminDepartment;