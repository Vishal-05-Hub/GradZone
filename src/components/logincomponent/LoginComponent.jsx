import {Row, Col, Container} from "react-bootstrap";
import FooterComponent from "./FooterComponent";
import MenuComponent from "./MenuComponent";
import RightSideComponent from "./RightSideComponent";
import LeftSideComponent from "./LeftSideComponent";

function LoginComponent() {
    return (
      <div className="Login">
        <MenuComponent />
        <Container className="mt-5">
          <Row>
            <Col lg={4} md={6} sm={12} className="text-center">
              <LeftSideComponent />
            </Col>
            <Col lg={8} md={6} sm={12}>
              <RightSideComponent />
            </Col>
          </Row>
        </Container>
        <FooterComponent />
      </div>
    );
  }

export default LoginComponent;