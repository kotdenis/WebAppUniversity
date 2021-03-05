import React from 'react';
import { connect } from 'react-redux';
import { AdminAchievement } from './adminAchievement.jsx';
import { AdminEnrollee } from './adminEnrollee.jsx';
import { buildAchievementTable, buildAdminEnrolleeTable } from '../../helpers/adminHelper';
import { getSecondAdminData } from '../../actions/adminActions/actions';
import { editAchievementData, editEnrolleeData } from '../../actions/adminActions/editActions';

class AdminSecondRow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeAdminEnrolPage: 1,
            activeAchievementPage: 1
        };
    }

    componentDidMount() {
        this.props.onGetDatas();
    }

    componentDidUpdate(prevProps) {
        buildAchievementTable(this.props.achievementData, this.state.activeAchievementPage);
        buildAdminEnrolleeTable(this.props.enrolleeData, this.state.activeAdminEnrolPage);
    }

    handleAdminEnrolPageChange(pageNumber) {
        this.setState({
            activeAdminEnrolPage: pageNumber
        });
    }

    handleAchievementPageChange(pageNumber) {
        this.setState({
            activeAchievementPage: pageNumber
        });
    }

    makeEnrolleeModalCancel() {
        $('#enrolleeModal').hide();
    }

    makeAchievementModalCancel() {
        $('#achievementModal').hide();
    }

    render() {
        const { achievementPageLength, adminEnrolleePageLength, onEditAchievementData, onEditEnrolleeData } = this.props;
        return (
            <div className="row d-flex">
                <AdminAchievement activePage={this.state.activeAchievementPage} pagesLength={achievementPageLength}
                    handlePageChange={this.handleAchievementPageChange.bind(this)}
                    handleButtonCancel={this.makeAchievementModalCancel.bind(this)}
                    handleButtonEdit={onEditAchievementData}
                />
                <AdminEnrollee activePage={this.state.activeAdminEnrolPage} pagesLength={adminEnrolleePageLength}
                    handlePageChange={this.handleAdminEnrolPageChange.bind(this)}
                    handleButtonCancel={this.makeEnrolleeModalCancel.bind(this)}
                    handleButtonEdit={onEditEnrolleeData}
                />
            </div>
        );
    }
}

let enrolleeData = [];
let achievementData = [];
let adminEnrolleePageLength = 1;
let achievementPageLength = 1;
const mapStateToProps = function (state) {
    if (typeof state.rowTwo[0] !== 'undefined') {
        enrolleeData = state.rowTwo[0][0];
        achievementData = state.rowTwo[0][1];
        adminEnrolleePageLength = Math.ceil(state.rowTwo[0][0].length / 7);
        achievementPageLength = Math.ceil(state.rowTwo[0][1].length / 7);
    }
    return { enrolleeData, achievementData, adminEnrolleePageLength, achievementPageLength };
};

const mapDispatchToProps = function (dispatch) {
    return {
        onGetDatas: () => dispatch(getSecondAdminData()),
        onEditAchievementData: () => dispatch(editAchievementData({
            achievement_Id: $('#achievementModalId').val(),
            name: $('#achievementModalInput').val()
        }, achievementData)),
        onEditEnrolleeData: () => dispatch(editEnrolleeData({
            enrollee_Id: $('#enrolleeModalId').val(),
            name: $('#enrolleeModalInput').val()
        }, enrolleeData))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminSecondRow);