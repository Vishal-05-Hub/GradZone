import React, {Component} from "react";
import Navbar from "../Navbar";
import FooterComponent from "../../logincomponent/FooterComponent";
import TimeTableService from "../../../api/studentside/TimeTableService";
import Table from 'react-bootstrap/Table'

class StudentTimeTable extends Component{

    constructor(props) {
        super(props)
        this.state = {
            timetables: [],
            message: null
        }
    }

    componentDidMount(){
        TimeTableService.retrieveTimeTable()
        .then(
            response => {
                this.setState({timetables: response.data})
            }
        )
    }

    render(){
        return(
            <div className="studenttimetable">
                <Navbar />
                <h1 style={{marginBottom: "30px"}}><b>TIME TABLE(ODD SEMESTER) 2020-2021</b></h1>
                <div className="container">
                    <Table stripped bordered hover size="sm" style={{border: '2px solid black'}}>
                        <thead>
                        <tr style={{border: '2px solid black'}}>
                            <th><b>DAY/TIME</b></th>
                            <th><b>9:10-10:10</b></th>
                            <th><b>10:10-11:10</b></th>
                            <th><b>11:10-12:10</b></th>
                            <th><b>12:10-1:10</b></th>
                            <th><b>2:10-3:00</b></th>
                            <th><b>3:00-3:50</b></th>
                            <th><b>3:50-4:40</b></th>
                        </tr>
                        </thead>
                        <tbody style={{border: '2px solid black'}}>
                            {
                                this.state.timetables.map(
                                    timetable =>
                                        <tr key={timetable.id}>
                                            <td>{timetable.weekDay}</td>
                                            <td>{timetable.period1}</td>
                                            <td>{timetable.period2}</td>
                                            <td>{timetable.period3}</td>
                                            <td>{timetable.period4}</td>
                                            <td>{timetable.period5}</td>
                                            <td>{timetable.period6}</td>
                                            <td>{timetable.period7}</td>
                                        </tr>
                                )
                            } 
                        </tbody>
                    </Table>
                </div>
                <FooterComponent />
            </div>
        )
    }

}

export default StudentTimeTable;