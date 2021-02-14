import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MenuNav from './Components/navMenu.jsx';

render(
    <Router>
        <MenuNav />
    </Router>,
    document.getElementById('root')
);