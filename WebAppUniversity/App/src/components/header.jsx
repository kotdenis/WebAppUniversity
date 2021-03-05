import React from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { logoutUser } from '../actions/registerActions/actions';

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.handleLinks();
    }

    handleLinks() {
        if (localStorage.getItem('user'))
            $('#personalLink').hide();
        else {
            $('#labelName').hide();
            $('#logoutLink').hide();
            $('#personalLink').show();
        }
    }

    async handleLogout() {
        await this.props.onLogout();
        $('#labelName').hide();
        $('#logoutLink').hide();
        $('#personalLink').show();
    }

    
    render() {
        //const { name } = this.props;
        return (
            <div>
                <div className="row d-flex" style={{ backgroundColor: "midnightblue" }}>
                    <div className="col-md-8 col-lg-8">
                        <div className="pl-1 pt-1">
                            <h1 style={{ color: "white" }}>THE INSTITUTE</h1>
                            <p style={{ color: "white", textAlign: "justify", fontWeight: "bold" }}>
                                With a portfolio including journals, books, conference proceedings and science
                                news resources, we focus on physics, materials science, biosciences, astronomy and
                                astrophysics, environmental sciences, mathematics and education. IOP Publishing also
                                publishes on behalf of other scientific organisations and represents their needs and those
                                of their members.
                         </p>
                        </div>
                        <div>
                            <Link to={'/'} className="btn btn-outline-light text-light" onClick={this.handleLogout.bind(this)}
                                style={{ float: "right", fontWeight: "bold", border: "solid", marginLeft: "30px" }} id="logoutLink"
                            >Выход
                            </Link>
                            <label style={{
                                float: "right", color: "white", fontWeight: "bold", fontSize: "25px",
                                marginLeft: "30px", paddingLeft: "20px"
                            }} id="labelName"
                            >{this.props.name}</label>
                            <Link to={'/personal'} className="btn btn-outline-light text-light"
                                style={{ float: "right", fontWeight: "bold", border: "solid" }} id="personalLink"
                            >Вход
                            </Link>
                        </div>
                    </div>
                    <div className="col-md-4 col-lg-4">
                        <img className="ml-2" src={require('../images/learning.jpg')} style={{ width: "100%", height: "100%" }} />
                    </div>
                </div>
            </div>
        );
    }
}

let name = '';
const mapStateToProps = function (state) {
    if (typeof state.authReducer !== 'undefined')
        name = state.authReducer.name;
    return { name };
};

const mapDispatchToProps = function (dispatch) {
    return {
        onLogout: () => dispatch(logoutUser())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);

