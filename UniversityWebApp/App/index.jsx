import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { render } from 'react-dom';
import Test from './test.jsx';

render(
    <Router>
        <Test />
    </Router>,
    document.getElementById('root')
);