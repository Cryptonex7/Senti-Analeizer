import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import logo from "./assets/logo.svg";
import "./App.css";
import { CircularProgress } from "@material-ui/core";

function App() {
  const [text, setText] = useState("");
  const [pending, setPending] = useState(false);
  const [op, setOp] = useState("Enter Text to Analyse Sentiment");

  const handleSubmit = () => {
    setPending(true);
    fetch("https://jsonplaceholder.typicode.com/posts/", {
      method: "POST",
      body: {
        userId: 69,
        id: 69,
        title: `AtharvU1 - the Koder ${text}`,
        body: "Maine Utkarsh ke Mame wala Powder Gaal pe lagaya hai...",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        setOp(json.id);
        setPending(false);
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Senti-Analeizer!</h1>

        <img src={logo} className="App-logo" alt="logo" />

        <div className="container">
          <TextField
            fullWidth
            onChange={(e) => setText(e.target.value)}
            variant="outlined"
            label="Enter Sentiment"
            className="input"
          />

          <br />
          <br />
          <Divider />
          <br />

          {pending ? <CircularProgress /> : <div className="output">{op}</div>}

          <br />
          <br />

          <Button
            disabled={!text.length}
            onClick={handleSubmit}
            variant="outlined"
            color="primary"
          >
            Submit
          </Button>
        </div>
      </header>
    </div>
  );
}

export default App;
