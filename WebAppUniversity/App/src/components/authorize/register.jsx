import React from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { registerUser } from '../../actions/registerActions/actions';

class Register extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { onRegister } = this.props;
        return (
            <section className="row d-flex">
                <div className="col-md-4 col-lg-4" />
                <div className="col-md-4 col-lg-4">
                    <form>
                        <form>
                            <div className="form-group">
                                <label>Имя</label>
                                <input type="text" className="form-control" id="registerName" />
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input type="text" className="form-control" id="registerEmail" />
                            </div>
                            <div className="form-group">
                                <label>Пароль</label>
                                <input type="text" className="form-control" id="registerPassword" />
                            </div>
                            <div className="form-group">
                                <label>Повторите пароль</label>
                                <input type="text" className="form-control" id="confirmPassword" />
                            </div>
                        </form>
                    </form>
                    <div>
                        <button className="btn btn-primary" style={{ float: "left" }}
                            onClick={onRegister}
                        >Регитсрация</button>
                        <Link to={'/'} className="btn btn-secondary ml-2">Отмена</Link>
                    </div>
                </div>
                <div className="col-md-4 col-lg-4" />
            </section>
        );
    }
}

const mapDispatchToProps = function (dispatch) {
    return {
        onRegister: () => dispatch(registerUser({
            name: $('#registerName').val(),
            email: $('#registerEmail').val(),
            password: $('#registerPassword').val(),
            confirmPassword: $('#confirmPassword').val()
        }))
    };
};

export default connect(null, mapDispatchToProps)(Register);