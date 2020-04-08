import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import classes from './User.css';

const User = (props) => {
    return(
        <div className={classes.User}>
            <Avatar src={props.userInfo.image} />
            <h3>{props.userInfo.name}</h3>
            <p>{props.userInfo.admin}</p>
        </div>
    );
}

export default User;