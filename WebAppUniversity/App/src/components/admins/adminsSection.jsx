import React from 'react';
import AdminFirstRow from './adminFirstRow.jsx';
import AdminSecondRow from './adminSecondRow.jsx';
import AdminThirdRow from './adminThirdRow.jsx';

export default class AdminSection extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className="col-md-10 col-lg-10">
                <AdminFirstRow />
                <AdminSecondRow />
                <AdminThirdRow />
            </section>
        );
    }
}