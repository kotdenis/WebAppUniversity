import React from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { loginUser } from '../../actions/registerActions/actions';
import PersanolMain from '../personal/personalMain.jsx';


class Login extends React.Component {
    constructor(props) {
        super(props);
    }

    async  handleLogin() {
        await this.props.onLogin();
        $('#labelName').show();
        $('#logoutLink').show();
        $('#personalLink').hide();
        if (this.props.isLogged)
            window.location.href = '/personal';
    }

    render() {
        return (
            <section className="col-md-10 col-lg-10">
                <div className="row d-flex">
                    <div className="col-md-4 col-lg-4" />
                    <div className="col-md-4 col-lg-4">
                        <form>
                            <div className="form-group">
                                <label>Имя</label>
                                <input type="text" className="form-control" id="loginName" />
                            </div>
                            <div className="form-group">
                                <label>Пароль</label>
                                <input type="text" className="form-control" id="loginPassword" />
                            </div>
                        </form>
                        <div>
                            <Link to='/personal' className="btn btn-success" onClick={this.handleLogin.bind(this)}>Войти</Link>
                            <Link to={'/'} className="btn btn-secondary ml-2">Отмена</Link>
                            <Link to={'/register'} className="btn btn-primary" style={{ float: "right" }}>Регитсрация</Link>
                        </div>
                    </div>
                    <div className="col-md-4 col-lg-4" />
                </div>
            </section>
        );
    }
}


let isLogged = false;
const mapStateToProps = function (state) {
    if (typeof state.authReducer !== 'undefined')
        isLogged = state.authReducer.isLogged;
    return { isLogged };
};
const mapDispatchToProps = function (dispatch) {
    return {
        onLogin: () => dispatch(loginUser({
            name: $('#loginName').val(),
            password: $('#loginPassword').val()
        }))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
