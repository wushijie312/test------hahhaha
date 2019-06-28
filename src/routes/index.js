import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from '../pages/home';
import About from '../pages/about';
import Test from '../test/index';

const Routes = () => (
    <Router>
        <div>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/test" component={Test}/>
        </div>
    </Router>
)

export default Routes;