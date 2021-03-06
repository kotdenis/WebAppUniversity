﻿import React from 'react'; 
import Pagination from "react-js-pagination";
import PropTypes from 'prop-types';

export const EnrolleeDepartment = ({ activePage, pagesLength, handlePageChange, onClick }) => (
    <div className="row d-flex">
        <div className="col-md-9 col-lg-9">
            <table className="table table-dark" id="tableEnrolleeDepartment" itemProp>
                <thead>
                    <tr>
                        <td>№</td>
                        <th>Абитуриент</th>
                        <th>Программа</th>
                        <th>Отделение</th>
                    </tr>
                </thead>
                <tbody id="bodyTableEnrolleeDepartment" />
            </table>
            <div id="divTableEnrolleeDepartment" />
            <Pagination id="pag"
                activePage={activePage}
                itemsCountPerPage={1}
                totalItemsCount={pagesLength}
                pageRangeDisplayed={10}
                onChange={handlePageChange}
                itemClass="page-item"
                linkClass="page-link"
            />
        </div>
        <div className="col-md-3 col-lg-3">
            <form action="">
                <div className="form-group">
                    <label>Программа</label>
                    <select className="form-control" id="selectProgram" />
                </div>
                <div className="form-group">
                    <label>Отделение</label>
                    <select className="form-control" id="selectDepartment" />
                </div>
            </form>
            <button className="btn btn-primary mt-2 text-light" onClick={onClick}>Выбрать</button>
        </div>
    </div>
);

EnrolleeDepartment.propTypes = {
    activePage: PropTypes.number.isRequired,
    handlePageChange: PropTypes.func.isRequired,
    onClick: PropTypes.func.isRequired,
    pagesLength: PropTypes.number.isRequired
};



