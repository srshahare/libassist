import React from 'react';
import classes from './ProfileCard.css'
import Avatar from '@material-ui/core/Avatar';

const ProfileCard = (props) => {
    return(
        <div className={classes.ProfileCard}>
            <Avatar alt="Remy Sharp" src={props.userInfo.image} className={classes.large} />
            <h1>{`${props.userInfo.first} ${props.userInfo.second}`}</h1>
            <h3>{props.userInfo.key}</h3>
            <p>Los Angeles, USA</p>
        </div>
    );
}

export default ProfileCard;