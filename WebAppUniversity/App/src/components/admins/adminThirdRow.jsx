import React from 'react';
import { connect } from 'react-redux';
import { AdminProgram } from './adminProgram.jsx';
import { buildAdminProgramTable } from '../../helpers/adminHelper';
import { getProgramsData } from '../../actions/adminActions/actions';
import { editProgramData } from '../../actions/adminActions/editActions';

class AdminThirdRow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeProgramPage: 1
        };
    }

    componentDidMount() {
        this.props.onGetDatas();
    }

    componentDidUpdate(prevProps) {
        buildAdminProgramTable(this.props.adminProgramData, this.state.activeProgramPage);
    }

    handleAdminProgramPageChange(pageNumber) {
        this.setState({
            activeProgramPage: pageNumber
        });
    }

    makeProgramModalCancel() {
        $('#programModal').hide();
    }

    render() {
        const { adminProgramPageLength, onEditProgramData } = this.props;
        return (
            <div className="row d-flex">
                <AdminProgram activePage={this.state.activeProgramPage} pagesLength={adminProgramPageLength}
                    handlePageChange={this.handleAdminProgramPageChange.bind(this)}
                    handleButtonCancel={this.makeProgramModalCancel.bind(this)}
                    handleButtonEdit={onEditProgramData}
                />
            </div>
        );
    }
}

let adminProgramData = [];
let adminProgramPageLength = 1;
const mapStateToProps = function (state) {
    if (typeof state.programsReducer[0] !== 'undefined') {
        adminProgramData = state.programsReducer[0];
        adminProgramPageLength = Math.ceil(state.programsReducer[0].length / 7);
    }
    return { adminProgramData, adminProgramPageLength };
};

const mapDispatchToProps = function (dispatch) {
    return {
        onGetDatas: () => dispatch(getProgramsData()),
        onEditProgramData: () => dispatch(editProgramData({
            program_Id: $('#programModalNameId').val(),
            name: $('#programModalNameInput').val(),
            plan: $('#programModalPlanInput').val(),
            description: ' ',
            department_Id: $('#programModalPlanInput').val()
        }, adminProgramData))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminThirdRow);