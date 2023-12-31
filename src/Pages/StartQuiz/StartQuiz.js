import React, { useState } from "react";
import "./StartQuiz.css";

import { Button, MenuItem, TextField } from "@mui/material";
import Categories from "../../Data/Categories";
import { useNavigate } from "react-router-dom";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import Welcome from "../../components/Welcome/Welcome";

const StartQuiz = ({ name, setName, fetchQuestions }) => {
  // const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!name || !category || !difficulty) {
      setError(true);
      return;
    } else {
      setError(false);

      fetchQuestions(category, difficulty);
      navigate("/quiz");
    }
    console.warn("clicked");
  };
  return (
    <div className="container">
        <Welcome/>
      <div className="main-div">
        <div className="content">
          <div className="settings">
            <span className="quiz-settings">Quiz Settings</span>

            <div className="quiz-setting">
              {error && <ErrorMessage>Please Fill all the fields</ErrorMessage>}
              <TextField
                label="Enter Your Name"
                variant="outlined"
                style={{ marginBottom: 25 }}
                onChange={(e) => setName(e.target.value)}
                value={name}
              />

              <TextField
                select
                label="Select Category"
                variant="outlined"
                style={{ marginBottom: 30 }}
                onChange={(e) => setCategory(e.target.value)}
                value={category}
              >
                {Categories.map((cat) => (
                  <MenuItem key={cat.category} value={cat.value}>
                    {cat.category}
                  </MenuItem>
                ))}
              </TextField>

              <TextField
                select
                label="Select Difficulty"
                variant="outlined"
                style={{ marginBottom: 30 }}
                onChange={(e) => setDifficulty(e.target.value)}
                value={difficulty}
              >
                <MenuItem key="Easy" value="easy">
                  Easy
                </MenuItem>

                <MenuItem key="Medium" value="medium">
                  Medium
                </MenuItem>

                <MenuItem key="Hard" value="hard">
                  Hard
                </MenuItem>
              </TextField>

              <Button
                variant="contained"
                color="primary"
                size="large"
                onClick={handleSubmit}
              >
                Start Quiz
              </Button>
            </div>
          </div>

          <img src="/quiz.svg" alt="Quiz img" className="banner" />
        </div>
      </div>
    </div>
  );
};

export default StartQuiz;
