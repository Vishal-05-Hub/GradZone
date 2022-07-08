import { Component } from "react";
import {Form, Button, Image} from "react-bootstrap"
import {Row, Container } from "react-bootstrap";
import AuthenticationService from "./AuthenticationService";
import { withRouter } from "react-router";

class LeftSideComponent extends Component{

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
        
        if(this.state.username==='CSE001' && this.state.password==='dummy'){
            AuthenticationService.registerSuccessfulLogin(this.state.username,this.state.password)
            this.props.history.push(`/studentpage/dashboard`)
            
        }
        else {
            this.setState({showSuccessMessage:false})
            this.setState({hasLoginFailed:true})
        }
    }

    render(){
        return(
            <div className={`LeftSideComponent $ shadow-box`} style={{marginTop:"20%", marginLeft:"10px"}}>
                <Container className="mt-5">
                {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
                    <Row className="text-center">
                            <Image src="./signup.png" style={{width:"300px", marginBottom:"20px", marginLeft:"40px",marginTop:"30px"}}/>
                            <Form>
                                <Form.Group controlId="formBasicEmail" style={{marginBottom:"15px"}}>
                                <Form.Control name="username" value={this.state.username} onChange={this.handleChange} placeholder="Enter Your User Id" />
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword" style={{marginBottom:"15px"}}>
                                <Form.Control type="password" name="password" placeholder="Enter Your Password" value={this.state.password} onChange={this.handleChange} />
                                </Form.Group>

                                <Button variant="primary btn-block" onClick={this.loginClicked}>LOGIN</Button>
                            </Form>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default withRouter(LeftSideComponent);