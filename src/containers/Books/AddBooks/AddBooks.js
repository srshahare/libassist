import React, { Component } from 'react';
import classes from './AddBooks.css'
import AddBook from '../../../components/Book/AddBook/AddBook';
import {myFirebase} from '../../../firebase/firebase';
import Loading from '../../../hoc/Loading/Loading';
import ScannerModal from '../../../hoc/Modal/ScannerModal';


class AddBooks extends Component {
    constructor(props){
        super(props);
        this.ref = myFirebase.firestore().collection('TotalBooks');
        this.state={
            title: '',
            genre: '',
            author: '',
            isbn: '',
            price: '',
            isLoading: false,
            isScanning: false
        }
    }

    handleInputChange = (e) => {
        const t = e.target;
        switch(t.name){
            case 'title':
                this.setState({title: t.value})
                break;
            case 'genre':
                this.setState({genre: t.value})
                break;
            case 'author':
                this.setState({author: t.value})
                break;
            case 'isbn':
                this.setState({isbn: t.value})
                break;
            case 'price':
                this.setState({price: t.value})
                break;
            default:
                console.log("Wrong Input");
        }
    }

    handleAddBook = (e) => {
        e.preventDefault();
        this.setState({isLoading: true})
        const { title, genre, isbn, author, price } = this.state;
        let uid = this.ref.doc().id;
        this.ref.doc(uid).set({
          title,
          genre,
          isbn,
          author,
          price,
          uid
        }).then((docRef) => {
            this.setState({
                title: '',
                genre: '',
                isbn: '',
                author: '',
                price: '',
                isLoading: false
            })
        })
        .catch((error) => {
          console.error("Error adding document: ", error);
        });    
    }

   
    handleScanBook = () => {
        // this.startScanner();
        this.setState({isScanning: true})
    }

    render(){
        let scanDialog = null;
        let view = <AddBook 
                    inputChange={this.handleInputChange}
                    addBook={this.handleAddBook}
                    scanClicked={this.handleScanBook}/>

        if(this.state.isLoading){
            view = <Loading />
        }
        if(this.state.isScanning){
            scanDialog = <ScannerModal />
        }
        return(
            <div className={classes.AddBooks}>
                {scanDialog}
                {view}  
            </div>
        )
    }
}

export default AddBooks;