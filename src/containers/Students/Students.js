import React, { Component } from 'react';
import AllStudents from './AllStudents/AllStudents';
import {myFirebase} from '../../firebase/firebase';
import Loading from '../../hoc/Loading/Loading';

class Students extends Component {
    constructor(props){
        super(props);
        this.ref = myFirebase.firestore().collection('Students');
        this.updating = null;
        this.state = {
            name: '',
            student_id: '',
            email: '',
            reg_date: '',
            status: false,
            mob_no: '',
            isLoading: false,
            students: []
        }
    }

    handleInputChange = (e) => {
        const t = e.target;
        switch(t.name){
            case 'name':
                this.setState({name: t.value})
                break;
            case 'id':
                this.setState({student_id: t.value})
                break;
            case 'email':
                this.setState({email: t.value})
                break;
            default:
                console.log("Wrong Input");
        }
    }

    onCollectionUpdate = (querySnapshot) => {
        const students = [];
        querySnapshot.forEach((doc) => {
          const { name, email, student_id, mob_no, reg_date, status } = doc.data();
          students.push({
            doc, // DocumentSnapshot
            name, 
            email, 
            student_id,
            mob_no,
            status,
            reg_date
          });
        });
        this.setState({
          students: students
       });
    }

    componentDidMount() {
        this.updating = this.ref.onSnapshot(this.onCollectionUpdate);
    }

    handleAddStudent = (e) => {
        e.preventDefault();
        this.setState({isLoading: true})
        const { name, student_id, email } = this.state;
        let uid = this.ref.doc().id;
        this.ref.doc(uid).set({
          name,
          student_id,
          email
        }).then((docRef) => {
            this.setState({
                name: '',
                student_id: '',
                email: '',
                isLoading: false
            })
        })
        .catch((error) => {
          console.error("Error adding document: ", error);
        });    
    }


    render(){
        let view = null;
        if(this.state.isLoading){
            view = <Loading />
        }
        return(
            <div>
                {view}
                <AllStudents 
                    click={this.handleAddStudent}
                    change={this.handleInputChange}
                    students={this.state.students}/>
            </div>
        );
    }
}

export default Students;