import React from "react";
import Navbar from "../Navbar";
import FooterComponent from "../../logincomponent/FooterComponent";
import { Button } from "react-bootstrap";
import "./MSyllabus.css";

function MSyllabus(){
    return(
        <div className="MSyllabus">
            <Navbar />
            <h1 className="title"><b>FIFTH SEMESTER SYLLABUS</b></h1>
            <Button className="button" href="http://localhost:4200/studentpage/semsyllabus">Click Here To View</Button>
            <FooterComponent />
        </div>
    )
}

export default MSyllabus;