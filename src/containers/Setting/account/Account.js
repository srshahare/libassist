import React, { Component } from 'react';
import classes from './Account.css';
import ProfileCard from '../../../components/Account/ProfileCard';
import AccountCard from '../../../components/Account/AccountCard';
import {myFirebase} from '../../../firebase/firebase';

class Account extends Component{
    constructor(props) {
        super(props);
        this.ref = myFirebase.firestore().collection('Admin').doc('JM4ywQUIMpvzAp3Cr6dt');
        this.unsubscribe = null;
        this.state = {
          first: '',
          second: '',
          email: '',
          phone: '',
          state: '',
          country: '',
          image: '',
          key: '',
        }
      }

    componentDidMount() {
      this.ref.get().then((doc) => {
        if(doc.exists){
          const data = doc.data();
          this.setState({
            first: data.first,
            second: data.second,
            email: data.email,
            phone: data.phone,
            state: data.state,
            country: data.country,
            image: data.image,
            key: doc.id
          })
        }else{
          console.log("no such document");
        }
      })
    }

    onFirstNameChange = (event) => {
        this.setState({first: event.target.value});
    }
     onSecondNameChange = (event) => {
        this.setState({second: event.target.value});
    }
     onEmailChange = (event) => {
        this.setState({email: event.target.value});
    }
     onPhoneChange = (event) => {
        this.setState({phone: event.target.value});
    }
    onStateChange = (event) => {
        this.setState({state: event.target.value});
    }
     onCountryChange = (event) => {
        this.setState({country: event.target.value});
    }
  
     onSubmitClicked = (e) => {
        e.preventDefault();

        const { first, second, email, phone, state, country } = this.state;

        this.ref.update({
            first,
            second,
            email, phone, state, country
          }).then((docRef) => {
            this.setState({
              first: '',
              second: '',
              email: '',
              phone: '',
              state: '',
              country: '',
              image: this.state.image
            });
            this.props.history.push("/dashboard")
          })
          .catch((error) => {
            console.error("Error adding document: ", error);
          });

    }

    render() {
        return(
            <div className={classes.Account}>
                <ProfileCard userInfo={this.state} />
                <AccountCard 
                userInfo={this.state}
                firstName={this.onFirstNameChange}
                secondName={this.onSecondNameChange}
                email={this.onEmailChange}
                phone={this.onPhoneChange}
                state={this.onStateChange}
                country={this.onCountryChange}
                onSave={this.onSubmitClicked}/>
            </div>
        );
    }
}

export default Account;