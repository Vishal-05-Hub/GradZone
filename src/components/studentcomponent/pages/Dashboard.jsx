import React from "react";
import Navbar from "../Navbar";
import FooterComponent from "../../logincomponent/FooterComponent";

function Dashboard(){
    return(
        <div className="dashboard">
            <Navbar />
            <p className="title"><b>HELLO STUDENT!!</b></p>
            <h1 className="title">WELCOME TO THE GRADZONE</h1>
            <h2 className="title">Explore More Features of the Application using Sidebar.</h2>
            <FooterComponent />
        </div>
    )
}

export default Dashboard;