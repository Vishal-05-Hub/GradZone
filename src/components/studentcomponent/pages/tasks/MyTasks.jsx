import { Component } from "react";
import Navbar from "../../Navbar";
import FooterComponent from "../../../logincomponent/FooterComponent";
import TaskService from "../../../../api/studentside/TaskService";
import moment from "moment";

class MyTasks extends Component{

    constructor(props) {
        super(props)
        this.state = {
            tasks: [],
            message: null
        }

        this.deleteTaskClicked = this.deleteTaskClicked.bind(this);
        this.refreshTask = this.refreshTasks.bind(this);
        this.updateTaskClicked = this.updateTaskClicked.bind(this);
        this.addTaskClicked = this.addTaskClicked.bind(this);
    }

    componentDidMount(){
        this.refreshTasks();
    }

    refreshTasks(){
        TaskService.retrieveAllTasks("vishal")
        .then(
            response => {
                this.setState({tasks: response.data})
            }
        )
    }

    deleteTaskClicked(id){
        TaskService.deleteTask("vishal", id)
        .then(
            response => {
                this.setState({message: `Task deleted.`})
                this.refreshTasks()
            }
        )
    }

    updateTaskClicked(id){
        this.props.history.push(`/studentpage/mytasks/${id}`)
    }

    addTaskClicked(){
        this.props.history.push(`/studentpage/mytasks/-1`)
    }


    render(){
        return(
            <div className="mytasks">
                <Navbar />
                <h1 style={{marginBottom: "30px"}}><b>MY TASKS</b></h1>
                {this.state.message && <div className="alert alert-success">{this.state.message}</div>}
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Description</th>
                                <th>Target Date</th>
                                <th>IsCompleted?</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.tasks.map(
                                    task =>
                                        <tr key={task.id}>
                                            <td>{task.description}</td>
                                            <td>{moment(task.targetDate).format("YYYY-MM-DD")}</td>
                                            <td>{task.isDone}</td>
                                            <td><button className="btn btn-success"  onClick={() => this.updateTaskClicked(task.id)}>Update</button></td>
                                            <td><button className="btn btn-warning" onClick={() => this.deleteTaskClicked(task.id)}>Delete</button></td>
                                        </tr>
                                )
                            } 
                        </tbody>
                    </table>
                    <div className="row" style={{marginRight:'90%'}}>
                        <button className="btn btn-success" onClick={() => this.addTaskClicked()}>ADD TASK</button>
                    </div>
                </div>
                <FooterComponent />
            </div>
        )
    }
}

export default MyTasks