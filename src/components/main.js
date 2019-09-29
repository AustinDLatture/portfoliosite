import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Landing from './landingpage';
import Contact from './contact';
import Projects from './projects';

//Functional component that handles routing
const Main = () => (
    <Switch>
        <Route exact path='/' component = {Landing}/>
        <Route path='/contact' component = {Contact}/>
        <Route path='/projects' component = {Projects}/>

    </Switch>
)

export default Main;