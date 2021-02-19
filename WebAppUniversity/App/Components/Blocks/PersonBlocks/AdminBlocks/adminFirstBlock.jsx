import React from 'react';
import AdminDepartment from './adminDepartment.jsx';
import AdminSubject from './adminSubject.jsx';

export default class AdminFirstBlock extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="row">
                <AdminDepartment />
                <AdminSubject />
            </div>
        );
    }
}