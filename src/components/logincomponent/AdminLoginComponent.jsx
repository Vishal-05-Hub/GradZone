import React, { Component } from "react";
import { Form, Button, Image } from "react-bootstrap"
import { Row, Container } from "react-bootstrap";
import FooterComponent from "./FooterComponent";
import { Navbar, Nav } from "react-bootstrap";
import * as FaIcons from "react-icons/fa";
import AuthenticationService from "./AuthenticationService";


function Menu() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="">
            <img alt="" src="/Logo.png" width="38" height="30" className="d-inline-block align-top"
            />{" "}
            <b>GRADZONE</b>
          </Navbar.Brand>
          <Nav.Link className="nav-link" href="http://localhost:4200/"><FaIcons.FaUser style={{ marginBottom: "2px", color: "white" }} /><b className="linkText"> STUDENT LOGIN</b></Nav.Link>
        </Container>
      </Navbar>
    </div>
  );
}

class AdminLoginComponent extends Component {

  constructor(props) {
    super(props)

    this.state = {
      username: '',
      password: '',
      hasLoginFailed: false,
      showSuccessMessage: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.loginClicked = this.loginClicked.bind(this);
  }

  handleChange(event) {
    this.setState(
      {
        [event.target.name]
          : event.target.value
      }
    )
  }

  loginClicked() {

    if (this.state.username === 'ADM001' && this.state.password === 'dummy') {
      AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password)
      this.props.history.push(`/adminpage/addstudent`)

    }
    else {
      this.setState({ showSuccessMessage: false })
      this.setState({ hasLoginFailed: true })
    }
  }

  render() {
    return (
      <div className="Admin">
        <Menu />
        <div className="AdminLoginComponent">
          <Container>
            <Row className="text-center">
              <Image src="./AdminLogin.png" style={{ width: "300px", marginBottom: "20px", marginLeft: "40px" }} />
              <Form>
                <Form.Group controlId="formBasicEmail" style={{ marginBottom: "15px" }}>
                  <Form.Control name="username" value={this.state.username} onChange={this.handleChange} placeholder="Enter Your Admin Id" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword" style={{ marginBottom: "15px" }}>
                  <Form.Control type="password" name="password"  value={this.state.password} onChange={this.handleChange} placeholder="Enter Your Password" />
                </Form.Group>

                <Button variant="primary btn-block" onClick={this.loginClicked} style={{ marginBottom: "15px" }}>LOGIN</Button>
              </Form>
            </Row>
          </Container>
        </div>
        <FooterComponent />
      </div>
    )
  }
}

export default AdminLoginComponent;