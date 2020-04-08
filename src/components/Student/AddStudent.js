import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import ScannerIcon from '@material-ui/icons/Scanner';

const useStyles = makeStyles((theme) => ({
    root: {
      padding: '2px 4px',
      display: 'flex',
      alignItems: 'center',
      width: '60%',
      margin: '8px'
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1
    },
    studentForm: {
        display: 'flex',
        justifyContent: 'center',
        flexFlow: 'column',
        alignItems: 'center'
    },
    h: {
        textAlign: 'center'
    }
  }));


const AddStudent = (props) => {
    const classes = useStyles();
    return(
        <div>
            <h2 className={classes.h}>Add Student</h2>
            <div className={classes.studentForm}>
                <TextField
                id="outlined-full-width"
                label="Student Name"
                style={{ margin: 8, width: '60%'}}
                placeholder="Student Name"
                helperText="Type the full name of student"
                fullWidth
                margin="normal"
                InputLabelProps={{
                    shrink: true,
                }}
                variant="outlined"
                onChange={props.inputChange}
                name="name"
                />
                <TextField
                id="outlined-full-width"
                label="Student ID"
                style={{ margin: 8, width: '60%' }}
                placeholder="Student Id"
                helperText="Type the student id(Roll no. OR Prn)"
                fullWidth
                margin="normal"
                InputLabelProps={{
                    shrink: true,
                }}
                variant="outlined"
                onChange={props.inputChange}
                name='id'
                />
                <TextField
                id="outlined-full-width"
                label="Email Address"
                style={{ margin: 8, width: '60%' }}
                placeholder="Emaiil Address"
                helperText="Enter the email address of student since student will receive email to reset the
                password in order to login"
                fullWidth
                margin="normal"
                InputLabelProps={{
                    shrink: true,
                }}
                variant="outlined"
                onChange={props.inputChange}
                name='email'
                />
                 <Button
                    variant="contained"
                    color="primary"
                    style={{ margin: 8, width: '60%' }}
                    endIcon={<AddIcon />}
                    size="large"
                    onClick={props.click}
                >
                    Add Student
                </Button>
                 <Button
                    variant="outlined"
                    color="primary"
                    style={{ margin: 8, width: '60%' }}
                    endIcon={<ScannerIcon />}
                    size="large"
                    onClick={props.scanClicked}
                >
                    Scan Barcode
                </Button>
            </div>
        </div>
    );
}

export default AddStudent;