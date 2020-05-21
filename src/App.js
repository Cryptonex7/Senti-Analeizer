import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import logo from "./assets/logo.svg";
import "./App.css";
import { Divider } from "@material-ui/core";

function App() {
  const [text, setText] = useState();
  const exampleOutput = text ? "Positive" : "Enter Text to Analyse Sentiment";

  return (
    <div className="App">
      <header className="App-header">
        <h1>Senti-Analeizer!</h1>

        <img src={logo} className="App-logo" alt="logo" />

        <div className="container">
          <TextField
            fullWidth
            variant="outlined"
            onChange={(e) => setText(e.target.value)}
            label="Enter Sentiment"
            className="input"
          />

          <br />
          <br />
          <Divider />
          <br />

          <div className="output">{exampleOutput}</div>
        </div>
      </header>
    </div>
  );
}

export default App;
