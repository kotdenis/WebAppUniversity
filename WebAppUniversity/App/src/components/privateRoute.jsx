import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Login from '../components/authorize/login.jsx';

let temp = true;
export const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
        localStorage.getItem('user')
            ? <Component {...props} />
            : <Login />
    )} />
);
