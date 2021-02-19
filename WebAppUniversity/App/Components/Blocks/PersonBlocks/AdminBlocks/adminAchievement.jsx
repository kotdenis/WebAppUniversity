import React from 'react';
import Pagination from "react-js-pagination";

function AdminAchievement(props) {
    return (
        <div className="col-6">
            <table className="table table-dark" id="tableAdminAchievement" itemProp>
                <thead>
                    <tr>
                        <td>№</td>
                        <th>Достижения</th>
                        <th>Редактировать</th>
                        <th>Удалить</th>
                    </tr>
                </thead>
                <tbody id="tableAdminAchievementBody" />
            </table>
            <div id="divTableAdminAchievement" />
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

export default AdminAchievement;