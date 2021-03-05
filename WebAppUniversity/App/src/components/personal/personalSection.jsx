import React from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import { connect } from 'react-redux';
import { EnrolleeDepartment } from './enrolleeDepartment.jsx';
import { ResultUge } from './resultUGE.jsx';
import { Statement } from './statement.jsx';
import {
    buildEnrolleeDepartTable, buildResultUgeTable,
    buildStatementTable, fillSelectWithOptions
} from '../../helpers/personalHelpers';
import { getPersonalFetch, getDataByProgramName } from '../../actions/personalActions/actions';

class PersonalSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeEnrolleePage: 1,
            activeResultPage: 1,
            activStatementPage: 1
        };
    }

    componentDidMount() {
        this.props.onGetDatas();
    }

    componentDidUpdate(prevProps) {
        buildEnrolleeDepartTable(this.props.progEnrData, this.state.activeEnrolleePage);
        buildResultUgeTable(this.props.resultUgeData, this.state.activeResultPage);
        buildStatementTable(this.props.statementData, this.state.activStatementPage);
        fillSelectWithOptions(this.props.progEnrConcrete);
    }

    handleEnrolleePageChange(pageNumber) {
        this.setState({
            activeEnrolleePage: pageNumber
        });
    }

    handleResultPageChange(pageNumber) {
        this.setState({
            activeResultPage: pageNumber
        });
    }

    handleStatementPageChange(pageNumber) {
        this.setState({
            activStatementPage: pageNumber
        });
    }

    render() {
        const { pageEnrDepartLength, pageResultLength, pageStatementLength, onGetConcreteDatas } = this.props;
        return (
            <section className="col-md-10 col-lg-10">
                <EnrolleeDepartment pagesLength={pageEnrDepartLength}
                    activePage={this.state.activeEnrolleePage}
                    handlePageChange={this.handleEnrolleePageChange.bind(this)}
                    onClick={onGetConcreteDatas}
                />
                <ResultUge pagesLength={pageResultLength} activePage={this.state.activeResultPage}
                    handlePageChange={this.handleResultPageChange.bind(this)}
                />
                <Statement pagesLength={pageStatementLength} activePage={this.state.activStatementPage}
                    handlePageChange={this.handleStatementPageChange.bind(this)}
                />
            </section>
        );
    }
}

let progEnrData = [];
let resultUgeData = [];
let statementData = [];
let progEnrConcrete = [];
let pageEnrDepartLength = 1;
let pageResultLength = 1;
let pageStatementLength = 1;

const mapStateToProps = function (state) {
    if (typeof state.personalReducer[0] !== 'undefined' && state.personalReducer[0].length > 2) {
        progEnrConcrete = state.personalReducer[0][0];
        progEnrData = state.personalReducer[0][0];
        resultUgeData = state.personalReducer[0][1];
        statementData = state.personalReducer[0][2];
        pageEnrDepartLength = Math.ceil(state.personalReducer[0][0].length / 7);
        pageResultLength = Math.ceil(state.personalReducer[0][1].length / 7);
        pageStatementLength = Math.ceil(state.personalReducer[0][2].length / 7);
    }
    else if (typeof state.personalReducer !== 'undefined') {
        progEnrData = state.personalReducer;
        pageEnrDepartLength = Math.ceil(progEnrData.length / 7);
    }
    return {
        pageEnrDepartLength,
        pageResultLength,
        pageStatementLength,
        progEnrData,
        resultUgeData,
        statementData,
        progEnrConcrete
    };
};

const mapDispatchToProps = function (dispatch) {
    return {
        onGetDatas: () => dispatch(getPersonalFetch()),
        onGetConcreteDatas: () => dispatch(getDataByProgramName(progEnrConcrete, $('#selectProgram').val(), $('#selectDepartment').val()))
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(PersonalSection);