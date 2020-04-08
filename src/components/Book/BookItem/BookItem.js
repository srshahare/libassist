import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import { deepOrange, green, red, purple, deepPurple, indigo, blue, teal } from '@material-ui/core/colors';

let arr = [deepOrange, green, red, purple, deepPurple, indigo, blue, teal];

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      margin: '16px auto',
      maxWidth: 700,
    },
    image: {
      width: 128,
      height: 128,
    },
    img: {
      margin: '8px',
      display: 'block',
      maxWidth: '100%',
      maxHeight: '100%',
    },
    square: {
        color: theme.palette.getContrastText(deepOrange[500]),
    },
  }));

const BookItem = (props) => {
    const book = props.book;
    const classes = useStyles();
    return(
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <Grid container spacing={2}>
                <Grid item>
                    <Avatar variant="square" className={classes.square} style={{background: (arr[Math.floor(Math.random() * (7 - 1) + 1)])[500]}}>
                    {book.title.charAt(0)}
                    </Avatar>
                </Grid>
                <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                        <Typography gutterBottom variant="subtitle1">
                        {book.title}
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                        Genre: {book.genre}
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                        Author: {book.author}
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                        ISBN: {book.isbn}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography onClick={props.alert} variant="body2" style={{ cursor: 'pointer', color: 'red' }}>
                        Remove
                        </Typography>
                    </Grid>
                    </Grid>
                    <Grid item>
                    <Typography variant="subtitle1">{`RS ${book.price}.00`}</Typography>
                    </Grid>
                </Grid>
                </Grid>
            </Paper>
            </div>
    );
}

export default BookItem;