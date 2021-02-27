import React from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { EnrolleeDepartment } from './enrolleeDepartment.jsx';
import { ResultUge } from './resultUGE.jsx';
import { Statement } from './statement.jsx';
import { buildEnrolleeDepartTable, buildResultUgeTable, buildStatementTable } from  '../helpers/personalHelpers';
import { getPersonalFetch } from '../../actions/personalActions/actions';


class PersanolMain extends React.Component {
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
        buildEnrolleeDepartTable(this.props.datas, this.state.activeEnrolleePage);
        buildResultUgeTable(this.props.datas, this.state.activeResultPage);
        buildStatementTable(this.props.datas, this.state.activStatementPage);
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
        const { datas, pageEnrDepartLength, pageResultLength, pageStatementLength } = this.props;
        return (
            <div className="row d-flex">
                <aside className="col-md-2 col-lg-2">
                    <nav>
                        <ul style={{ fontWeight: "bold" }}>
                            <li>
                                <Link to='/'>Общая</Link>
                            </li>
                            <li>
                                <Link to='/blocktest'>Управление</Link>
                            </li>
                        </ul>
                    </nav>
                </aside>
                <section className="col-md-10 col-lg-10">
                    <div>
                        <EnrolleeDepartment datas={datas} pagesLength={pageEnrDepartLength}
                            activePage={this.state.activeEnrolleePage}
                            handlePageChange={this.handleEnrolleePageChange.bind(this)}
                        />
                        <ResultUge pagesLength={pageResultLength} activePage={this.state.activeResultPage}
                            handlePageChange={this.handleResultPageChange.bind(this)}
                        />
                        <Statement pagesLength={pageStatementLength} activePage={this.state.activStatementPage}
                            handlePageChange={this.handleStatementPageChange.bind(this)}
                        />
                    </div>
                </section>
            </div>
        );
    }
}


const mapStateToProps = function (state) {
    let pageEnrDepartLength = 1;
    let pageResultLength = 1;
    let pageStatementLength = 1;
    if (typeof state[0] !== 'undefined') {
        pageEnrDepartLength = Math.ceil(state[0][0].length / 7);
        pageResultLength = Math.ceil(state[0][1].length / 7);
        pageStatementLength = Math.ceil(state[0][2].length / 7);
    }
    return {
        datas: state[0], 
        pageEnrDepartLength,
        pageResultLength,
        pageStatementLength
    };
};

const mapDispatchToProps = (dispatch) => ({
    onGetDatas: () => dispatch(getPersonalFetch())
});

export default connect(mapStateToProps, mapDispatchToProps)(PersanolMain);