import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ProjectManagerContainer from './components/projectManager/ProjectManagerContainer';

const Routes = () => (
    <Switch>
        <Route path={`/manage/:projectId`} component={ProjectManagerContainer} >
        </Route>
    </Switch>
);

export default Routes;


