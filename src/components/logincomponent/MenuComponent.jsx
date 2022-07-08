import React from "react";
import { Navbar, Container, Nav} from "react-bootstrap";
import * as FaIcons from "react-icons/fa";

function MenuComponent() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="">
            <img alt="" src="/Logo.png" width="38" height="30" className="d-inline-block align-top"
            />{" "}
            <b>GRADZONE</b> 
          </Navbar.Brand>
          <Nav.Link className="nav-link" href="http://localhost:4200/adminlogin"><FaIcons.FaUserCog style={{marginBottom: "1px", color: "white"}}/><b className="linkText"> ADMIN LOGIN</b></Nav.Link>
        </Container>
      </Navbar>
    </div>
  );
}

export default MenuComponent;