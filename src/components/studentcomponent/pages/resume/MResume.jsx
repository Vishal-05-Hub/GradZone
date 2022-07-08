import React from "react";
import Navbar from "../../Navbar";
import FooterComponent from "../../../logincomponent/FooterComponent";
import { Button } from "react-bootstrap";
import "./MResume.css";

function MResume(){
    return(
        <div className="MSyllabus">
            <Navbar />
            <h1 className="title"><b>BUILD YOUR RESUME HERE</b></h1>
            <Button className="button" href="http://localhost:3000" target="_blank"p>Click Here To Build</Button>
            <FooterComponent />
        </div>
    )
}

export default MResume;