import React from 'react';
import Pagination from "react-js-pagination";

function AdminSubject(props) {
    return (
        <div className="col-6">
            <table className="table table-dark" id="tableAdminSubject" itemProp>
                <thead>
                    <tr>
                        <td>№</td>
                        <th>Предмет</th>
                        <th>Редактировать</th>
                        <th>Удалить</th>
                    </tr>
                </thead>
                <tbody id="tableSubjectBody" />
            </table>
            <div id="divTableSubject" />
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

export default AdminSubject;