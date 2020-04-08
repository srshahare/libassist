import React, { Component } from 'react';
// import classes from './AllBooks.css'
import {myFirebase} from '../../../firebase/firebase';
import BookItem from '../../../components/Book/BookItem/BookItem';
import AlertDialog from '../../../hoc/Dialog/AlertDialog'

class AllBooks extends Component {
    constructor(props){
        super(props);
        this.ref = myFirebase.firestore().collection('TotalBooks');
        this.updating = null;
        this.state={
            books: [],
            isLoading: false,
            isOpen: false,
            key: ''
        }  
    }

    onCollectionUpdate = (querySnapshot) => {
        const books = [];
        querySnapshot.forEach((doc) => {
          const { title, genre, author, isbn, price, uid } = doc.data();
          books.push({
            doc, // DocumentSnapshot
            title,
            genre,
            author,
            isbn,
            price,
            uid
          });
        });
        this.setState({
          books: books
       });
      }

    componentDidMount() {
        this.updating = this.ref.onSnapshot(this.onCollectionUpdate);
    }

    handleAlertDialog = (id) => {
        this.setState({isOpen: true, key: id})
    }

    handleClose = () => {
        this.setState({isOpen: false, key: ''})
    }

    removeBookItemHanlder = (id) => {
        this.setState({isOpen: false, key: ''})
        myFirebase.firestore().collection('TotalBooks').doc(id).delete()
        .then(() => {
            console.log("Document successfully deleted!");
          }).catch((error) => {
            console.error("Error removing document: ", error);
        });
    }

    render(){
        let alert = null;
        if(this.state.isOpen){
            alert = <AlertDialog 
                        status={this.state.isOpen}
                        handleClose={this.handleClose}
                        rmHandler={this.removeBookItemHanlder.bind(this, this.state.key)} />
        }
        return(
            <div>
                {alert}
                {this.state.books.map(book => {
                    return(
                        <div key={book.uid}>
                            <BookItem
                                book={book} 
                                alert={this.handleAlertDialog.bind(this, book.uid)}/>    
                        </div>
                    )  
                })}
            </div>  
        )
    }
}

export default AllBooks;