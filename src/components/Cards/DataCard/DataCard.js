import React from 'react';
import classes from './DataCard.css'
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import { Link } from '@material-ui/core';

const Datacard = (props) => {
    return(
        <div className={classes.DataCard}>
            <div>
                <p>{props.info.name}</p> 
                <h2>{`${props.info.count} ${props.info.tag}`}</h2>
                <hr></hr>
                <Link style={{cursor: 'pointer'}}>{props.info.ref}</Link>
            </div>
             <div className={props.info.classes}>
                <LibraryBooksIcon style={{ color: 'white' }} fontSize="large"/>
             </div>
        </div>
    );
}

export default Datacard;