import React, { Component } from 'react';
import Navigation from '../../components/Navigation/Navigation'
import Sidebar from './Sidebar';
import classes from './Layout.css';
import Container from './Container';
import {myFirebase} from '../../firebase/firebase';

class Layout extends Component {
    constructor(props) {
        super(props);
        this.ref = myFirebase.firestore().collection('Admin').doc("JM4ywQUIMpvzAp3Cr6dt");    
        this.state = {
            name: '',
            image: '',
            admin: 'Admin',
            key: ''
        }
    }

    componentDidMount() {
        this.ref.get().then((doc) => {
            if(doc.exists){
              const data = doc.data();
              this.setState({
                name: data.first + ' ' + data.second,
                image: data.image,
                admin: 'Admin',
                key: doc.id
              })
            }else{
              console.log("no such document");
            }
          })
    }

    render(){
        return(
            <div>
                <Navigation />
                <div className={classes.Layout}>
                    <Sidebar userInfo={this.state}/>
                    <Container />
                </div>
            </div>
        );
    }
}

export default Layout;