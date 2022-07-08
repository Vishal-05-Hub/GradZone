import React, { Component } from "react";
import Navbar from "../../Navbar";
import FooterComponent from "../../../logincomponent/FooterComponent";
import "./Quiz.css";
import QuizService from "../../../../api/studentside/QuizService";
import QuestionBox from "./QuestionBox";
import Result from "./Result";

class Quiz extends Component {

    constructor(props) {
        super(props)
        this.state = {
            questions: [],
            score: 0,
            responses: 0,
            subjectName: "DAA"
        }
    }

    computeAnswer = (answer, correctAnswer) => {
        if (answer === correctAnswer) {
            this.setState({
                score: this.state.score + 1
            });
        }
        this.setState({
            responses: this.state.responses + 1
        });
    };

    attemptAgain = () => {
        QuizService.retrieveQuiz()
            .then(
                response => {
                    this.setState({ questions: response.data })
                }
            )
        this.setState({
            score: 0,
            responses: 0
        })
    }

    getQuizForSubject(chooseSubjectName) {
        this.subjectName = chooseSubjectName;
        console.log(this.subjectName);
        console.log(chooseSubjectName);
        QuizService.retrieveQuiz()
            .then(
                response => {
                    this.setState({ questions: response.data })
                }
            )
    }

    componentDidMount() {
        // QuizService.retrieveQuiz()
        //     .then(
        //         response => {
        //             this.setState({ questions: response.data })
        //         }
        //     )
        this.getQuizForSubject("DAA");
    }

    // handleSelect=()=>{
    //     console.log("Trigger");
    //     <div id="container">
    //                 <div className="title">
    //                     <b>HH</b>
    //                     <h5>(Attempt All Questions.)</h5>
    //                 </div>
    //                 <div className="question">
    //                     {
    //                         this.state.responses < 10 &&
    //                         this.state.questions.map(
    //                             inquestion =>
    //                                 <QuestionBox id={inquestion.id}
    //                                     question={inquestion.question}
    //                                     option1={inquestion.option1}
    //                                     option2={inquestion.option2}
    //                                     option3={inquestion.option3}
    //                                     option4={inquestion.option4}
    //                                     answer={inquestion.answer}
    //                                     selected={answer => this.computeAnswer(answer, inquestion.answer)}
    //                                 />
    //                         )
    //                     }
    //                     {this.state.responses === 10 ? <Result score={this.state.score} attemptAgain={this.attemptAgain} /> : null}
    //                 </div>
    //             </div>
    //   }


    render() {
        return (
            <div className="quiz">
                <Navbar />
                {/* <Button onClick={this.getQuizForSubject("DAA")}>Click Here To Get the Quiz.</Button> */}
                {/* <div className="container" style={{marginTop:"10px"}}>
                    <Dropdown>
                        <Dropdown.Toggle variant="dark" id="dropdown-basic">
                            Please choose a subject to attempt the quiz.
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item as="button" >DAA</Dropdown.Item>
                            <Dropdown.Item as="button" >Compiler Design</Dropdown.Item>
                            <Dropdown.Item as="button" >Machine Learning</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div> */}
                <div id="container">
                    <div className="title1">
                        <b>Quiz</b>
                        <h5>(Attempt All Questions.)</h5>
                    </div>
                    <div className="question">
                        {
                            
                            this.state.responses < 10 &&
                            this.state.questions.map(
                                inquestion =>
                                    <QuestionBox id={inquestion.id}
                                        question={inquestion.question}
                                        option1={inquestion.option1}
                                        option2={inquestion.option2}
                                        option3={inquestion.option3}
                                        option4={inquestion.option4}
                                        answer={inquestion.answer}
                                        selected={answer => this.computeAnswer(answer, inquestion.answer)}
                                    />
                            )
                        }
                        {this.state.responses === 10 ? <Result score={this.state.score} attemptAgain={this.attemptAgain} /> : null}
                    </div>
                </div>
                <FooterComponent />
            </div>
        )
    }
}

export default Quiz;