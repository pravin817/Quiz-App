import React, { useState } from "react";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import "./Question.css";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Question = ({
  currQues,
  setCurrQues,
  questions,
  options,
  correct,
  score,
  setScore,
  setQuestions,
}) => {
  const [selected, setSelected] = useState("");
  const [error, setError] = useState(false);

  const navigate = useNavigate();
  const handleSelect = (opt) => {
    if (selected === opt && selected === correct) {
      return "select";
    } else if (selected === opt && selected !== correct) {
      return "wrong";
    } else if (opt === correct) {
      return "select";
    }
  };

  const handleCheck = (opt) => {
    setSelected(opt);

    if (opt === correct) {
      setScore(score + 1);
    }

    setError(false);
  };

  const handleNext = () => {
    if (currQues > 8) {
      navigate("/result");
    } else if (selected) {
      setCurrQues(currQues + 1);
      setSelected();
    } else {
      setError("Please select an option first");
    }
  };

  return (
    <div className="question">
      <h1>Question : {currQues + 1}</h1>

      <div className="singleQuestion">
        <h2>{questions[currQues].question}</h2>

        <div className="options">
          {error && <ErrorMessage>{error}</ErrorMessage>}

          {options &&
            options.map((opt) => (
              <button
                onClick={() => handleCheck(opt)}
                key={opt}
                className={`singleOption  ${selected && handleSelect(opt)}`}
                disabled={selected}
              >
                {opt}
              </button>
            ))}
        </div>

        <div className="controls">
          <Button
            varient="contained"
            color="secondary"
            size="large"
            style={{ width: 185 }}
            href="/"
            // onClick={handleQuit}
          >
            Quit 🛑
          </Button>
          <Button
            varient="contained"
            color="primary"
            size="large"
            style={{ width: 185 }}
            // href="/"
            onClick={handleNext}
          >
            Next Question 🡆
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Question;
