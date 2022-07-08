import { Component } from "react";
import moment from "moment";
import { Formik, Form, Field, ErrorMessage } from "formik";
import AddStudentService from "../../../api/adminside/AddStudentService";
import Navbar from "../Navbar";
import FooterComponent from "../../logincomponent/FooterComponent";

class AddStudent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            id:  this.props.match.params.id,
            FirstName: "",
            LastName: "",
            RoleType: "",
            EMail: "",
            MobileNumber: "",
            DOB: "",
            PersuingYear: "",
            Semester: "",
            FatherName: "",
            Username: "",
            Password: ""
        }
        this.onSubmit = this.onSubmit.bind(this)
        this.validate = this.validate.bind(this)
    }

    onSubmit(values) {

            AddStudentService.addStudent({
                firstName: values.FirstName,
                lastName: values.LastName,
                roleType: values.RoleType,
                email: values.EMail,
                mobileNumber: values.MobileNumber,
                dob: values.DOB,
                year: values.PersuingYear,
                semester: values.Semester,
                fatherName: values.FatherName,
                userName: values.Username,
                password: values.Password
            }).then(
                () => {
                    this.props.history.push('/adminpage/studentlist');
                }
            )

        console.log(values)
    }

    validate(values) { //First Validate is called then the onSubmit method is called in formik
        let errors = {}

        if (!(values.FirstName || values.LastName || values.RoleType || values.EMail || values.MobileNumber || values.PersuingYear || 
            values.Semester || values.FatherName || values.Username || values.Password)) {
            errors.description = "Enter a Valid field."
        }

        if (!moment(values.DOB).isValid()) {
            errors.DOB = "Enter a valid date."
        }

        return errors;
    }

    render() {
        let { FirstName,  LastName, RoleType, EMail, MobileNumber, DOB, PersuingYear, Semester, FatherName, Username, Password} = this.state
        // let targetDate = this.state.targetDate

        return (
            <div>
                <Navbar />
                <h1 style={{marginBottom: "30px"}}><b>ADD STUDENT</b></h1>
                <div className="container">
                    <Formik
                        initialValues={{FirstName,  LastName, RoleType, EMail, MobileNumber, DOB, PersuingYear, Semester, FatherName, Username, Password}}
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
                                        <label style={{marginBottom: "10px", fontSize: "25px", textAlign: "left"}}><b>First Name</b></label>
                                        <Field className="form-control" type="text" style={{marginLeft: "30%", marginRight: "30%", width: "40%", marginBottom:"10px"}} name="FirstName" />
                                    </fieldset>

                                    <fieldset className="form-group">
                                        <label style={{marginBottom: "10px", fontSize: "25px", textAlign: "left"}}><b>Last Name</b></label>
                                        <Field className="form-control" type="text" name="LastName" style={{marginLeft: "30%", marginRight: "30%", width: "40%", marginBottom:"10px"}} />
                                    </fieldset>

                                    <fieldset className="form-group">
                                        <label style={{marginBottom: "10px", fontSize: "25px", textAlign: "left"}}><b>Role Type</b></label>
                                        <Field className="form-control" type="text" name="RoleType" style={{marginLeft: "30%", marginRight: "30%", width: "40%", marginBottom:"10px"}} />
                                    </fieldset>

                                    <fieldset className="form-group">
                                        <label style={{marginBottom: "10px", fontSize: "25px", textAlign: "left"}}><b>E-Mail</b></label>
                                        <Field className="form-control" type="email" name="EMail" style={{marginLeft: "30%", marginRight: "30%", width: "40%", marginBottom:"10px"}} />
                                    </fieldset>

                                    <fieldset className="form-group">
                                        <label style={{marginBottom: "10px", fontSize: "25px", textAlign: "left"}}><b>Mobile Number</b></label>
                                        <Field className="form-control" type="text" name="MobileNumber" style={{marginLeft: "30%", marginRight: "30%", width: "40%", marginBottom:"10px"}} />
                                    </fieldset>

                                    <fieldset className="form-group">
                                        <label style={{marginBottom: "10px", fontSize: "25px", textAlign: "left"}}><b>DOB</b></label>
                                        <Field className="form-control" type="date" name="DOB" style={{marginLeft: "30%", marginRight: "30%", width: "40%", marginBottom:"10px"}}/>
                                    </fieldset>

                                    <fieldset className="form-group">
                                        <label style={{marginBottom: "10px", fontSize: "25px", textAlign: "left"}}><b>Persuing Year</b></label>
                                        <Field className="form-control" type="text" name="PersuingYear" style={{marginLeft: "30%", marginRight: "30%", width: "40%", marginBottom:"10px"}}/>
                                    </fieldset>

                                    <fieldset className="form-group">
                                        <label style={{marginBottom: "10px", fontSize: "25px", textAlign: "left"}}><b>Semester</b></label>
                                        <Field className="form-control" type="text" name="Semester" style={{marginLeft: "30%", marginRight: "30%", width: "40%", marginBottom:"10px"}}/>
                                    </fieldset>

                                    <fieldset className="form-group">
                                        <label style={{marginBottom: "10px", fontSize: "25px", textAlign: "left"}}><b>Father Name</b></label>
                                        <Field className="form-control" type="text" name="FatherName" style={{marginLeft: "30%", marginRight: "30%", width: "40%", marginBottom:"10px"}}/>
                                    </fieldset>

                                    <fieldset className="form-group">
                                        <label style={{marginBottom: "10px", fontSize: "25px", textAlign: "left"}}><b>Username</b></label>
                                        <Field className="form-control" type="text" name="Username" style={{marginLeft: "30%", marginRight: "30%", width: "40%", marginBottom:"10px"}}/>
                                    </fieldset>

                                    <fieldset className="form-group">
                                        <label style={{marginBottom: "10px", fontSize: "25px", textAlign: "left"}}><b>Password</b></label>
                                        <Field className="form-control" type="text" name="Password" style={{marginLeft: "30%", marginRight: "30%", width: "40%", marginBottom:"10px"}}/>
                                    </fieldset>
 
                                    <button className="btn btn-success" type="submit" style={{marginBottom:"50px"}}>Save</button>
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

export default AddStudent