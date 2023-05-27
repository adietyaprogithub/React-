import React, { useEffect, useState } from "react";

export default function Admin() {
  const [questions, setQuestions] = useState([]);
  const [question, setQuestion] = useState("");
  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");
  const [option3, setOption3] = useState("");
  const [option4, setOption4] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState("");

  const handleAddQuestion = () => {
    const newQuestion = {
      question,
      options: [option1, option2, option3, option4],
      correctAnswer,
    };
    setQuestions([...questions, newQuestion]);

    setQuestion("");
    setOption1("");
    setOption2("");
    setOption3("");
    setOption4("");
    setCorrectAnswer("");
  };

  useEffect(() => {
    const storedQuestions = localStorage.getItem("questions");
    if (storedQuestions) {
      setQuestions(JSON.parse(storedQuestions));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("questions", JSON.stringify(questions));
  }, [questions]);

  return (
    <div>
      <h1>Admin Page</h1>

      <input
        type="text"
        placeholder="Enter Question"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />

      <input
        type="text"
        placeholder="Enter Option 1"
        value={option1}
        onChange={(e) => setOption1(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter Option 2"
        value={option2}
        onChange={(e) => setOption2(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter Option 3"
        value={option3}
        onChange={(e) => setOption3(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter Option 4"
        value={option4}
        onChange={(e) => setOption4(e.target.value)}
      />

      <input
        type="text"
        placeholder="Enter Correct Answer"
        value={correctAnswer}
        onChange={(e) => setCorrectAnswer(e.target.value)}
      />

      <button onClick={handleAddQuestion}> Add Questions </button>

      <h2>Questions</h2>
      <ul>
        {questions.map((question, index) => (
          <li key={index}>
            <h3>{question.question}</h3>
            <ul>
              {question.options.map((option, optionIndex) => (
                <li key={optionIndex}> {option}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}
