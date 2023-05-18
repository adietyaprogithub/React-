import React, { useState } from "react";
import { QuizData } from "../data/quizData";
import { returnStatement } from "@babel/types";
import QuizResult from "./QuizResult";

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [clickedoption, setclickoption] = useState(0);
  const [showresult, setshowresult] = useState(false);

  const changeQuestion = () => {
    updatescore();
    if (currentQuestion < QuizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setclickoption(0);
    } else {
      setshowresult(true);
    }
  };

  const updatescore = () => {
    if (clickedoption === QuizData[currentQuestion].answer) {
      setScore(score + 1);
    }
  };

  return (
    <div>
      <p className="heading-txt"> Quiz App</p>
      <div className="container">
        {showresult ? (
          <QuizResult score={score} totalscore={QuizData.length} />
        ) : (
          <>
            <div className="question">
              <span id="question-number">{currentQuestion + 1}.</span>
              <span id="question-text">
                {QuizData[currentQuestion].Question}
              </span>
            </div>
            <div className="option-container">
              {QuizData[currentQuestion].options.map((option, i) => {
                return (
                  <button
                    // className="option-btn"
                    className={` option-btn  ${
                      clickedoption == i + 1 ? "checked" : null
                    } `}
                    key={i}
                    onClick={() => setclickoption(i + 1)}
                  >
                    {option}
                  </button>
                );
              })}
            </div>
            <input
              type="button"
              value="Next"
              id="next-button"
              onClick={changeQuestion}
            />
          </>
        )}
      </div>
    </div>
  );
}
