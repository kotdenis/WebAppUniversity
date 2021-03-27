import React from 'react';
import { connect } from 'react-redux';
import { AdminAchievement } from './adminAchievement.jsx';
import { AdminEnrollee } from './adminEnrollee.jsx';
import { buildAchievementTable, buildAdminEnrolleeTable } from '../../helpers/adminHelper';
import { getAchievementData, getEnrolleeData } from '../../actions/adminActions/actions';
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
        this.props.onGetEnrollee();
        this.props.onGetAchievement();
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
    if (typeof state.enrolleeReducer[0] !== 'undefined') {
        enrolleeData = state.enrolleeReducer[0];
        adminEnrolleePageLength = Math.ceil(state.enrolleeReducer[0].length / 7);
        if (state.enrolleeReducer[0].length > 0) {
            $('#divTableAdminEnrollee').hide();
        }
    }
    if (typeof state.achievementReducer[0] !== 'undefined') {
        achievementData = state.achievementReducer[0];
        achievementPageLength = Math.ceil(state.achievementReducer[0].length / 7);
        if (state.achievementReducer[0].length > 0) {
            $('#divTableAdminAchievement').hide();
        }
    }
    return { enrolleeData, achievementData, adminEnrolleePageLength, achievementPageLength };
};

const mapDispatchToProps = function (dispatch) {
    return {
        onGetEnrollee: () => dispatch(getEnrolleeData()),
        onGetAchievement: () => dispatch(getAchievementData()),
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