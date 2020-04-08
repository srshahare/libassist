import React, { Component } from 'react';
import classes from './Dashboard.css'
import {myFirebase} from '../../firebase/firebase';
import DataCardList from '../../components/Cards/DataCardList/DataCardList';
import GraphCard from '../../components/Cards/GraphCard/GraphCard';

class Dashboard extends Component{
    constructor(props) {
        super(props);
        this.issedRef = myFirebase.firestore().collection('IssuedBooks');
        this.bookingRef = myFirebase.firestore().collection('PreBooking');
        this.studentsRef = myFirebase.firestore().collection('Students');
        this.booksRef = myFirebase.firestore().collection('TotalBooks');
        this.state = {
          issuedCount: null,
          booksCount: null,
          studentsCount: null,
          bookingCount: null
        }
    }

    onStudentUpdate = (querySnapshot) => {
        let count = 0
        querySnapshot.forEach((doc) => {
          count++;
        });
        this.setState({
          studentsCount: count
       });
    }
    onBooksUpdate = (querySnapshot) => {
        let count = 0
        querySnapshot.forEach((doc) => {
          count++;
        });
        this.setState({
          booksCount: count
       });
    }
    onBookingUpdate = (querySnapshot) => {
        let count = 0
        querySnapshot.forEach((doc) => {
          count++;
        });
        this.setState({
          bookingCount: count
       });
    }
    onIssuedUpdate = (querySnapshot) => {
        let count = 0
        querySnapshot.forEach((doc) => {
          count++;
        });
        this.setState({
          issuedCount: count
       });
    }
    
      componentDidMount() {
          this.studentsRef.onSnapshot(this.onStudentUpdate);
          this.booksRef.onSnapshot(this.onBooksUpdate);
          this.bookingRef.onSnapshot(this.onBookingUpdate);
          this.issedRef.onSnapshot(this.onIssuedUpdate);
      }

    render(){
        return(
            <div>
                <DataCardList
                 issuedBooks={this.state.issuedCount}
                 preBooked={this.state.bookingCount}
                 totalStudents={this.state.studentsCount}
                 totalBooks={this.state.booksCount}/>
                 <h2 className={classes.Analysis}>Analysis</h2>
                 <div className={classes.Paper}>
                  <GraphCard />
                 </div>
             </div>
        );
    }
}

export default Dashboard;