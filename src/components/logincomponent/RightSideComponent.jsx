import { Component } from "react"
import "bootstrap/dist/css/bootstrap.css"
import {Image} from "react-bootstrap"

class RightSideComponent extends Component{
    render(){
        return(
            <div className="RightSideComponent">
                <Image src="./login.png" style={{border:"none", width:"70%", marginLeft:"25%", marginTop:"5px"}}/>
            </div>
        )
    }
}

export default RightSideComponent;