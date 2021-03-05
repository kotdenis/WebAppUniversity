import React from 'react';
import { connect } from 'react-redux';
import { AdminSubject } from './adminSubject.jsx';
import { AdminDepartment } from './adminDepartment.jsx';
import { buildAdminDepartmentTable, buildAdminSubjectTable } from '../../helpers/adminHelper';
import { getFirstAdminData } from '../../actions/adminActions/actions';
import { editDepartmentData, editSubjectData } from '../../actions/adminActions/editActions';

class AdminFirstRow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeDepartPage: 1,
            activeSubjectPage: 1
        };
    }

    componentDidMount() {
        this.props.onGetDatas();
    }

    componentDidUpdate(prevProps) {
        buildAdminDepartmentTable(this.props.departmentData, this.state.activeDepartPage);
        buildAdminSubjectTable(this.props.subjectData, this.state.activeSubjectPage);
    }

    handleDepartmentPageChange(pageNumber) {
        this.setState({
            activeDepartPage: pageNumber
        });
    }

    handleSubjectPageChange(pageNumber) {
        this.setState({
            activeSubjectPage: pageNumber
        });
    }

    makeDepartmentModalCancel() {
        $('#adminDepartmentModal').hide();
    }

    makeSubjectModalCancel() {
        $('#subjectAdminModal').hide();
    }

    render() {
        const { departmentPageLength, subjectPageLength, onEditDepartmentData, onEditSubjectData } = this.props;
        return (
            <div className="row d-flex">
                <AdminDepartment activePage={this.state.activeDepartPage} pagesLength={departmentPageLength}
                    handlePageChange={this.handleDepartmentPageChange.bind(this)}
                    handleButtonCancel={this.makeDepartmentModalCancel.bind(this)}
                    handleButtonEdit={onEditDepartmentData}
                />
                <AdminSubject activePage={this.state.activeSubjectPage} pagesLength={subjectPageLength}
                    handlePageChange={this.handleSubjectPageChange.bind(this)}
                    handleButtonCancel={this.makeSubjectModalCancel.bind(this)}
                    handleButtonEdit={onEditSubjectData}
                />
            </div>
        );
    }
}

let departmentData = [];
let subjectData = [];
let departmentPageLength = 1;
let subjectPageLength = 1;
const mapStateToProps = function (state) {
    if (typeof state.rowOne[0] !== 'undefined') {
        departmentData = state.rowOne[0][0];
        subjectData = state.rowOne[0][1];
        departmentPageLength = Math.ceil(state.rowOne[0][0].length / 7);
        subjectPageLength = Math.ceil(state.rowOne[0][1].length / 7);
    }
    return { departmentData, subjectData, departmentPageLength, subjectPageLength };
};


const mapDispatchToProps = function (dispatch) {
    return {
        onGetDatas: () => dispatch(getFirstAdminData()),
        onEditDepartmentData: () => dispatch(editDepartmentData({
            department_Id: $('#departmentModalId').val(),
            name: $('#departmentModalInput').val(),
            description: ''
        }, departmentData)),
        onEditSubjectData: () => dispatch(editSubjectData({
            subject_Id: $('#subjectModalId').val(),
            name: $('#subjectAdminModalInput').val()
        }, subjectData))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminFirstRow);