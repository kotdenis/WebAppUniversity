import React from 'react';
import Pagination from "react-js-pagination";

function PersonStatement(props) {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-9">
                    <table className="table table-dark" id="tableStatement" itemProp>
                        <thead>
                            <tr>
                                <td>№</td>
                                <th>Отделение</th>
                                <th>Программа</th>
                                <th>План</th>
                                <th>Количество</th>
                                <th>Конкурс</th>
                            </tr>
                        </thead>
                        <tbody id="tableStatementBody" />
                    </table>
                    <div id="divTableStatement" />
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
            </div>
        </div>
    );
}

export default PersonStatement;