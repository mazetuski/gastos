//Dependencies
import React from 'react'
import { Switch, Route } from 'react-router-dom';
import List from './List';
import Form from './Form';

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={List}/>
            <Route path='/Form' component={Form}/>
        </Switch>
    </main>
);

export default Main;