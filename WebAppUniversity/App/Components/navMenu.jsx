import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import GeneralBlock from './generalBlock.jsx';
import PersonBlock from './personBlock.jsx';
import './CSS/navmenu.css';


export default class MenuNav extends React.Component {
    render() {
        return (
            <Router>
                <div className="container-fluid">
                    <div className="row rowFirst">
                        <div className="col-8">
                            <section id="firstSection">
                                <h1 id="firstName">THE INSTITUTE</h1>
                                <p id="fistDesc">
                                    With a portfolio including journals, books, conference proceedings and science
                                    news resources, we focus on physics, materials science, biosciences, astronomy and
                                    astrophysics, environmental sciences, mathematics and education. IOP Publishing also
                                    publishes on behalf of other scientific organisations and represents their needs and those
                                    of their members.
                                </p>
                                <Link to='/personblock' className="btn btn-outline-light text-light" id="enterId">Вход</Link>
                            </section>
                        </div>
                        <div className="col-4">
                            <img src={require('./images/learning.jpg')} id="imgFirst" />
                        </div>
                    </div>
                    <Switch>
                        <Route path='/personblock'>
                            <PersonBlock />
                        </Route>
                        <Route path='/'>
                            <GeneralBlock />
                        </Route>
                    </Switch>
                </div>
            </Router>
        );
    }
}