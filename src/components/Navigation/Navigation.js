import React from 'react';
import classes from './Navigation.css';
import { NavLink } from 'react-router-dom';

const Navigation = () => {

    return(
        <div className={classes.Navigation}>
            <h2>LabAssist</h2>
            <ul>
                <li><NavLink className={classes.NavLinks} to="/dashboard">Dashboard</NavLink></li>
                <div className={classes.dropdown}>
                  <li className={classes.dropbtn}>Books</li>
                  <div className={classes.dropdownContent}>
                    <NavLink className={classes.NavLinks} to="/addbooks">Add Books</NavLink>
                    <NavLink className={classes.NavLinks} to="/removebook">Remove Books</NavLink>
                    <NavLink className={classes.NavLinks} to="/allbooks">See All Books</NavLink>
                    <NavLink className={classes.NavLinks} to="/issuedbooks">Issued Books</NavLink>
                  </div>
                </div> 
                <li><NavLink className={classes.NavLinks} to="/students">Students</NavLink></li>
                <li><NavLink className={classes.NavLinks} to="/about">About</NavLink></li>
                <div className={classes.dropdown}>
                  <li className={classes.dropbtn}>Setting</li>
                  <div className={classes.dropdownContent}>
                    <NavLink className={classes.NavLinks} to="/profile">Profile</NavLink>
                    <NavLink className={classes.NavLinks} to="/account">My Account</NavLink>
                    <NavLink className={classes.NavLinks} to="/logout">Logout</NavLink>
                  </div>
                </div> 
            </ul>
        </div>
    );
}

export default Navigation;