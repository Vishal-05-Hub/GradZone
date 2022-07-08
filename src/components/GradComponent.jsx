import LoginComponent from "./logincomponent/LoginComponent";
import React, {Component} from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import AdminLoginComponent from "./logincomponent/AdminLoginComponent";
import AddStudent from "./admincomponent/pages/AddStudent";
import StudentList from "./admincomponent/pages/StudentList";
import TimeTable from "./admincomponent/pages/TimeTable";
import Dashboard from "./studentcomponent/pages/Dashboard";
import Courses from "./studentcomponent/pages/Courses";
import Quiz from "./studentcomponent/pages/quiz/Quiz";
import Syllabus from "./studentcomponent/pages/Syllabus";
import StudentTimeTable from "./studentcomponent/pages/StudentTimeTable";
import Books from "./studentcomponent/pages/Books";
import MyTasks from "./studentcomponent/pages/tasks/MyTasks";
import Task from "./studentcomponent/pages/tasks/Task";
import AuthenticatedRoute from "./logincomponent/AuthenticatedRoute";
import ErrorComponent from "./logincomponent/ErrorComponent";
import MSyllabus from "./studentcomponent/pages/MSyllabus";
import MResume from "./studentcomponent/pages/resume/MResume";

class GradComponent extends Component{
    render(){
        return(
            <div className="GradComponent">
                <Router>
                    <>
                    <Switch>
                            <Route path="/" exact component={LoginComponent}/>
                            <Route path="/studentlogin" exact component={LoginComponent}/>
                            <Route path="/adminlogin" exact component={AdminLoginComponent}/>
                            <AuthenticatedRoute path="/adminpage" exact component={AddStudent} />
                            <AuthenticatedRoute path="/adminpage/addstudent" exact component={AddStudent} />
                            <AuthenticatedRoute path="/adminpage/addstudent/:id" exact component={AddStudent} />
                            <AuthenticatedRoute path="/adminpage/modifytimetable" exact component={TimeTable} />
                            <AuthenticatedRoute path="/adminpage/studentlist" component={StudentList} />
                            <AuthenticatedRoute path="/studentpage" exact component={Dashboard} />
                            <AuthenticatedRoute path="/studentpage/dashboard" exact component={Dashboard} />
                            <AuthenticatedRoute path="/studentpage/courses" exact component={Courses} />
                            <AuthenticatedRoute path="/studentpage/books" exact component={Books} />
                            <AuthenticatedRoute path="/studentpage/timetable" exact component={StudentTimeTable} />
                            <AuthenticatedRoute path="/studentpage/syllabus" exact component={MSyllabus} />
                            <AuthenticatedRoute path="/studentpage/semsyllabus" exact component={Syllabus} />
                            <AuthenticatedRoute path="/studentpage/mytasks" exact component={MyTasks} />
                            <AuthenticatedRoute path="/studentpage/mytasks/:id" component={Task} />
                            <AuthenticatedRoute path="/studentpage/quiz" exact component={Quiz} />
                            <AuthenticatedRoute path="/studentpage/buildresume" exact component={MResume} />
                            <Route component={ErrorComponent}/>
                    </Switch>
                    </>
                </Router>
            </div>
        )
    }
}

export default GradComponent;