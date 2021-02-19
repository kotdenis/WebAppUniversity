import React from 'react';
import Pagination from "react-js-pagination";


function PersonUge(props) {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-9">
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


export default PersonUge;
