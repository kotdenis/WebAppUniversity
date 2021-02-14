import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import GeneralDepartments from './Blocks/GeneralBlocks/generalDepartments.jsx';
import BlockTest from './Blocks/GeneralBlocks/blockTest.jsx';

export default class GeneralBlock extends React.Component {
    render() {
        return (
            <Router>
                <div className="row">
                    <div className="col-2 leftSide">
                        <nav>
                            <ul>
                                <li>
                                    <Link to='/'>BlockRight</Link>
                                </li>
                                <li>
                                    <Link to='/blocktest'>BlockTest</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="col-10">
                        <Switch>
                            <Route path='/blocktest'>
                                <BlockTest />
                            </Route>
                            <Route path='/'>
                                <GeneralDepartments />
                            </Route>
                        </Switch>
                    </div>
                </div>
            </Router>
        );
    }
}