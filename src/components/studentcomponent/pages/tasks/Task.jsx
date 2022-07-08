import { Component } from "react";
import moment from "moment";
import { Formik, Form, Field, ErrorMessage } from "formik";
import TaskService from "../../../../api/studentside/TaskService";
import Navbar from "../../Navbar";
import FooterComponent from "../../../logincomponent/FooterComponent";

class Task extends Component {

    constructor(props) {
        super(props)
        this.state = {
            id:  this.props.match.params.id,
            description: "",
            isCompleted: "",
            targetDate: moment(new Date()).format('YYYY-MM-DD')
        }
        this.onSubmit = this.onSubmit.bind(this)
        this.validate = this.validate.bind(this)
    }

    componentDidMount() {
        console.log(this.state.id + "id")
        if (this.state.id === "-1") {
            return
        }

        TaskService.retrieveTask("vishal", this.state.id)
            .then(response => this.setState({
                description: response.data.description,
                isCompleted: response.data.isDone,
                targetDate: moment(response.data.targetDate).format('YYYY-MM-DD')
            }))
    }

    onSubmit(values) {

        if (this.state.id === -1) {
            TaskService.updateTask("vishal",{
                id: this.state.id,
                description: values.description,
                isDone: values.isCompleted,
                targetDate: values.targetDate
            }).then(
                () => {
                    this.props.history.push('/studentpage/mytasks')
                }
            )
        } else {
            TaskService.updateTask("vishal", this.state.id, {
                id: this.state.id,
                description: values.description,
                isDone: values.isCompleted,
                targetDate: values.targetDate,

            }).then(
                () => {
                    this.props.history.push('/studentpage/mytasks');
                }
            )
        }

        console.log(values)
    }

    validate(values) { //First Validate is called then the onSubmit method is called in formik
        let errors = {}

        if (!values.description) {
            errors.description = "Enter a description"
        } else if (values.description.length < 5) {
            errors.description = "Enter atleast 5 characters in description"
        }

        if (!moment(values.targetDate).isValid()) {
            errors.targetDate = "Enter a valid date."
        }

        return errors;
    }

    render() {
        let { description, isCompleted, targetDate } = this.state
        // let targetDate = this.state.targetDate

        return (
            <div>
                <Navbar />
                <h1 style={{marginBottom: "30px"}}><b>MY TASKS</b></h1>
                <div className="container">
                    <Formik
                        initialValues={{ description, isCompleted, targetDate }}
                        onSubmit={this.onSubmit}
                        validate={this.validate}
                        validateOnBlur={false}
                        validateOnChange={false}
                        enableReinitialize={true}
                    >
                        {
                            (props) => (
                                <Form>
                                    <ErrorMessage name="description" component="div" className="alert alert-warning" />
                                    <ErrorMessage name="targetDate" component="div" className="alert alert-warning" />
                                    <fieldset className="form-group">
                                        <label style={{marginBottom: "10px", fontSize: "25px", textAlign: "left"}}><b>Description</b></label>
                                        <Field className="form-control" type="text" name="description" style={{marginLeft: "30%", marginRight: "30%", width: "40%", marginBottom:"10px"}}/>
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label style={{marginBottom: "10px", fontSize: "25px", textAlign: "left"}}><b>Is Completed</b></label>
                                        <Field className="form-control" type="text" name="isCompleted" style={{marginLeft: "30%", marginRight: "30%", width: "40%", marginBottom:"10px"}}/>
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label style={{marginBottom: "10px", fontSize: "25px", textAlign: "left"}}><b>Target Date</b></label>
                                        <Field className="form-control" type="date" name="targetDate" style={{marginLeft: "30%", marginRight: "30%", width: "40%", marginBottom:"10px"}}/>
                                    </fieldset>
                                    <button className="btn btn-success" type="submit">Save</button>
                                </Form>
                            )
                        }
                    </Formik>
                </div>
                <FooterComponent />
            </div>
        )
    }
}

export default Task