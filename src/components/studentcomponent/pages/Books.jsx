import React, { Component } from "react";
import Navbar from "../Navbar";
import FooterComponent from "../../logincomponent/FooterComponent";
import BooksService from "../../../api/studentside/BooksService";

class Books extends Component{

    constructor(props) {
        super(props)
        this.state = {
            books: [],
            message: null
        }
    }

    componentDidMount(){
        BooksService.retrieveBooks()
        .then(
            response => {
                this.setState({books: response.data})
            }
        )
    }

    render(){
        return(
            <div className="books">
                <Navbar />
                <h1 style={{marginBottom: "30px"}}><b>BOOKS</b></h1>
                <div className="container">
                    <table className="table">
                        <thead>
                        <tr>
                            <th>S.NO</th>
                            <th>BOOK NAME</th>
                            <th>AUTHOR NAME</th>
                            <th>LINK</th>
                        </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.books.map(
                                    book =>
                                        <tr key={book.id}>
                                            <td>{book.id}</td>
                                            <td>{book.bookName}</td>
                                            <td>{book.authorName}</td>
                                            <td>{<a href={"http://localhost:9092/api/getbooks/5/" + book.bookName} style={{textDecoration:'none'}}>Click Here To Download</a>}</td>
                                        </tr>
                                )
                            } 
                        </tbody>
                    </table>
                </div>
                <FooterComponent />
            </div>
        )
    }

}

export default Books;