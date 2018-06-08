import React from 'react';
import {Router, Route, IndexRoute} from 'react-router';
import Template from '../containers/template';
import Home from '../containers/home';
import Profile from '../containers/profile';

const createRoutes = () => {
    return (
        <Router>
            <Route
            path='/'
            component={Template}
            >
                <IndexRoute component={Home} />
                <Route path={'/profile'} component={Profile}/>
            </Route>
        </Router> 
    )
}

const routes = createRoutes();

export default routes;