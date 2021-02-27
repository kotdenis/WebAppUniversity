import React from 'react';
import Pagination from "react-js-pagination";
import PropTypes from 'prop-types';

export const Statement = ({ activePage, pagesLength, handlePageChange }) => (
    <div className="row d-flex">
        <div className="col-md-9 col-lg-9">
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
                activePage={activePage}
                itemsCountPerPage={1}
                totalItemsCount={pagesLength}
                pageRangeDisplayed={10}
                onChange={handlePageChange}
                itemClass="page-item"
                linkClass="page-link"
            />
        </div>
    </div>
);

Statement.propTypes = {
    activePage: PropTypes.number.isRequired,
    handlePageChange: PropTypes.func.isRequired,
    pagesLength: PropTypes.number.isRequired
};