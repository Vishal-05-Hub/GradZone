import React from "react";
import './Quiz.css';

const QuestionBox = ({key, question, option1, option2, option3, option4, selected}) => {

  return (
    <div className="questionBox">
      <div className="question">{question}</div>
      <div>
        {/* <button className="answerBtn" onClick={() => {selected(option1)}}>{option1}</button><br/>
        <button className="answerBtn" onClick={() => {selected(option2)}}>{option2}</button><br/>
        <button className="answerBtn" onClick={() => {selected(option3)}}>{option3}</button><br/> */}
        {/* <button className="answerBtn" onClick={() => {selected(option4)}}>{option4}</button><br/> */}
        <input type="radio" value={option1} onClick={() => {selected(option1)}}/> <span className="answerBtn">{option1}</span> <br/>
        <input type="radio" value={option2} onClick={() => {selected(option2)}}/> <span className="answerBtn">{option2}</span> <br/>
        <input type="radio" value={option3} onClick={() => {selected(option3)}}/> <span className="answerBtn">{option3}</span> <br/>
        <input type="radio" value={option4} onClick={() => {selected(option4)}}/> <span className="answerBtn">{option4}</span> <br/>
      </div>
    </div>
  );
  
};

export default QuestionBox;