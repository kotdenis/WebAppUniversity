import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import PersonCommon from './Blocks/PersonBlocks/personCommon.jsx';
import PersonAdmin from './Blocks/PersonBlocks/personAdmin.jsx';
import './Blocks/PersonBlocks/PersonCSS/personblocks.css';


export default class PersonBlock extends React.Component {
    render() {
        return (
            <Router>
                <div className="row rowPersonMain">
                    <div className="col-2">
                        <nav>
                            <ul>
                                <li>
                                    <Link to='/'>Общая</Link>
                                </li>
                                <li>
                                    <Link to='/personadmin'>Управление</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="col-10">
                        <Switch>
                            <Route path='/personadmin'>
                                <PersonAdmin />
                            </Route>
                            <Route path='/'>
                                <PersonCommon />
                            </Route>
                        </Switch>
                    </div>
                </div>
            </Router>
            )
    }
}
