import { Component } from "react";
import Navbar from "../Navbar";
import FooterComponent from "../../logincomponent/FooterComponent";
import AddStudentService from "../../../api/adminside/AddStudentService";

class StudentList extends Component{

    constructor(props) {
        super(props)
        this.state = {
            users: [],
            message: null
        }

        this.deleteUserClicked = this.deleteUserClicked.bind(this);
        this.refreshUsers = this.refreshUsers.bind(this);
        // this.updateTaskClicked = this.updateTaskClicked.bind(this);
    }

    componentDidMount(){
        this.refreshUsers();
    }

    refreshUsers(){
        AddStudentService.retrieveAllStudent()
        .then(
            response => {
                this.setState({users: response.data})
            }
        )
    }

    deleteUserClicked(id){
        AddStudentService.deleteUser(id)
        .then(
            response => {
                this.setState({message: `Student Deleted.`})
                this.refreshUsers()
            }
        )
    }

    // updateTaskClicked(id){
    //     this.props.history.push(`/studentpage/mytasks/${id}`)
    // }

    addUserClicked(){
        this.props.history.push(`/adminpage/addstudent`)
    }


    render(){
        return(
            <div className="studentlist">
                <Navbar />
                <h1 style={{marginBottom: "30px"}}><b>STUDENT LIST</b></h1>
                {this.state.message && <div className="alert alert-success">{this.state.message}</div>}
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>E-Mail</th>
                                <th>UserName</th>
                                <th>Year</th>
                                <th>Mobile Number</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.users.map(
                                    user =>
                                        <tr key={user.id}>
                                            <td>{user.firstName + " " + user.lastName}</td>
                                            <td>{user.email}</td>
                                            <td>{user.userName}</td>
                                            <td>{user.year}</td>
                                            <td>{user.mobileNumber}</td>
                                            <td><button className="btn btn-warning" onClick={() => this.deleteUserClicked(user.id)}>Delete</button></td>
                                        </tr>
                                )
                            } 
                        </tbody>
                    </table>
                    <div className="row" style={{marginRight:'90%'}}>
                        <button className="btn btn-success" onClick={() => this.addUserClicked()}>ADD STUDENT</button>
                    </div>
                </div>
                <FooterComponent />
            </div>
        )
    }
}

export default StudentList