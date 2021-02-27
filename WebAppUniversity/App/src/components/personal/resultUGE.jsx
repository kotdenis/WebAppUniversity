import React from 'react';
import Pagination from "react-js-pagination";
import PropTypes from 'prop-types';

export const ResultUge = ({ activePage, pagesLength, handlePageChange }) => (
    <div className="row d-flex">
        <div className="col-md-9 col-lg-9">
            <table className="table table-dark" id="tableUGE" itemProp>
                <thead>
                    <tr>
                        <td>№</td>
                        <th>Предмет</th>
                        <th>Количество</th>
                        <th>Максимум</th>
                        <th>Минимум</th>
                        <th>Среднее</th>
                    </tr>
                </thead>
                <tbody id="tableUGEBody" />
            </table>
            <div id="divTableUGE" />
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

ResultUge.propTypes = {
    activePage: PropTypes.number.isRequired,
    handlePageChange: PropTypes.func.isRequired,
    pagesLength: PropTypes.number.isRequired
};
