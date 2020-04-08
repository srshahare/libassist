import React, { Component } from 'react';
import User from '../../components/Sidebar/User';
import ListItems from '../../components/Sidebar/ListItems';
import classes from './Sidebar.css';

class Sidebar extends Component {
    render(){
        return(
            <div className={classes.Sidebar}>
               <User userInfo={this.props.userInfo}/>
               <ListItems />
            </div>
        );
    }
}

export default Sidebar;