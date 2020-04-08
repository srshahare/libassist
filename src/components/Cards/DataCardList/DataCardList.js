import React from 'react';
import DataCard from '../DataCard/DataCard';
import classes from './DataCardList.css';

const DataCardList = (props) => {

    const cardView = [
        {
            classes: classes.TotalBooks,
            name: 'Total Books',
            count: props.totalBooks,
            ref: 'See list of all books',
            tag: 'Books'
        },
        {
            classes: classes.TotalStudents,
            name: 'Total Students',
            count: props.totalStudents,
            ref: 'See more about this',
            tag: 'Students'
        },
        {
            classes: classes.IssuedBooks,
            name: 'Issued Books',
            count: props.issuedBooks,
            ref: 'See all issued books',
            tag: 'Issued Books'
        },
        {
            classes: classes.TotalBookings,
            name: 'Pre bookings',
            count: props.preBooked,
            ref: 'See pre booked books',
            tag: 'Bookings'
        },
    ]

    return(
        <div className={classes.DataCardList}>
            <DataCard info={cardView[0]}/>
            <DataCard info={cardView[1]}/>
            <DataCard info={cardView[2]}/>
            <DataCard info={cardView[3]}/>
        </div>
    );
}

export default DataCardList;