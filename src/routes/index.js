import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from '../pages/home';
import About from '../pages/about';
import Test1 from '../test1/ss';
import Test from '../test/index';

const Routes = () => (
    <Router>
        <div>
            <Route exact path="/" component={Test1}/>
            <Route path="/about" component={About}/>
            <Route path="/test" component={Test}/>
            <Route path="/test1" component={Test1}/>
        </div>
    </Router>
)

export default Routes;