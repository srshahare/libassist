import React, { Component } from 'react';
import Dashboard from '../Dashboard/Dashboard';
import { Route, Switch } from "react-router-dom";
import Profile from '../Setting/Profile/Profile';
import Account from '../Setting/account/Account';
import classes from './Container.css'
import AddBooks from '../Books/AddBooks/AddBooks';
import AllBooks from '../Books/AllBooks/AllBooks';
import Students from '../Students/Students';

class Container extends Component {
    render(){
        return(
            <div className={classes.Container}>
                <Switch>
                    <Route path="/dashboard" component={Dashboard} />
                    <Route path="/profile" component={Profile} />
                    <Route path="/account" component={Account} />
                    <Route path="/addbooks" component={AddBooks} />
                    <Route path="/allbooks" component={AllBooks} />
                    <Route path="/students" component={Students} />
                </Switch>
            </div>
        );
    }
}

export default Container;