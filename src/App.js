import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import logo from "./assets/logo.svg";
import "./App.css";
import { Divider, Button } from "@material-ui/core";

function App() {
  const [text, setText] = useState();
  const [op, setOp] = useState("Enter Text to Analyse Sentiment");

  const handleSubmit = () => {
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
      .then((json) => setOp(json.id));
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

          <div className="output">{op}</div>

          <Button onClick={handleSubmit}>Submit</Button>
        </div>
      </header>
    </div>
  );
}

export default App;
