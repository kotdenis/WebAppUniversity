import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import GeneralDepartments from './generalDepartments.jsx';
import BlockTest from './blockTest.jsx';

export default class GeneralMain extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router>
                <div className="row d-flex">
                    <aside className="col-md-2 col-lg-2">
                        <nav>
                            <ul style={{ fontWeight: "bold" }}>
                                <li>
                                    <Link to='/'>BlockRight</Link>
                                </li>
                                <li>
                                    <Link to='/blocktest'>BlockTest</Link>
                                </li>
                            </ul>
                        </nav>
                    </aside>
                    <Switch>
                        <Route path='/blocktest'>
                            <BlockTest />
                        </Route>
                        <Route path='/'>
                            <GeneralDepartments />
                        </Route>
                    </Switch>
                </div>
            </Router>
        );
    }
}