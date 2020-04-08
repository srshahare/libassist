import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import ScannerIcon from '@material-ui/icons/Scanner';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
    root: {
      padding: '2px 4px',
      display: 'flex',
      alignItems: 'center',
      width: '100%',
      margin: '8px'
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
    },
    p: {
        marginLeft: theme.spacing(3),
        marginTop: theme.spacing(0),
        color: '#888'
    }
  }));


const AddBook = (props) => {
    const classes = useStyles();
    return(
        <div>
            <h2>Add Book Here</h2>
            <div>
                <TextField
                id="outlined-full-width"
                label="Book Name"
                style={{ margin: 8 }}
                placeholder="Enter Book Name"
                helperText="Type the proper book name here"
                fullWidth
                margin="normal"
                InputLabelProps={{
                    shrink: true,
                }}
                variant="outlined"
                onChange={props.inputChange}
                name="title"
                />

                <Paper component="form" className={classes.root}>
                    <InputBase
                        className={classes.input}
                        placeholder="Search Book Genre"
                        inputProps={{ 'aria-label': 'search book genre' }}
                        onChange={props.inputChange}
                        name="genre"
                    />
                    <IconButton type="submit" className={classes.iconButton} aria-label="search">
                        <SearchIcon />
                    </IconButton>
                </Paper>
                <p style={{fontSize: '.75rem'}} className={classes.p}>Search your genre here</p>
                <Paper component="form" className={classes.root}>
                    <InputBase
                        className={classes.input}
                        placeholder="Search Book Author"
                        inputProps={{ 'aria-label': 'search book author' }}
                        onChange={props.inputChange}
                        name='author'
                    />
                    <IconButton type="submit" className={classes.iconButton} aria-label="search">
                        <SearchIcon />
                    </IconButton>
                </Paper>
                <p style={{fontSize: '.75rem'}} className={classes.p}>Search your genre here</p>
                <TextField
                id="outlined-full-width"
                label="ISBN Number"
                style={{ margin: 8 }}
                placeholder="Enter ISBN of Book"
                helperText="Type the proper ISBN number of book here"
                fullWidth
                margin="normal"
                InputLabelProps={{
                    shrink: true,
                }}
                variant="outlined"
                onChange={props.inputChange}
                name='isbn'
                />
                <TextField
                id="outlined-full-width"
                label="Book Price"
                style={{ margin: 8 }}
                placeholder="Enter Book Price"
                helperText="Enter the book price here in Rupees"
                fullWidth
                margin="normal"
                InputLabelProps={{
                    shrink: true,
                }}
                variant="outlined"
                onChange={props.inputChange}
                name='price'
                />
                 <Button
                    variant="contained"
                    color="primary"
                    style={{ margin: 8 }}
                    endIcon={<AddIcon />}
                    size="large"
                    onClick={props.addBook}
                >
                    Add Book
                </Button>
                 <Button
                    variant="outlined"
                    color="primary"
                    style={{ margin: 8 }}
                    endIcon={<ScannerIcon />}
                    size="large"
                    onClick={props.scanClicked}
                >
                    Scan Book
                </Button>
            </div>
        </div>
    );
}

export default AddBook;