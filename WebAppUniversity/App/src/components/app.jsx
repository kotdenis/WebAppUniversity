import React from 'react';
import { Route } from 'react-router';
import Header from './header.jsx';
import GeneralMain from './general/generalMain.jsx';
import PersanolMain from './personal/personalMain.jsx';

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
                    <Route path='/personal' component={PersanolMain} />
                </div>
            </div>
        );
    }
}