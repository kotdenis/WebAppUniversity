import React from 'react';
import AdminFirstBlock from './AdminBlocks/adminFirstBlock.jsx';
import AdminSecondBlock from './AdminBlocks/adminSecondBlock.jsx';
import AdminThirdBlock from './AdminBlocks/adminThirdBlock.jsx';

export default class PersonAdmin extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <AdminFirstBlock />
                <AdminSecondBlock />
                <AdminThirdBlock />
            </div>
        );
    }
}