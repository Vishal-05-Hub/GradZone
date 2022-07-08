import React, { Component } from "react";
import Navbar from "../Navbar";
import FooterComponent from "../../logincomponent/FooterComponent";
import CoursesService from "../../../api/studentside/CoursesService";

class Courses extends Component{

    constructor(props) {
        super(props)
        this.state = {
            courses: [],
            message: null
        }
    }

    componentDidMount(){
        CoursesService.retrieveAllCourses()
        .then(
            response => {
                this.setState({courses: response.data})
            }
        )
    }

    render(){
        return(
            <div className="courses">
                <Navbar />
                <h1 style={{marginBottom: "30px"}}><b>COURSES</b></h1>
                <div className="container">
                    <table className="table">
                        <thead>
                        <tr>
                            <th>S.NO</th>
                            <th>COURSE NAME</th>
                            <th>INSTRUCTOR NAME</th>
                            <th>LINK</th>
                        </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.courses.map(
                                    course =>
                                        <tr key={course.id}>
                                            <td>{course.id}</td>
                                            <td>{course.courseName}</td>
                                            <td>{course.instructorName}</td>
                                            <td>{<a href={course.link} target="_blank" rel="noreferrer noopener" style={{textDecoration:'none'}}>Click Here</a>}</td>
                                        </tr>
                                )
                            } 
                        </tbody>
                    </table>
                </div>
                <FooterComponent />
            </div>
        )
    }

}

export default Courses;