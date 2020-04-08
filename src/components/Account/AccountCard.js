import React from 'react';
import classes from './AccountCard.css'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: 250,
      },
    },
  }));

 

const AccountCard = (props) => {
    const formclasses = useStyles();

    return(
        <div className={classes.AccountCard}>
            <h4>Profile</h4>
            <p>The information can be edited</p>
            <hr></hr>
            <br></br>
            <form className={formclasses.root} noValidate autoComplete="off">
                <div>
                    <TextField id="standard-basic" label="First Name" value={props.userInfo.first} variant="outlined" onChange={props.firstName}/>
                    <TextField id="filled-basic" label="Last Name" value={props.userInfo.second} variant="outlined" onChange={props.secondName}/>
                </div>
                <div>
                    <TextField id="standard-basic" label="Email Address" value={props.userInfo.email} variant="outlined" onChange={props.email}/>
                    <TextField id="filled-basic" label="Phone Number" value={props.userInfo.phone} variant="outlined" onChange={props.phone}/>
                </div>
                <div>
                    <TextField id="standard-basic" label="State" value={props.userInfo.state} variant="outlined" onChange={props.state}/>
                    <TextField id="filled-basic" label="Country" value={props.userInfo.country} variant="outlined" onChange={props.country}/>
                </div>
            </form><br></br>
            <hr></hr>
            <Button onClick={props.onSave} variant="contained" color="primary">Save Details</Button>
        </div>
    );
}

export default AccountCard;