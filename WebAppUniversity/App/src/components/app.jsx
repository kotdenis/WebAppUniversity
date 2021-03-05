import React from 'react';
import { Route } from 'react-router';
import Header from './header.jsx';
import GeneralMain from './general/generalMain.jsx';
import PersanolMain from './personal/personalMain.jsx';
import { PrivateRoute } from './privateRoute.jsx';
import Register from './authorize/register.jsx';

export default class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container-fluid">
                <div>
                    <Header />
                </div>
                <div className="mt-2 pt-2">
                    <Route exact path='/' component={GeneralMain} />
                    <PrivateRoute path='/personal' component={PersanolMain} />
                    <Route path='/register' component={Register} />
                </div>
            </div>
        );
    }
}