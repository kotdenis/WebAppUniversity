import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

export default class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
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
                            <button className="btn btn-outline-light text-light" onClick={() => { $('#enterModal').show(); }}
                                style={{ float: "right", fontWeight: "bold", border: "solid" }}
                            >Вход
                         </button>
                        </div>
                    </div>
                    <div className="col-md-4 col-lg-4">
                        <img className="ml-2" src={require('./images/learning.jpg')} style={{ width: "100%", height: "100%" }} />
                    </div>
                </div>
                <div className="modal" id="enterModal">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title">Редактирование</h4>
                                <button type="button" className="close" data-dismiss="modal" onClick={() => { $('#enterModal').hide(); }}>&times;</button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="form-group">
                                        <label>Имя</label>
                                        <input type="text" className="form-control" id="enrolleeModalInput" />
                                    </div>
                                    <div className="form-group">
                                        <label>Пароль</label>
                                        <input type="text" className="form-control" id="enrolleeModalInput" />
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <Link to={'/personal'} className="btn btn-success" data-dismiss="modal">Войти</Link>
                                <button type="button" className="btn btn-secondary" data-dismiss="modal"
                                    onClick={() => { $('#enterModal').hide(); }}
                                >Отмена</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}