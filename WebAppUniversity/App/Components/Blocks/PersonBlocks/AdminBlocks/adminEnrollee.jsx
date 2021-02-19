import React from 'react';
import Pagination from "react-js-pagination";

function AdminEnrollee(props) {
    return (
        <div className="col-6">
            <table className="table table-dark" id="tableAdminEnrollee" itemProp>
                <thead>
                    <tr>
                        <td>№</td>
                        <th>Абитуриент</th>
                        <th>Редактировать</th>
                        <th>Удалить</th>
                    </tr>
                </thead>
                <tbody id="tableAdminEnrolleeBody" />
            </table>
            <div id="divTableAdminEnrollee" />
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

export default AdminEnrollee;